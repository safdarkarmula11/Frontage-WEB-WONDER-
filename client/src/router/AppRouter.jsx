import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Timeline from "../pages/Timeline/Timeline";
import Explore from "../pages/Explore/Explore";
import Dinosaur from "../pages/Dinosaur/Dinosaur";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "dinosaur/:id",
        element: <Dinosaur />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;