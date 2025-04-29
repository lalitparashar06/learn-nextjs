import React from "react";

export default function Viralone() {
  return (
    <section class="ContentWithWireframesGallery relative pt-[100px] bg-[#deb4ec]">
      <div class="bg-img absolute top-[238px] left-0 w-full h-full bg-gradient-to-br from-[#0033a1] via-[#004fb5] to-[#0071ce] [clip-path:polygon(0_0,0%_0,260%_100%,0%_100%)]"></div>

      <div class="container         ">
        <div class="column-wrap flex   items-end">
          <div class="items w-full md:w-[calc(50%-30px)] mx-[15px]">
            <div class="inner-content-wrap flex flex-wrap -mx-[15px] items-end">
              <div class="row-outer w-[calc(50%-30px)] mx-[15px]">
                <div class="inner-item  mb-[30px] animate-fadeInUp">
                  <div class=" img-item overflow-hidden shadow-md rounded-lg">
                    <img
                      src="/images/color-core-web.png"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div class="inner-item mb-[30px] animate-fadeInUp">
                  <div class=" img-item overflow-hidden shadow-md rounded-lg">
                    <img
                      src="/images/customer-stories-desktop-mobile.png"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div class="row-outer w-[calc(50%-30px)] mx-[15px]">
                <div class="inner-item mb-[30px] animate-fadeInUp">
                  <div class=" img-item overflow-hidden shadow-md rounded-lg">
                    <img
                      src="/images/typography-heading-desktop.png"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div class="inner-item mb-[30px] animate-fadeInUp">
                  <div class="img-item overflow-hidden shadow-md rounded-lg">
                    <img
                      src="/images/promo-bar-desktop-mobile.png"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="items w-full   md:w-[calc(50%-30px)] mx-[15px]">
            <div class="inner-content pt-[90px] pb-[80px]">
              <h3 class="text-black mb-[15px] text-xl font-semibold">
                Design System Lorem Ipsum Dolor Consectuer
              </h3>
              <p class="text-black">
                Habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas sed tempus urna et pharetra pharetra massa massa
                ultricies mi quis hendrerit dolor magna eget est lorem ipsum
                dolor sit amet consectetur adipiscing elit pellentesque habitant
                morbi tristique senectus et netus et.
              </p>
            </div>

            <div class="outer-wrap flex flex-wrap -mx-[15px] items-end">
              <div class="row-inner w-[calc(50%-30px)] mx-[15px]">
                <div class="wireframes-item mb-[30px] animate-fadeInUp">
                  <div class="img-wrap overflow-hidden shadow-md rounded-lg">
                    <img
                      src="/images/buttons-overview.png"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div class="wireframes-item mb-[30px] animate-fadeInUp">
                  <div class="img-wrap  overflow-hidden shadow-md rounded-lg">
                    <img
                      src="/images/buttons-desktop.png"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div class="row-inner  w-[calc(50%-30px)] mx-[15px]">
                <div class="wireframes-item mb-[30px] animate-fadeInUp">
                  <div class="img-wrap overflow-hidden shadow-md rounded-lg">
                    <img
                      src="/images/hyperlink-type.png"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div class="wireframes-item mb-[30px] animate-fadeInUp">
                  <div class="img-wrap overflow-hidden shadow-md rounded-lg">
                    <img
                      src="/images/resource-cards-desktop-mobile.png"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
