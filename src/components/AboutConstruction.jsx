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
            {/* <div className="icon-outer-wrap mt-[74px]">
              <div className="icon-wrap w-full flex flex-wrap items-center ">
                <div className="icon w-[30%] pl-[92px]">
                  <img
                    src="/images/safety-helmet_12088061.png"
                    className="w-[50px] h-[50px] object-contain"
                  ></img>
                </div>
                <div className="wrap w-[70%]">
                  <h5>Certified Company</h5>
                  <p>
                    Be man air male shall under create light together grass fly
                    dat also also his brought itself air abundantly
                  </p>
                </div>
              </div>
            </div> */}
            <ul className="list-none p-0 m-0 mt-[42px]">
              <li className="inline-block mb-[10px] text-[14px] pl-[80px] pt-[30px] relative flex">
                <div className="img-wrap mr-[17px] max-w-[100px] w-full ">
                  <img
                    src="/images/safety-helmet_12088061.png"
                    className="object-contain"
                  ></img>
                </div>
                <div className="wrap">
                  <h5 className="text-[black]  mb-[10px]">Certified Company</h5>
                  <p className="text-[black]">
                    Be man air male shall under create light together grass fly
                    dat also also his brought itself air abundantly
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
