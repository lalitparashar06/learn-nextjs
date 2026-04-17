import React from "react";
export default function IntroWithCounter() {
  return (
    <section class="IntroWithCounter relative  bg-[#013b5c] ">
      <div className="container">
        <div className="intro-block">
          <div className="intro-wrap w-full relative flex flex-wrap">
            <div className="col-two w-1/2 pr-[46px]">
              <h2 className="text-[#fff]">
                Together We Are a City of Opportunity
              </h2>
            </div>
            <div className="col-two w-1/2 pl-[12px]">
              <p className="text-[#fff]">
                The nation's fourth largest city is a vibrant, diverse global
                hub with a strong economy, exceptional quality of life, and
                well-developed industries.
              </p>
              <div className="btn-wrapper mt-[50px]">
                <a
                  href="# "
                  className="text-[#003b5c] bg-[#71cc98] px-[30px] py-[20px] rounded-[100px] inline-block hover:text-[#fff] hover:bg-transparent border-[1px] border-solid border-[#71cc98]"
                >
                  WHY HOUSTON
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid">
          <div className="introwithcounter"></div>
        </div> */}
      </div>
    </section>
  );
}
