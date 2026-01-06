import React, { useState } from "react";
import styles from "@/styles/IntroWithTab.module.css";

export default function IntroWithTab() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleTab = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const images = [
    "/images/pexels-brett-sayles-1775862.jpg",
    "/images/pexels-maggie-zhan-144531-1698482.jpg",
    "/images/pexels-defrino-maasy-522584577-29719915.jpg",
    "/images/pexels-shashank-22345.jpg",
  ];

  return (
    <section className="IntroWithTab bg-[#e07f09]">
      <div className="container">
        <h2 className="text-[#fff] text-center">Accordion With image</h2>
        {/*
        <div className="row bg-[#000] w-auto  flex items-center"> */}
        <div className="row bg-[#000] w-full flex items-start ">
          {/* LEFT */}
          <button className="Introwithtab-module relative sm:hidden cursor-pointer text-left bg-[#fff] border-none rounded-[20px] outline-none w-[100%] min-h-[58px] py-[13px] px-[22px] text-[16px] hidden ">
            <span className="text-[black]">Content 1</span>
          </button>
          <div className="content-wrap bg-[black] w-1/2 h-full pr-[18px]">
            <div className="tab-div block">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="text-wrapper relative pt-[50px] pr-[55px] pb-[50px] border-b-2 border-solid border-b-[#fff]"
                >
                  <div
                    className="arrow-wrap relative cursor-pointer"
                    onClick={() => toggleTab(index)}
                  >
                    <h3
                      className={`text-[#fff] ${styles.h3} ${
                        activeIndex === index ? styles.active : ""
                      }`}
                    >
                      Content {index + 1}
                    </h3>
                  </div>

                  <div
                    className={`inner-wrapper transition-all duration-500 ease-in-out ${
                      activeIndex === index
                        ? "block h-auto opacity-100"
                        : "hidden h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[#fff] mt-[20px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum natus blanditiis fugit necessitatibus minus earum.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT (IMAGES) */}
          <div className="tab-text w-[50%]">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className={`img-wrap relative overflow-hidden w-full h-[557px] transition-opacity duration-500 ${
                  activeIndex === index
                    ? "block opacity-100"
                    : "hidden opacity-0"
                }`}
              >
                <img
                  src={images[index]}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
