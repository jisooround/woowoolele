import { createBrowserRouter } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Home from "./pages/Home";
import Sheetmusic from "./pages/Sheetmusic";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/sheetmusic",
    element: <Sheetmusic />,
    errorElement: <NotFound />,
  },
]);
