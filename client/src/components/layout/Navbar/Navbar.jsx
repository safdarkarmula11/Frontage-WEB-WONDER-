import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { isAuthenticated, logout } from "../../../services/authService";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Explore",
    path: "/explore",
  },
  {
    name: "Timeline",
    path: "/timeline",
  },
  {
    name: "About",
    path: "/about",
  },
];

function Navbar() {
  const navigate = useNavigate();

  const loggedIn = isAuthenticated();

  function handleLogout() {
    logout();
    navigate("/login");
  }

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
          className="text-2xl font-bold text-green-500"
        >
          JurassicVerse
        </NavLink>

        <ul className="flex items-center gap-8">

          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-green-500"
                    : "text-white transition hover:text-green-400"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {loggedIn ? (
            <>
              <li>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-green-500"
                      : "text-white transition hover:text-green-400"
                  }
                >
                  Admin
                </NavLink>
              </li>

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
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-green-500"
                    : "text-white transition hover:text-green-400"
                }
              >
                Login
              </NavLink>
            </li>
          )}

        </ul>

      </nav>
    </motion.header>
  );
}

export default Navbar;