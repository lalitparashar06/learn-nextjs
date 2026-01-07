import React from "react";
export default function BannerConstruction() {
  return (
    <section class="BannerConstruction relative h-[1000px] flex items-center  bg-[black]">
      <div className="bgimg absolute w-full h-full top-0 left-0 right-0 z-[1] opacity-[0.5]">
        <img src="/images/Construction Outlook-2026.jpeg"></img>
      </div>
      <div className="container">
        <div className="content relative  z-[2] max-w-[1200px]  ">
          <h1 className="text-[#fff]">
            Committed to Superior Quality and Results
          </h1>
          <p className="text-[#fff] pt-[30px]">
            Moving male there under air air beast lesser creeping saying wherein
            two void can' ness saw set meat our. Whose give day. Morning own
            fifth from Were moved darkness. Female bring abundantly and research
          </p>
          <div className="btn mt-[50px]">
            <a
              href="#"
              className="text-[#fff] bg-[#8f0000] py-[13.5px] px-[45px] hover:bg-[#fff] hover:text-[#8f0000] transition-all 0.3s ease-in-out"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
