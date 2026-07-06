import { NavLink } from "react-router-dom";

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
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-neutral-800 bg-black/80 backdrop-blur-md">
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
        </ul>

      </nav>
    </header>
  );
}

export default Navbar;