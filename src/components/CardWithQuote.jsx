import React from "react";

export default function CardWithQuote() {
  return (
    <section class="CardWithQuote bg-[linear-gradient(180deg,rgba(24,25,25,0),#181919_99.98%),linear-gradient(37deg,#181919_0.72%,#24b283_75.78%)] lg:pt-0 ">
      <div className="inner-wrapper relative flex flex-wrap max-w-[1600px] mx-auto w-full lg:w-full">
        <div className="item  w-[50%] self-center lg:w-full max-w-full">
          <div className="img-wrap max-w-[800px] h-[auto] overflow-hidden lg:max-w-[100%]">
            <img
              src="/images/Performance-you-can-measure-1.jpg"
              className="h-[auto] w-full"
            ></img>
          </div>
        </div>
        <div className="item  w-[50%] flex flex-wrap items-center lg:w-full">
          <div className="content max-w[574px] pt-[60px] pl-[60px] lg:pt-[33px] lg:pl-[23px] lg:pb-[60px]">
            <h2 className="text-[#fff] capitalize">
              Performance You Can Measure
            </h2>
            <p className="text-[#fff] pt-[40px]">
              Half of the top podcast advertisers trust Oxford Road to scale
              results and prove impact. We deliver lower CAC, higher ROAS, and
              real business outcomes backed by billions in measured spend.
            </p>
            <div className="btn-wrap pt-[30px] ">
              <a
                href="#"
                className="p-[13px] bg-[#2ee5a8] text-[black] rounded-[5px] "
              >
                <span className="uppercase font-[900]">
                  See Our Client Outcomes
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
