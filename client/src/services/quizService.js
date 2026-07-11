import { get, post } from "./api";

export function getQuiz(token) {
  return get("/quiz", token);
}

export function submitQuiz(data, token) {
  return post("/quiz/submit", data, token);
}

export function getLeaderboard() {
  return get("/quiz/leaderboard");
}