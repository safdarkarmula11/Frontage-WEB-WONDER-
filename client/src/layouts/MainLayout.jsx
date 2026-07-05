import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;