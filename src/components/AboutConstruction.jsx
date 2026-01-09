import React from "react";
export default function AboutConstruction() {
  return (
    <section class="AboutConstruction relative  ">
      <div className="bg-img absolute top-0 left-0 mt-[50px]">
        <img src="/images/about_overlay.png"></img>
      </div>
      <div className="container">
        <div className="row relative w-full flex flex-wrap  justify-between ml-[-15px] mr-[-15px]">
          <div className="col-two w-[50%] pr-[15px] pl-[15px]">
            <div className="img-wrap">
              <img src="/images/about_part_img.png"></img>
            </div>
          </div>
          <div className="col-two  w-[50%] pr-[15px] pl-[15px]">
            <div className="text-wrap pl-[100px] pt-[50px]">
              <h2 className="text-[#001b5e] capitalize text-[68px]">
                Engineering Your Dreams With Us
              </h2>
              <p className="pt-[30px]">
                Which cattle fruitful he fly visi won't let above lesser stars.
                Fly form wonder every let third form two air seas after us said
                day won light also together midst two female she great to open.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
