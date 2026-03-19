import { Outlet } from "react-router-dom";
import Navbar from "../common/components/Navbar/Navbar";
import Footer from "../common/components/Footer/Footer";

export default function RootLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
