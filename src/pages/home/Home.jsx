import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import Featured from "./featured/Featured";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";
// import Cover from "../../components/cover/Cover";
// import menuImage from "../../assets/menu/banner3.jpg";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || A Restaurant Management Application</title>
      </Helmet>
      {/* Carousal Banner  */}
      <Banner></Banner>
      {/* Category Swiper  */}
      <Category></Category>
      {/* Menu Items  */}
      {/* <Cover img={menuImage} title={"our menu"}></Cover> */}
      <PopularMenu></PopularMenu>
      {/* Featured Section  */}
      <Featured></Featured>
      {/* Testimonials  */}
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
