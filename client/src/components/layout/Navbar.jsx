import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-emerald-400 font-semibold"
      : "text-gray-300 hover:text-white transition-colors";

  return (
    <header className="sticky top-0 z-50 border-b border-stone-800 bg-stone-950/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          🦖 Dino Museum
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/timeline" className={navLinkClass}>
              Timeline
            </NavLink>
          </li>

          <li>
            <NavLink to="/search" className={navLinkClass}>
              Search
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard" className={navLinkClass}>
              Dashboard
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-lg border border-stone-700 px-4 py-2 text-sm hover:bg-stone-800"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium hover:bg-emerald-700"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;