import React from "react";
export default function BgCta() {
  return (
    <section class="BgCta relative  min-h-[843px] bg-[linear-gradient(180deg,#202020,transparent_23.54%),linear-gradient(0deg,#000,transparent_100%)] flex flex-wrap  items-center ">
      <div className="bg-img absolute w-full h-full top-0 left-0">
        <img src="/images/CTA-bg-1.webp"></img>
      </div>
      <div className="container">
        <div className="text-wrap relative z-[1]">
          <h2 className="text-[#fff] text-[80px] mb-[30px]">
            Let’s Get Started
          </h2>
          <p className="text-[#fff]     max-w-[501px] text-[25px]">
            Ready to scale your business with the audio and creator media
            advantage no one else can offer?
          </p>
          <div className="btn-wrap pt-[40px]  ">
            <a
              href="#"
              className="bg-[#2ee5a8] hover:bg-[black] text-[black]  hover:text-[#fff]  p-[13px] rounded-[5px] hover:border-[#2ee5a8] hover:border-[2px] "
            >
              <span className=" uppercase  font-[900] w-full  ">
                Let’s Build What Works
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
