import React from "react";
import Slider from "../../Components/Slider/slider";
import FeatureProducts from "../../Components/FeaturedProducts/FeatureProducts";
import Categories from "../../Components/Categories/Categories";
import Contact from "../../Components/Contact/Contact";
import Hero from "../../Components/Hero/Hero";

function Home() {
  return (
    <>
      {/* <Slider /> */}
      <Hero />
      <FeatureProducts type={"Featured"} />
      <Categories />
      <FeatureProducts type={"Trending"} />
      <Contact />
    </>
  );
}

export default Home;
