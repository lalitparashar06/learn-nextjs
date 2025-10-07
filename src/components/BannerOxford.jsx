import React from "react";
export default function BannerOxford() {
  return (
    <section class="BannerOxford relative min-h-[1600px] p-0 ">
      <div className="bg-img   absolute w-full h-full  top-0 left-0  ">
        <img
          src="/images/Rectangle 26.png"
          className="h-full w-full object-cover"
        ></img>
      </div>
      <div className="container">
        <div className="content relative max-w-[962px] pt-[221px]">
          <h1 className="text-[#fff] text-[82px] pt-[80px] mb-[23px] lg:text-[78px] lg-down::text-[64px]">
            The World's Largest Podcast Advertising Agency
          </h1>
          <p className="text-[#fff] text-[25px]">
            The Category Leader in Podcast, Audio, and Creator Media. Billions
            in measured outcomes. Decades of expertise. Trusted by the best.
          </p>
          <div className="btn mt-[38px]">
            <a
              href="#"
              className="bg-[#2EE5A8] p-[15px] rounded-[5px]  hover:bg-[transparent] hover:border-[2px] hover:text-[#fff] transition-all duration-1000 ease-in-out "
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
