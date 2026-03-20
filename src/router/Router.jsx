import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Home/HomePage";
import About from "../pages/About/AboutPage";
import SectorsPage from "../pages/Sectors/SectorsPage";
import ContactPage from "../pages/Contact/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "sectors", element: <SectorsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

export default router;
