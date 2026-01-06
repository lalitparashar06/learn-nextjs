import React from "react";

export default function IntroWithVideo() {
  return (
    <section class="IntroWithVideo relative bg-[linear-gradient(180deg,rgba(24,25,25,0),#181919_99.98%),linear-gradient(37deg,#181919_0.72%,#24b283_75.78%)] py-10">
      <div class="container mx-auto">
        <div class="relative mt-[60px] h-[460px] overflow-hidden rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] group">
          <div
            class="play-btn absolute inset-0 bg-[url('/images/play-icon-video.svg')] bg-no-repeat bg-center bg-[length:80px] cursor-pointer transition-all duration-400 rounded-[16px] z-[1]
        group-hover:  group-hover:scale-[1.05]"
            data-video="https://youtu.be/yUTnotD0DdQ?si=zv6NTMiCof6N-npt"
          ></div>

          <img
            src="/images/pexels-shashank-22345.jpg"
            alt="Video Thumbnail"
            class="w-full h-full object-cover transition-all duration-400 group-hover:brightness-90"
          />
        </div>
      </div>
    </section>
  );
}
