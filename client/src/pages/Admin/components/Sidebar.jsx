import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    path: "/admin",
  },
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Explore",
    path: "/explore",
  },
  {
    title: "Timeline",
    path: "/timeline",
  },
];

function Sidebar() {
  return (
    <aside className="min-h-screen w-64 border-r border-neutral-800 bg-black">

      <div className="border-b border-neutral-800 p-6">
        <h1 className="text-2xl font-bold text-green-500">
          JurassicVerse
        </h1>

        <p className="mt-2 text-sm text-neutral-400">
          Admin Dashboard
        </p>
      </div>

      <nav className="mt-6">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/admin"}
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
  );
}

export default Sidebar;