import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-bold text-green-500">
          404
        </h1>

        <p className="mb-8 text-gray-400">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;