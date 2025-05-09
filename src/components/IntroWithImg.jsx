import React from "react";

export default function IntroWithColTwoItem() {
  return (
    <section className="IntroWithImg">
      <div className="container">
        <div className="outer-wrap w-[100%] flex flex-wrap items-center">
          <div className="contentitem w-[55%] phablet:w-full phablet:mb-[30px] phone:w-full phone:mb-[30px] xs:w-full xs:mb-[30px]">
            <div className="contentwrap pr-[60px] phablet:pr-0 phone:pr-0 xs:pr-0">
              <h4 className="font-[700] text-[black]">
                Lorem ipsum dolor sit amet consectetur. Ipsum amet in diam
                vitae.
              </h4>
              <p className="pt-[20px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore.
              </p>
            </div>
          </div>
          <div className="imgitem w-[45%] phablet:w-full phone:w-full xs:w-full">
            <div className="imgwrap max-h-[500px] h-[100%] overflow-hidden">
              <img src="/images/laptopm2.png"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
