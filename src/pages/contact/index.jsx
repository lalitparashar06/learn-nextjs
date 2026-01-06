import HeroBanner from "@/components/HeroBanner";
import IntroBlock from "@/components/IntroBlock";
import Footer from "@/components/Footer";
import ResourceFilter from "@/components/ResourceFilter";
export default function Contact() {
  const overlay = false;
  const heroBannerData = {
    heading: "Welcome! We are Clear Digital",
    title: "Contact Us",
    styles: "h-full",
  };
  return (
    <div>
      <HeroBanner overlay={overlay} heroBannerData={heroBannerData} />
      <IntroBlock />
      <ResourceFilter />
      <Footer />
    </div>
  );
}
``;
