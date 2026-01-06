import ColThreeCard from "@/components/ColThreeCard";
import HeroBanner from "@/components/HeroBanner";
import ImageWithContent from "@/components/ImageWithContent";
import IntroBlock from "@/components/IntroBlock";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/CaseStudies";
import ResourceFilter from "@/components/ResourceFilter";

export default function Home() {
  const overlay = true;
  const heroBannerData = {
    heading: "Hello! We are Clear Digital",
    title: "Let's take you to what's next.",
  };
  return (
    <div>
      <HeroBanner overlay={overlay} heroBannerData={heroBannerData} />
      <ColThreeCard />
      <ImageWithContent />
      <IntroBlock />
      <CaseStudies />
      <Cta />
      <Footer />
    </div>
  );
}
