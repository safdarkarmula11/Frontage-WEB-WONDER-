const API_URL = `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api`;

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, options);

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Request failed.");
  }

  return result.data;
}

function createHeaders(token, isJson = true) {
  const headers = {};

  if (isJson) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

export function get(endpoint, token) {
  return request(endpoint, {
    headers: createHeaders(token, false),
  });
}

export function post(endpoint, body, token, isFormData = false) {
  const headers = {};

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return request(endpoint, {
    method: "POST",
    headers,
    body: isFormData ? body : JSON.stringify(body),
  });
}

export function put(endpoint, body, token, isFormData = false) {
  const headers = {};

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return request(endpoint, {
    method: "PUT",
    headers,
    body: isFormData ? body : JSON.stringify(body),
  });
}

export function del(endpoint, token) {
  return request(endpoint, {
    method: "DELETE",
    headers: createHeaders(token, false),
  });
}