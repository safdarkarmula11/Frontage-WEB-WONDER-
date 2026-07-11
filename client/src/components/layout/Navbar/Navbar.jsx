import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { isAuthenticated, getUser, logout } from "../../../services/authService";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Explore", path: "/explore" },
  { name: "Timeline", path: "/timeline" },
  { name: "Fossil Finds", path: "/fossils" },
  { name: "About", path: "/about" },
];

function Navbar() {
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();
  const user = getUser();

  const [open, setOpen] = useState(false);

  function handleLogout() {
    logout();
    setOpen(false);
    navigate("/login");
  }

  const linkClass = ({ isActive }) =>
    isActive
      ? "font-semibold text-green-500"
      : "text-white transition hover:text-green-400";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full border-b border-neutral-800 bg-black/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="text-2xl font-bold text-green-500"
        >
          JurassicVerse
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={linkClass}>
                {item.name}
              </NavLink>
            </li>
          ))}

          {loggedIn ? (
            <>
              <li>
                <NavLink to="/quiz" className={linkClass}>
                  Quiz
                </NavLink>
              </li>

              {user?.role === "admin" && (
                <li>
                  <NavLink to="/admin" className={linkClass}>
                    Admin
                  </NavLink>
                </li>
              )}

              <li>
                <button
                  onClick={handleLogout}
                  className="text-white transition hover:text-red-400"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login" className={linkClass}>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className="rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col gap-1 overflow-hidden border-t border-neutral-800 bg-black px-6 md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.path} className="py-3">
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {loggedIn ? (
              <>
                <li className="py-3">
                  <NavLink
                    to="/quiz"
                    onClick={() => setOpen(false)}
                    className={linkClass}
                  >
                    Quiz
                  </NavLink>
                </li>

                {user?.role === "admin" && (
                  <li className="py-3">
                    <NavLink
                      to="/admin"
                      onClick={() => setOpen(false)}
                      className={linkClass}
                    >
                      Admin
                    </NavLink>
                  </li>
                )}

                <li className="py-3">
                  <button
                    onClick={handleLogout}
                    className="text-white transition hover:text-red-400"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="py-3">
                  <NavLink
                    to="/login"
                    onClick={() => setOpen(false)}
                    className={linkClass}
                  >
                    Login
                  </NavLink>
                </li>
                <li className="py-3">
                  <NavLink
                    to="/register"
                    onClick={() => setOpen(false)}
                    className={linkClass}
                  >
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;