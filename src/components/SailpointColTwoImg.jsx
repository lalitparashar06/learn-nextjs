import React from "react";

export default function Viralone() {
  return (
    <section class=" SailpointColTwoImg bg-[#ffffff] py-12">
      <div class="container ">
        <div class="column-wrap flex flex-wrap items-center">
          <div class="content-item w-[45%] md:w-full pr-4 animate-fadeInLeft">
            <div class="max-w-[500px]">
              <h3 class="pb-4 text-black text-xl font-semibold">
                Product Marketecture
              </h3>
              <p class="text-black">
                Habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas sed tempus urna et pharetra pharetra massa massa
                ultricies mi quis hendrerit dolor magna eget est lorem ipsum
                dolor sit amet consectetur adipiscing elit pellentesque habitant
                morbi tristique senectus et netus et.
              </p>
            </div>
          </div>

          <div class="img- item w-[55%] md:w-full animate-fadeInRight">
            <div class="overflow-hidden max-h-[460px] h-full">
              <img
                src="/images/sailpoin-chart.png"
                alt="Sailpoin Chart"
                class="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
