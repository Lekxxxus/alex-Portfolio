import React from "react";
import AboutShopee from "../../FooterComponents/AboutShopee";
import Customer from "../../FooterComponents/CustomerService";
import FollowUs from "../../FooterComponents/FollowUs";
import Payment from "../../FooterComponents/Payment";
import ShopeeApp from "../../FooterComponents/ShopeeApp";

function Contacts() {
  return (
    <div className="flex py-20 mt-10 mb-10 border-b-2">
      <Customer />
      <AboutShopee />
      <Payment />
      <FollowUs />
      <ShopeeApp />
    </div>
  );
}

export default Contacts;
