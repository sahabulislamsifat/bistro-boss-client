import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import Featured from "./featured/Featured";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant || Home</title>
      </Helmet>
      {/* Carousal Banner  */}
      <Banner></Banner>
      {/* Category Swiper  */}
      <Category></Category>
      {/* Menu Items  */}
      <PopularMenu></PopularMenu>
      {/* Featured Section  */}
      <Featured></Featured>
      {/* Testimonials  */}
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
