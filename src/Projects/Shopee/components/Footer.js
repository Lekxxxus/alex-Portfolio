import React from "react";
import Contacts from "../features/footerelements/Contacts";
import Description from "../features/footerelements/Description";
import FooterCategories from "../features/footerelements/FooterCategories";
import FooterFinal from "../features/footerelements/FooterFinal";

function Footer() {
  return (
    <div className="w-full px-40 py-10 ">
      <Description />
      <FooterCategories />
      <Contacts />
      <FooterFinal />
    </div>
  );
}

export default Footer;
