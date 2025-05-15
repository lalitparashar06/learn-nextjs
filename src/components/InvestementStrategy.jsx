import { useState } from "react";
import styles from "@/styles/InvestementStrategy.module.css";

export default function InvestementStrategy() {
  const [activeIndex, setActiveIndex] = useState(0); // Set first item active by default

  const toggleItem = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const lists = [
    {
      heading: "Buyouts",
      blurb:
        "Well-positioned companies with strong products and potential for operational improvement and expansion via adjacencies",
    },
    {
      heading: "Growth Equity",
      blurb:
        "Well-positioned companies with strong products and potential for operational improvement and expansion via adjacencies",
    },
    {
      heading: "Hello",
      blurb:
        "Well-positioned companies with strong products and potential for operational improvement and expansion via adjacencies",
    },
  ];

  return (
    <section className="InvestementStrategy bg-white pt-[ ceramic] pb-[150px] px-0 overflow-hidden lg:py-[120px] lg:px-0">
      <div className="container">
        <div className="intro mb-[110px] text-center">
          <h3 className="text-[#1D2D40] text-center font-montserrat text-6xl font-bold leading-[120%] pb-[16px] capitalize">
            Investment Strategy Overview
            <span className="text-[#F2AD24]">.</span>
          </h3>
          <p className="text-[#0D0D0D] text-center font-montserrat text-[17px] font-normal leading-[150%] tracking-[0.7px] max-w-[824px] mt-4 mx-auto">
            We focus on investment archetypes ranging from early-stage
            investments to growth equity to buyouts. The common thread is that
            we invest in businesses with leading technology in cybersecurity and
            infrastructure that solve an important and difficult business
            problem. Our concentrated portfolio allows us to help accelerate
            their path to success.
          </p>
        </div>
        <div className="wrapper flex phablet:flex-wrap phone:flex-wrap xs:flex-wrap">
          <div className="content-left w-[1413px]  basis-[47.4%] phablet:basis-[60.4%] phone:basis-[60.4%] xs:basis-[60.4%]  ">
            <div className="content-item">
              <div className="img-item relative mt-[150px]">
                <div className="img-wrap relative max-w-[580px] z-[1] phablet:left-[52px] phone:left-[52px] xs:left-[24px]">
                  <img
                    src="/images/green-circle.webp"
                    className="rounded-[50%] relative h-auto w-full"
                  />
                </div>
                <div
                  className={`ImgPattern ${styles.ImgPattern} absolute w-[158.6%] h-[158%] left-[43%] top-1/2 -translate-x-1/2 -translate-y-1/2 phablet:left-[60%] phone:left-[60%] xs:left-[60%]`}
                >
                  <img
                    src="/images/investment-strategy-graphic-line-scaled.png"
                    className="absolute w-[148%] h-[148%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="content-right w-[724px] h-[551px] bg-white opacity-70 mt-[100px]">
            <ul className="flex w-[496px] pb-[48px] items-start gap-[24px] flex-wrap xs:w-[243px]">
              {lists.map((list, index) => {
                const isActive = index === activeIndex;

                return (
                  <li
                    key={index}
                    onClick={() => toggleItem(index)}
                    className={`cursor-pointer p-[40px] w-full bg-white shadow-[0_0_16px_0_rgba(0,0,0,0.04)] border-t border-t-transparent rounded-t-[16px] border-b-4 transition-all duration-700 ease-in-out xs:p-[10px]
                    ${
                      isActive
                        ? "border-b-[rgb(0,191,200)]"
                        : "border-b-transparent"
                    }`}
                  >
                    <h4 className="text-[color:var(--Secondary-Teal,#026D85)] font-montserrat text-[32px] not-italic font-semibold leading-[120%] xs:text-[26px]">
                      {list.heading}
                    </h4>
                    <div
                      className={`overflow-hidden transition-all duration-700 ease-in-out ${
                        isActive
                          ? "max-h-[300px] opacity-100 scale-y-100"
                          : "max-h-0 opacity-0 scale-y-95"
                      } origin-top`}
                    >
                      <p className="mt-4 text-[color:var(--Primary-Black,#0D0D0D)] font-montserrat text-[18px] font-normal leading-[150%] tracking-[0.36px] xs:text-[14px]">
                        {list.blurb}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
