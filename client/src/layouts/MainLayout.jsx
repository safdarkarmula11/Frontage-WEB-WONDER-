import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-16">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;