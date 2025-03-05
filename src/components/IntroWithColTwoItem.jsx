import React from "react";

export default function IntroWithColTwoItem() {
  return (
    <section className="IntroWithColTwoItem">
      <div className="container">
        <div className="headingwrao pb-[50px]">
          <h3 className="text-[30px] text-center">
            Headline about How We Can Help
          </h3>
        </div>
        <div className="outer-wrap w-[100%] flex flex-wrap items-center">
          <div className="imgitem w-[45%]">
            <div className="imgwrap max-h-[500px] h-[100%] overflow-hidden">
              <img src="/images/laptopm2.png"></img>
            </div>
          </div>
          <div className="contentitem w-[55%]">
            <div className="contentwrap pl-[60px]">
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
        </div>
      </div>
    </section>
  );
}
