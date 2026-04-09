import styles from "@/styles/HoustonHeroBanner.module.css";
import React from "react";
export default function HoustonHeroBanner() {
  return (
    <section
      className={`HoustonHeroBanner ${styles.HoustonHeroBanner} relative bg-[#013b5c]   items-center flex flex-wrap justify-center `}
    >
      <div className="img-wrap absolute top-0 left-0 w-full h-full ">
        <img
          src="/images/Eastern-Glades_01-scaled.webp"
          className="absolute top-0 left-0 right-0 bottom-0 text-[transparent] w-full h-full object-cover object-top"
        ></img>
      </div>
      <div className="container z-[1]">
        <div className="text-wrap ">
          <h1 className="text-[#fff] max-w-6xl pt-28 ">
            Advancing{" "}
            <span className="border-0 text-transparent [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:#fff]">
              opportunity
            </span>
          </h1>
          <div className="btn mt-[30px] ">
            <a
              href="#"
              className="bg-[#71cc98] px-[30px] py-[20px] rounded-[100px] inline-block "
            >
              See How
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
