import HeroBanner from "@/components/HeroBanner";
import IntroBlock from "@/components/IntroBlock";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/CaseStudies";
export default function Solution() {
  const overlay = false;
  const heroBannerData = {
    heading: "Welcome! We are Clear Digital",
    title: "Solution",
    styles: "h-full",
  };
  return (
    <div>
      <HeroBanner overlay={overlay} heroBannerData={heroBannerData} />
      <IntroBlock />
      <CaseStudies />
      <Cta />
      <Footer />
    </div>
  );
}
