import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import Featured from "./featured/Featured";

const Home = () => {
  return (
    <div>
      {/* Carousal Banner  */}
      <Banner></Banner>
      {/* Category Swiper  */}
      <Category></Category>
      {/* Menu Items  */}
      <PopularMenu></PopularMenu>
      {/* Featured Section  */}
      <Featured></Featured>
    </div>
  );
};

export default Home;
