import React from "react";

export default function Viralone() {
  return (
    <section class="SailpointColTwoImgGraphics bg-[#9fcdef]">
      <div class="container ">
        <div class="outer-wrap flex items-center pb-16 md:flex-col md:pb-10">
          <div class="item-wrap wow fadeInLeft md:w-full md:mb-8">
            <div class="img-item max-h-[469px] h-full overflow-hidden">
              <img
                class="w-full h-full object-cover"
                src="/images/laptop-working-woman.png"
                alt="Laptop working woman"
              />
            </div>
          </div>

          <div class="item-wrap wow fadeInRight md:w-full md:mb-8">
            <div class="inner-content pl-20 md:pl-0 md:pt-8">
              <h3 class="text-black mb-4">
                Design Graphics Lorem Ipsum Dolor Consectuer
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
        </div>

        <div class="img-outer flex flex-wrap justify-center items-center -mx-5 w-[calc(100%+40px)] sm:w-full sm:mx-auto sm:block">
          <div class=" item w-[calc(33.33%-40px)] mx-5 sm:w-full sm:mx-auto sm:mb-5 ">
            <div class="img-wrapper w-full overflow-hidden">
              <img src="/images/circle-graphic.png" alt="circle graphic" />
            </div>
          </div>
          <div class="item w-[calc(33.33%-40px)] mx-5 sm:w-full sm:mx-auto sm:mb-5 ">
            <div class="img-wrapper w-full overflow-hidden">
              <img
                src="/images/blue-circle-graphic.png"
                alt="blue circle graphic"
              />
            </div>
          </div>
          <div class="item w-[calc(33.33%-40px)] mx-5 sm:w-full sm:mx-auto sm:mb-5 ">
            <div class="img-wrapper w-full ">
              <img
                src="/images/multi-color-graphic.png"
                alt="multi-color graphic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
