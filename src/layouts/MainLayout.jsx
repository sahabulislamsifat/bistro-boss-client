import { Outlet, useLocation } from "react-router-dom";
import FooterComponent from "../pages/shared/FooterComponent";
import Navbar from "../pages/shared/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");

  return (
    <div>
      <nav>{noHeaderFooter || <Navbar></Navbar>}</nav>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>{noHeaderFooter || <FooterComponent></FooterComponent>}</footer>
    </div>
  );
};

export default MainLayout;
