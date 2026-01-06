import MyPortMenu from "@/components/MyPortMenu";
import HomepageBanner from "@/components/HomepageBanner";
import IntroBtnBlock from "@/components/IntroBtnBlock";
import ImageSlider from "@/components/ImageSlider";
import Counter from "@/components/Counter";
import TabsWithAccordion from "@/components/TabsWithAccordion";
import Accordion from "@/components/Accordion";
import IntroWithTab from "@/components/IntroWithTab";

import React from "react";

export default function Index() {
  return (
    <>
      <MyPortMenu />
      <HomepageBanner />
      <IntroBtnBlock />
      <ImageSlider />
      <Counter />
      <TabsWithAccordion />
      <Accordion />
      <IntroWithTab />
    </>
  );
}
