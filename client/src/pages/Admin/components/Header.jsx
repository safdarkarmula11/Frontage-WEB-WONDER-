import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/authService";

function Header({ onMenuClick = () => {} }) {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="flex items-center justify-between gap-4 border-b border-neutral-800 bg-neutral-900 px-4 py-5 sm:px-8">

      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          aria-label="Open menu"
          className="text-white lg:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div>
          <h1 className="text-xl font-bold text-white sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-1 hidden text-neutral-400 sm:block">
            Manage dinosaurs, eras, and museum content.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">

        <div className="hidden text-right sm:block">
          <p className="font-semibold text-white">
            Administrator
          </p>

          <p className="text-sm text-neutral-400">
            admin@jurassicverse.com
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="whitespace-nowrap rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-700 sm:px-5 sm:text-base"
        >
          Logout
        </button>

      </div>

    </header>
  );
}

export default Header;