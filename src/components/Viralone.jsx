import React from "react";

export default function Viralone() {
  return (
    <section class=" Viralone bg-gradient-to-br from-[#0033a1] via-[#004fb5] to-[#0071ce]">
      <div class="container mx-auto px-4">
        <div class="outer-wrap relative flex flex-wrap w-full animate-fadeInLeft">
          <div class="item-one relative w-1/2 before:content-[''] before:absolute before:right-0 before:top-0 before:bottom-0 before:h-[150px] before:my-auto before:w-1 before:bg-white">
            <div class="inner-old-wrap float-right mr-[120px]">
              <p class="text-black mb-10">Old logo</p>
              <div class="max-w-[209px] max-h-[83px] h-full overflow-hidden">
                <img
                  src="/images/viralnation-old (1).svg"
                  class="w-full h-full object-contain"
                  alt="Old Logo"
                />
              </div>
            </div>
            <div class="absolute right-0 top-0 bottom-0 mx-auto w-1 border-white h-[150px]"></div>
          </div>

          <div class="item-two relative w-1/2">
            <div class="inner-new-wrap ml-[120px] float-left">
              <p class="text-black mb-10">New logo</p>
              <div class="max-w-[348px] max-h-[52px] h-full overflow-hidden">
                <img
                  src="/images/viralnation-new.svg"
                  class="w-full h-full object-contain"
                  alt="New Logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="content-wrap text-center max-w-[850px] mx-auto pt-24">
          <h3 class="text-black text-2xl font-bold mb-4">
            A full visual refresh
          </h3>
          <p class="text-black">
            While the original project scope did not include a logo refresh,
            early in the process the Clear team identified visual challenges
            presented by the traditional Viral Nation look and feel. From the
            fashion orientation and size limitations of the logotype to a dated
            palette, we recommended a full refresh, including logo, palette,
            typography, and iconography. The result was a brighter, more
            contemporary visual style, including a logo bug that could be used
            independently of the name.
          </p>
        </div>
      </div>
    </section>
  );
}
