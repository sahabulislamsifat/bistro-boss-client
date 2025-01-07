import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      {/* Carousal Banner  */}
      <Banner></Banner>
      {/* Category Swiper  */}
      <Category></Category>
      {/* Menu Items  */}
      <PopularMenu></PopularMenu>
      <h2>This is Home.......</h2>
    </div>
  );
};

export default Home;
