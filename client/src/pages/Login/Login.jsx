import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/common/Button/Button";
import ErrorState from "../../components/common/ErrorState/ErrorState";

import { login } from "../../services/authService";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await login(form);

      navigate("/admin");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-md rounded-xl border border-neutral-800 bg-neutral-900 p-8">

        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          Admin Login
        </h1>

        {error && <ErrorState message={error} />}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>
            <label className="mb-2 block text-white">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none focus:border-green-500"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-white">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none focus:border-green-500"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

        </form>

      </div>
    </main>
  );
}

export default Login;