import React from "react";

export default function ThirdLevelBanner() {
  return (
    <section className="third-level-banner relative flex items-center   min-h-[560px] pt-[0] pb-[0]">
      <div className="bg-img absolute  left-0 w-full h-full">
        <img
          src="/images/about-header (1).png"
          className="size-full object-cover "
        ></img>
      </div>
      <div className="container">
        <div className="outerWrap flex-wrap relative z-[9] flex w-[calc(100%+20px)] ml-[-10px] lg:block lg:w-full lg:mx-0 items-center">
          <div className="item mb-[20px] p-[20px] w-[calc(50%-20px)] mx-[10px] lg:mb-[10px] lg:last:mb-0 lg:w-full lg:mx-0">
            <div className="bg-img">
              <img
                src="/images/person.png"
                className="border-2 border-indigo-600"
              ></img>
            </div>
          </div>
          <div className="item mb-[20px] p-[20px] w-[calc(50%-20px)] mx-[10px] lg:mb-[10px] lg:last:mb-0 lg:w-full lg:mx-0">
            <div className="text-wrap">
              <h2 className="text-white mb-[20px] ">
                EVERYTHING YOU NEED IN STOCK
              </h2>
              <p className="text-white ">
                Both content buyers and rightsholders have relied upon
                Veritone’s team of experts and proprietary AI to support their
                projects for nearly two decades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
