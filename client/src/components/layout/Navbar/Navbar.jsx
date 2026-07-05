import { NavLink } from "react-router-dom";

function Navbar() {
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-green-500 font-semibold"
            : "text-white hover:text-green-400 transition-colors";

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-black/60 backdrop-blur-md">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <NavLink
                    to="/"
                    className="text-2xl font-bold tracking-wide text-green-500"
                >
                    JurassicVerse
                </NavLink>

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
                        <NavLink to="/explore" className={navLinkClass}>
                            Explore
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" className={navLinkClass}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;