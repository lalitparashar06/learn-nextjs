import { useState } from "react";
import styles from "@/styles/InvestementStrategy.module.css";

export default function InvestementStrategy() {
  const [activeIndex, setActiveIndex] = useState(null);

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
    <section class=" InvestementStrategy bg-white ">
      <div className="container">
        <div className="intro  flex w-[1224px] flex-col items-center gap-4 ">
          <h3 className="text-[#1D2D40] text-center font-montserrat text-6xl font-bold leading-[120%] pb-[16px] ">
            Investment Strategy Overview
            <span className="text-[#F2AD24]">.</span>
          </h3>
          <p class="text-[#0D0D0D] text-center font-montserrat text-[17px] font-normal leading-[150%] tracking-[0.7px]   pr-[237px] pb-[12px] pl-[347px]">
            We focus on investment archetypes ranging from early-stage
            investments to growth equity to buyouts. The common thread is that
            we invest in businesses with leading technology in cybersecurity and
            infrastructure that solve an important and difficult business
            problem. Our concentrated portfolio allows us to help accelerate
            their path to success.
          </p>
        </div>
        <div className="wrapper flex">
          <div className="content-left w-[1413px] flex-none basis-[47.4%]">
            <div className="content-item">
              <div className="img-item  relative mt-[150px]">
                <div className="img-wrap relative max-w-[580px] z-[1]">
                  <img
                    src="/images/green-circle.webp "
                    className="rounded-[50%] relative h-auto w-full"
                  ></img>
                </div>

                <div
                  className={`ImgPattern ${styles.ImgPattern} absolute w-[158.6%] h-[158%] left-[43%] top-1/2 -translate-x-1/2 -translate-y-1/2`}
                >
                  <img
                    src="/images/investment-strategy-graphic-line-scaled.png"
                    className=" absolute w-[148%] h-[148%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="content-right  w-[724px] h-[551px] bg-white opacity-70 mt-[100px] ">
            <ul className="flex w-[496px] pb-[48px] items-start gap-[24px] flex-wrap">
              {lists.map((list, index) => {
                const isActive = index === activeIndex;

                return (
                  <li
                    key={index}
                    onClick={() => toggleItem(index)}
                    className={`cursor-pointer p-[40px] w-full bg-white shadow-[0_0_16px_0_rgba(0,0,0,0.04)] border-t border-t-transparent rounded-t-[16px] border-b-4 transition-all duration-300
              ${
                isActive ? "border-b-[rgb(0,191,200)]" : "border-b-transparent"
              }`}
                  >
                    <h4 className="text-[color:var(--Secondary-Teal,#026D85)] font-montserrat text-[32px] not-italic font-semibold leading-[120%]">
                      {list.heading}
                    </h4>
                    {isActive && (
                      <p className="mt-4 text-[color:var(--Primary-Black,#0D0D0D)] font-montserrat text-[18px] not-italic font-normal leading-[150%] tracking-[0.36px]">
                        {list.blurb}
                      </p>
                    )}
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
