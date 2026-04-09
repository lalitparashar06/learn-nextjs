import React from "react";
export default function HoustonHeroBanner() {
  return (
    <section className="HoustonHeroBanner  relative bg-[#013B5B] pt-[0] pb-[60px] ">
      <div className="container">
        <div className="wrapper">
          <a
            aria-label=""
            class="play-video we-image w-full cursor-pointer VideoBlock_playvideo__Anib0"
            data-video-title=""
            data-videourl="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
            href="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
            target="_blank"
          >
            <img src="/images/building-img.webp"></img>
          </a>
          <a
            aria-label=""
            className="play-video absolute w-[83px] h-[91px] laptop-portrait:w-[68px] laptopDown:w-[68px] lg:w-[50px] laptop-portrait:h-[75px] laptopDown:h-[75px] lg:h-[55px] top-14 ipad:top-[10px] laptop-portrait:top-[30px] right-16 laptop-portrait:right-16 ipad:right-16 xs:right-12 cursor-pointer  VideoBlock_playvideo__Anib0"
            data-video-title=""
            data-videourl="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
            href="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
            target="_blank"
          >
            <img
              className="videoblockicon"
              src="/images/play-btn-green.svg"
            ></img>
          </a>
        </div>
      </div>
    </section>
  );
}
