import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

function MainLayout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="min-h-screen pt-16">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;