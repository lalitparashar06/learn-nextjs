import MarioHeader from "@/components/MarioHeader";
import InvestementStrategy from "@/components/InvestementStrategy";
import CardWithText from "@/components/CardWithText";
import ColTwoWithImage from "@/components/ColTwoWithImage";
import BgSeaWater from "@/components/BgSeaWater";
import BannerSecondLevel from "@/components/BannerSecondLevel";
import React from "react";

export default function Index() {
  return (
    <>
      <MarioHeader />
      <BannerSecondLevel />
      <InvestementStrategy />
      <CardWithText />
      <ColTwoWithImage />
      <BgSeaWater />
    </>
  );
}
