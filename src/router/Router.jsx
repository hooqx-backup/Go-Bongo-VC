import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Home/HomePage";
import About from "../pages/About/AboutPage";
import SectorsPage from "../pages/Sectors/SectorsPage";
import ContactPage from "../pages/Contact/ContactPage";
import BlogPage from "../pages/Blog/BlogPage";
import BlogPost from "../pages/Blog/BlogPost/BlogPost";
import PortfolioPage from "../pages/Portfolio/PortfolioPage";
import PortfolioCompanyPage from "../pages/Portfolio/PortfolioCompanyPage";
import Pitchpage from "../pages/Pitch/PitchPage";
import PrivacyPage from "../pages/Legal/PrivacyPage";
import TermsPage from "../pages/Legal/TermsPage";
import CookiesPage from "../pages/Legal/CookiesPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "sectors", element: <SectorsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "portfolio", element: <PortfolioPage /> },
      { path: "portfolio/:id", element: <PortfolioCompanyPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "blog/:id", element: <BlogPost /> },
      { path: "pitch", element: <Pitchpage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "cookies", element: <CookiesPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
