import styles from "@/styles/HeroBanner.module.css";

export default function HeroBanner({ overlay, heroBannerData }) {
  return (
    <section
      className={`${styles.whitegrid} ${
        overlay ? styles.dark__overlay : ""
      } relative flex items-center ${
        heroBannerData?.styles ? heroBannerData?.styles : ""
      }`}
    >
      <div className="absolute top-0 right-0 left-0 w-[100%] h-[100%] z-[1]">
        <video autoPlay loop muted playsInline>
          <source
            src="/images/Clear-Digital-Home-Hero_400kbps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="container">
        <div className="z-[4] relative">
          <h5 className="text-white font-black mb-[20px] ">
            {heroBannerData.heading}
          </h5>
          <h1 className="text-white font-black">{heroBannerData.title}</h1>
        </div>
      </div>
    </section>
  );
}
