import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/common/Button/Button";
import ErrorState from "../../components/common/ErrorState/ErrorState";

import { register } from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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
      await register(form);

      navigate("/quiz");
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

        <h1 className="mb-2 text-center text-4xl font-bold text-white">
          Create Account
        </h1>

        <p className="mb-8 text-center text-sm text-neutral-400">
          Sign up to take quizzes and save your scores.
        </p>

        {error && <ErrorState message={error} />}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>
            <label className="mb-2 block text-white">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none focus:border-green-500"
              required
              minLength={2}
            />
          </div>

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
              minLength={6}
            />

            <p className="mt-1 text-xs text-neutral-500">
              At least 6 characters.
            </p>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create Account"}
          </Button>

        </form>

        <p className="mt-6 text-center text-sm text-neutral-400">
          Already have an account?{" "}
          <Link to="/login" className="text-green-500 hover:underline">
            Log in
          </Link>
        </p>

      </div>
    </main>
  );
}

export default Register;