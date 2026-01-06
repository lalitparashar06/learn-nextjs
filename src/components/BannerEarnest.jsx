import React from "react";
export default function BannerEarnest() {
  return (
    <section class="BannerEarnest bg-[#b0c84c] overflow-hidden">
      <div class="outer-wrap flex flex-wrap items-center min-h-[617px] md:min-h-auto relative">
        <div class="container relative z-10 max-w-[697px] md:max-w-full px-4">
          <div class="title-wrap relative max-w-[697px] z-[3] md:max-w-full">
            <h1 class="text-white font-serif font-bold leading-[110%] capitalize text-[96px] md:text-[75px] sm:text-[55px]">
              Run, Dudley, run! Play Dudley Dash.
            </h1>
            <p class="text-black text-[28px] font-medium mt-5">
              Help our donut dodge the perils of packaging.
            </p>
          </div>
        </div>

        <div
          class="img-wrap absolute top-0 right-0 bottom-0 h-full w-[800px] pt-[51px]
                 lg:w-[472px] lg:pt-[201px] md:relative md:w-full md:h-full md:pl-5"
        >
          <div class="inner-img ">
            <img
              src="/images/DudleyDash-collage 1.png"
              alt="Dudley"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
