import React from "react";

export default function BannerVeritone() {
  return (
    <section className="BannerVeritone relative min-h-[855px]">
      <div className="bg-img   absolute w-full h-full  top-0 left-0">
        <img
          src="/images/licensing-header-10 4.png"
          className="w-full  object-cover"
        ></img>
      </div>
      <div className="container">
        <div className="content mt-[278px] text-center">
          <h2 className="text-[#fff] ">Your Content Realized</h2>
          <p className="text-[#fff] max-w-[828px] m-auto pt-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit
            pretium, dictum lectus sed, vehicula nibh. Curabitur vehicula
            pretium urna, vel congue leo pharetra eget.{" "}
          </p>
        </div>
        <div className="w-full flex justify-center mt-10">
          <div
            className=" bg-[#7C719C73] border  border-white/40 
         flex items-center w-full max-w-[600px] sm:max-w-[350px] px-5 py-2 sm:py-1  border-b-2 border-t-0 border-r-0 border-l-0"
          >
            <input
              type="text"
              placeholder="Search "
              className="w-full bg-transparent outline-none text-[#ffffff] placeholder-gray-200 text-lg"
            />

            <button className=" hover:bg-white/20 transition sm:w-[25px]">
              <img src="/images/magnifying glass.png"></img>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
