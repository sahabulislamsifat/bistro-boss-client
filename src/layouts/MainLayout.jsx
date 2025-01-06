import React from "react";
import { Outlet } from "react-router-dom";
import FooterComponent from "../pages/shared/FooterComponent";
import Navbar from "../pages/shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <FooterComponent></FooterComponent>
      </footer>
    </div>
  );
};

export default MainLayout;
