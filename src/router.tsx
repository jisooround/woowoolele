import { createBrowserRouter } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Home from "./pages/Home";
import Write from "./pages/Write";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/write",
    element: <Write />,
    errorElement: <NotFound />,
  },
]);
