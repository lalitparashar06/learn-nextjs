import BannerOxford from "@/components/BannerOxford";

import LogoTabGrids from "@/components/LogoTabGrids";
import IntroWithVideo from "@/components/IntroWithVideo";
import VideoOverlay from "@/components/VideoOverlay";
import SliderLogoGrid from "@/components/SliderLogoGrid";
import SliderLogoGridSecond from "@/components/SliderLogoGridSecond";
import SliderLogoGridThird from "@/components/SliderLogoGridThird";
import IntroWithCta from "@/components/IntroWithCta";
import QuoteSlider from "@/components/QuoteSlider";
import ColTwoBlock from "@/components/ColTwoBlock";
import CardGrid from "@/components/CardGrid";
import CardWithQuote from "@/components/CardWithQuote";
import CardWithImage from "@/components/CardWithImage";
import CardWithImg from "@/components/CardWithImg";
import Cta from "@/components/BgCta";

import React from "react";
import BgCta from "@/components/BgCta";

export default function Index() {
  return (
    <>
      <BannerOxford />

      <LogoTabGrids />
      <IntroWithVideo />
      <VideoOverlay />
      <SliderLogoGrid />
      <SliderLogoGridSecond />
      <SliderLogoGridThird />
      <IntroWithCta />
      <QuoteSlider />
      <ColTwoBlock />
      <CardGrid />
      <CardWithQuote />
      <CardWithImage />
      <CardWithImg />
      <BgCta />
    </>
  );
}
