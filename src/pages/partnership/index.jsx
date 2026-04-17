import MenuCard from "@/components/MenuCard";
import HoustonHeroBanner from "@/components/HoustonHeroBanner";
import HoustonVideoBlock from "@/components/HoustonVideoBlock";
import ResourceCardGrid from "@/components/ResourceCardGrid";
import TabWithGrid from "@/components/TabWithGrid";
import IntroWithCounter from "@/components/IntroWithCounter";

import React from "react";

export default function Index() {
  return (
    <>
      <MenuCard />
      <HoustonHeroBanner />
      <HoustonVideoBlock />
      <TabWithGrid />
      <IntroWithCounter />
    </>
  );
}
