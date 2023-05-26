import GlobalStyles from "./global/globalStyles";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
