import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../common/components/Navbar/Navbar";
import Footer from "../common/components/Footer/Footer";
import ScrollToggleButton from "../common/components/ScrollToggle/ScrollToggleButton";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function RootLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToggleButton />
    </div>
  );
}
