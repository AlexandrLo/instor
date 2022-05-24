import React from "react";

import Banner from "components/Banner";
import BannerCarousel from "components/BannerCarousel";
import CategoriesSection from "components/CategoriesSection";
import Footer from "components/Footer";
import Hero from "components/Hero";
import PopularSection from "components/PopularSection";
import RoomsSection from "components/RoomsSection";
import Title from "components/Title";

function Home() {
  return (
    <>
      <Title postfix="Home" />

      <Hero />
      <BannerCarousel />
      <CategoriesSection />
      <PopularSection />
      <Banner />
      <RoomsSection />
      <Footer />
    </>
  );
}

export default Home;
