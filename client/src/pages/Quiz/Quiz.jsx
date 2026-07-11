import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Loader from "../../components/common/Loader/Loader";
import ErrorState from "../../components/common/ErrorState/ErrorState";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import Button from "../../components/common/Button/Button";

import { getQuiz, submitQuiz, getLeaderboard } from "../../services/quizService";
import { getToken, getUser } from "../../services/authService";

function Quiz() {
  const token = getToken();
  const user = getUser();

  const [stage, setStage] = useState("loading"); // loading | intro | playing | results
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const [leaderboard, setLeaderboard] = useState([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadQuiz() {
      try {
        const data = await getQuiz(token);

        if (data.length === 0) {
          setError("Not enough dinosaur data to generate a quiz yet. Check back soon!");
          setStage("intro");
          return;
        }

        setQuestions(data);
        setStage("intro");
      } catch (err) {
        console.error(err);
        setError("Failed to load the quiz.");
        setStage("intro");
      }
    }

    loadQuiz();
  }, [token]);

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const data = await getLeaderboard();
        setLeaderboard(data);
      } catch (err) {
        console.error(err);
      }
    }

    if (stage === "intro" || stage === "results") {
      loadLeaderboard();
    }
  }, [stage]);

  function startQuiz() {
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setStage("playing");
  }

  function handleAnswer(option) {
    if (selected) return; // prevent double-click

    setSelected(option);

    const isCorrect = option === questions[currentIndex].correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(async () => {
      const nextIndex = currentIndex + 1;

      if (nextIndex < questions.length) {
        setCurrentIndex(nextIndex);
        setSelected(null);
      } else {
        const finalScore = isCorrect ? score + 1 : score;

        setSaving(true);

        try {
          await submitQuiz(
            { score: finalScore, totalQuestions: questions.length },
            token
          );
        } catch (err) {
          console.error(err);
        } finally {
          setSaving(false);
        }

        setStage("results");
      }
    }, 900);
  }

  if (stage === "loading") {
    return <Loader />;
  }

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-3xl px-6">

        <SectionTitle
          eyebrow="Test Your Knowledge"
          title="Dinosaur Quiz"
          subtitle={`Good luck, ${user?.name || "explorer"}!`}
        />

        {error && stage === "intro" && (
          <div className="mb-8">
            <ErrorState message={error} />
          </div>
        )}

        <AnimatePresence mode="wait">

          {stage === "intro" && questions.length > 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-xl border border-neutral-800 bg-neutral-900 p-10 text-center"
            >
              <p className="text-6xl">🦖</p>

              <h2 className="mt-4 text-2xl font-bold text-white">
                Ready for {questions.length} questions?
              </h2>

              <p className="mt-2 text-neutral-400">
                Answer questions about diets and eras drawn from our real
                dinosaur collection.
              </p>

              <div className="mt-8">
                <Button onClick={startQuiz}>
                  Start Quiz
                </Button>
              </div>
            </motion.div>
          )}

          {stage === "playing" && questions[currentIndex] && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-neutral-800 bg-neutral-900 p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-green-500">
                Question {currentIndex + 1} of {questions.length}
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white">
                {questions[currentIndex].question}
              </h2>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {questions[currentIndex].options.map((option) => {
                  const isCorrect = option === questions[currentIndex].correctAnswer;
                  const isSelected = option === selected;

                  let stateClass =
                    "border-neutral-700 bg-neutral-950 text-white hover:border-green-500";

                  if (selected) {
                    if (isCorrect) {
                      stateClass = "border-green-500 bg-green-500/10 text-green-400";
                    } else if (isSelected) {
                      stateClass = "border-red-500 bg-red-500/10 text-red-400";
                    } else {
                      stateClass = "border-neutral-800 bg-neutral-950 text-neutral-500";
                    }
                  }

                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      disabled={Boolean(selected)}
                      className={`rounded-lg border px-5 py-4 text-left font-medium transition ${stateClass}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {stage === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-neutral-800 bg-neutral-900 p-10 text-center"
            >
              <p className="text-6xl">
                {score / questions.length >= 0.7 ? "🏆" : "🦴"}
              </p>

              <h2 className="font-display mt-4 text-4xl text-white">
                {score} / {questions.length}
              </h2>

              <p className="mt-2 text-neutral-400">
                {saving ? "Saving your score..." : "Score saved to your account."}
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button onClick={startQuiz}>
                  Play Again
                </Button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {leaderboard.length > 0 && (stage === "intro" || stage === "results") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 rounded-xl border border-neutral-800 bg-neutral-900 p-6"
          >
            <h3 className="mb-4 text-lg font-bold text-white">
              🏆 Leaderboard
            </h3>

            <ul className="space-y-2">
              {leaderboard.map((entry, i) => (
                <li
                  key={entry.id}
                  className="flex items-center justify-between rounded-lg bg-neutral-950 px-4 py-3 text-sm"
                >
                  <span className="text-neutral-300">
                    <span className="mr-3 text-neutral-500">#{i + 1}</span>
                    {entry.name}
                  </span>

                  <span className="font-semibold text-green-500">
                    {entry.score}/{entry.totalQuestions}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

      </div>
    </section>
  );
}

export default Quiz;