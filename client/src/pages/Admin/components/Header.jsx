import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/authService";

function Header() {
    const navigate = useNavigate();

    function handleLogout() {
        logout();

        navigate("/login");
    }

    return (
        <header className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900 px-8 py-5">

            <div>
                <h1 className="text-3xl font-bold text-white">
                    Dashboard
                </h1>

                <p className="mt-1 text-neutral-400">
                    Manage dinosaurs, eras, and museum content.
                </p>
            </div>

            <div className="flex items-center gap-6">

                <div className="text-right">
                    <p className="font-semibold text-white">
                        Administrator
                    </p>

                    <p className="text-sm text-neutral-400">
                        admin@jurassicverse.com
                    </p>
                </div>

                <button
                    onClick={handleLogout}
                    className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700"
                >
                    Logout
                </button>

            </div>

        </header>
    );
}

export default Header;