import React from "react";
import HeaderImage from "../features/data/BodyItems/HeaderImage";
import Categories from "../features/data/BodyItems/Categories";
import FlashDeals from "../features/data/BodyItems/FlashDeals";
import Photos from "../features/data/BodyItems/Photos";
import ShopeeMall from "../features/data/BodyItems/ShopeeMall";
import DailyDiscover from "../features/data/BodyItems/DailyDiscover";
import SeeMore from "../features/data/BodyItems/SeeMore";
import ShopeeIcons from "../features/data/BodyItems/ShopeeIcons";
import WelcomeGift from "../features/data/BodyItems/WelcomeGift";
import BrandofTheDay from "../features/data/BodyItems/BrandofTheDay";
import Footer from "./Footer";

function body() {
  return (
    <div className="lg:px-40 lg:py-10 ">
      <HeaderImage />
      <ShopeeIcons />
      <WelcomeGift />
      <Categories />
      <FlashDeals />
      <Photos />
      <ShopeeMall />
      <BrandofTheDay />
      <DailyDiscover />
      <SeeMore />
      <Footer />
    </div>
  );
}

export default body;
