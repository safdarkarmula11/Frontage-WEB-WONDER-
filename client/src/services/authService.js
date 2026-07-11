import { post } from "./api";

const TOKEN_KEY = "token";
const USER_KEY = "user";

export async function register(data) {
  const result = await post("/auth/register", data);

  localStorage.setItem(TOKEN_KEY, result.token);
  localStorage.setItem(USER_KEY, JSON.stringify(result.user));

  return result;
}

export async function login(credentials) {
  const result = await post("/auth/login", credentials);

  localStorage.setItem(TOKEN_KEY, result.token);
  localStorage.setItem(USER_KEY, JSON.stringify(result.user));

  return result;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  const user = localStorage.getItem(USER_KEY);

  return user ? JSON.parse(user) : null;
}

export function isAuthenticated() {
  return !!getToken();
}