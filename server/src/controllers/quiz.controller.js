import {
  buildQuiz,
  saveQuizAttempt,
  getLeaderboard,
} from "../services/quiz.service.js";

/**
 * GET /api/quiz
 */
export async function getQuiz(req, res) {
  try {
    const questions = await buildQuiz(8);

    if (questions.length === 0) {
      return res.status(200).json({
        success: true,
        data: [],
        message: "Not enough dinosaur data to generate a quiz yet.",
      });
    }

    res.status(200).json({
      success: true,
      data: questions,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to load quiz.",
    });
  }
}

/**
 * POST /api/quiz/submit
 */
export async function submitQuiz(req, res) {
  try {
    const { score, totalQuestions } = req.body;

    if (
      typeof score !== "number" ||
      typeof totalQuestions !== "number" ||
      score < 0 ||
      totalQuestions <= 0 ||
      score > totalQuestions
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid score submitted.",
      });
    }

    const attempt = await saveQuizAttempt(
      req.user.id,
      score,
      totalQuestions
    );

    res.status(201).json({
      success: true,
      data: attempt,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to save quiz attempt.",
    });
  }
}

/**
 * GET /api/quiz/leaderboard
 */
export async function getQuizLeaderboard(req, res) {
  try {
    const leaderboard = await getLeaderboard(10);

    res.status(200).json({
      success: true,
      data: leaderboard,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to load leaderboard.",
    });
  }
}