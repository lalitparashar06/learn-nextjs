import ConstructionMenu from "@/components/ConstructionMenu";
import BannerConstruction from "@/components/BannerConstruction";
import AboutConstruction from "@/components/AboutConstruction";
import OurService from "@/components/OurService";

import React from "react";

export default function Index() {
  return (
    <>
      <ConstructionMenu />
      <BannerConstruction />
      <AboutConstruction />
      <OurService />
    </>
  );
}
