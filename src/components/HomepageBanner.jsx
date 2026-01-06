import styles from "@/styles/HomepageBanner.module.css";
import React from "react";

export default function HomepageBanner() {
  return (
    <section
      className={`HomepageBanner  ${styles.HomepageBanner} relative flex items-center h-[1000px] pt-[0]  `}
    >
      <div className="absolute top-0 right-0 left-0 w-[100%] h-[100%] z-[1]">
        <img src="/images/pexels-padrinan-255379.jpg" alt="" />
      </div>
      <div className="container">
        <div className="content relative z-[2]">
          <h5 className="text-[#fff]">Hi there</h5>
          <h1 className="text-[#fff] capitalize">i'm Lalit parashar</h1>
          <p className="text-[#fff]">A professional frontend web developer</p>
        </div>
      </div>
    </section>
  );
}
