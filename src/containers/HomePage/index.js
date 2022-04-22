import React from "react";

import Banner from "components/Banner";
import CategoriesBlock from "components/CategoriesBlock";
import Footer from "components/Footer";
import Hero from "components/Hero";
import NavBar from "components/NavBar";
import PopularBlock from "components/PopularBlock";
import RoomsBlock from "components/RoomsBlock";
import SlidingBanner from "components/SlidingBanner";

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <SlidingBanner />
      <CategoriesBlock />
      <PopularBlock />
      <Banner />
      <RoomsBlock />
      <Footer />
    </>
  );
}

export default HomePage;
