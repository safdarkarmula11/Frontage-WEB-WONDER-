import prisma from "../config/prisma.js";

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function pickWrongOptions(pool, correct, count) {
  const unique = [...new Set(pool.filter((value) => value && value !== correct))];

  return shuffle(unique).slice(0, count);
}

/**
 * Builds a set of multiple-choice questions generated live from
 * whatever dinosaur/era data currently exists in the database.
 * No manual question-writing required.
 */
export async function buildQuiz(requestedCount = 8) {
  const dinosaurs = await prisma.dinosaur.findMany({
    include: { era: true },
  });

  if (dinosaurs.length === 0) {
    return [];
  }

  const allDiets = dinosaurs.map((d) => d.diet);
  const allEraNames = [...new Set(dinosaurs.map((d) => d.era?.name).filter(Boolean))];

  const fallbackEraNames = ["Triassic", "Jurassic", "Cretaceous", "Permian"];

  const pool = shuffle(dinosaurs);
  const count = Math.min(requestedCount, pool.length * 2);

  const questions = [];

  let index = 0;

  while (questions.length < count && index < pool.length) {
    const dinosaur = pool[index];
    index++;

    // Diet question
    const wrongDiets = pickWrongOptions(allDiets, dinosaur.diet, 3);

    if (wrongDiets.length === 3) {
      questions.push({
        id: `diet-${dinosaur.id}`,
        question: `What was the diet of the ${dinosaur.name}?`,
        options: shuffle([dinosaur.diet, ...wrongDiets]),
        correctAnswer: dinosaur.diet,
      });
    }

    if (questions.length >= count) break;

    // Era question
    if (dinosaur.era) {
      const eraOptions = allEraNames.length >= 4 ? allEraNames : fallbackEraNames;
      const wrongEras = pickWrongOptions(eraOptions, dinosaur.era.name, 3);

      if (wrongEras.length === 3) {
        questions.push({
          id: `era-${dinosaur.id}`,
          question: `Which era did the ${dinosaur.name} live in?`,
          options: shuffle([dinosaur.era.name, ...wrongEras]),
          correctAnswer: dinosaur.era.name,
        });
      }
    }
  }

  return shuffle(questions).slice(0, count);
}

export async function saveQuizAttempt(userId, score, totalQuestions) {
  return prisma.quizAttempt.create({
    data: {
      userId,
      score,
      totalQuestions,
    },
  });
}

export async function getLeaderboard(limit = 10) {
  const attempts = await prisma.quizAttempt.findMany({
    orderBy: [{ score: "desc" }, { createdAt: "asc" }],
    take: limit,
    include: {
      user: {
        select: { name: true },
      },
    },
  });

  return attempts.map((attempt) => ({
    id: attempt.id,
    name: attempt.user.name,
    score: attempt.score,
    totalQuestions: attempt.totalQuestions,
    createdAt: attempt.createdAt,
  }));
}