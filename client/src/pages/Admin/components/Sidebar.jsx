import { NavLink } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", path: "/admin" },
  { title: "Home", path: "/" },
  { title: "Explore", path: "/explore" },
  { title: "Timeline", path: "/timeline" },
];

function Sidebar({ open = false, onClose = () => {} }) {
  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-neutral-800 bg-black transition-transform duration-300 lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-800 p-6">
          <div>
            <h1 className="text-2xl font-bold text-green-500">
              JurassicVerse
            </h1>

            <p className="mt-2 text-sm text-neutral-400">
              Admin Dashboard
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-neutral-400 hover:text-white lg:hidden"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              onClick={onClose}
              className={({ isActive }) =>
                `block px-6 py-4 transition ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-neutral-300 hover:bg-neutral-900"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;