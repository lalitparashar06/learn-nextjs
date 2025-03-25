import React from "react";

export default function IntroWithColtem() {
  return (
    <section className="IntroWithColItem p-[20px] bg-[#ffffff]">
      <div className="container">
        <div className="introwrap max-w-[1000px] text-center m-auto pb-[30px]">
          <h3 className="text-[black] text-[30px] ">
            Headline About <span className="text-[red]">Challenges </span>in the
            Industries
          </h3>
          <p className="text-[black] text-[20px] pt-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div className="colwrap w-[calc(100%+40px)] ml-[-20px] flex flex-wrap  lg:w-[100%] ">
          <div className="inneritem w-[calc(33.33%-40px)] bg-[#f1bfd4] my-0 mx-5 flex flex-wrap justify-center text-center lg:w-[50%] lg:mx-0">
            <div className="iconwrap relative max-w-[53px] h-[51px] w-[100%] overflow-hidden mb-[50px]">
              <img src="/images/codepen.svg"></img>
            </div>
            <div className="innercontent">
              <h4 className="text-[30px] text-[black] font-[700]">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
              <p className="text-[black] text-[20px] pt-[30px]">
                Custom content based on city. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
              </p>
            </div>
          </div>
          <div className="inneritem w-[calc(33.33%-40px)] bg-[#f1bfd4] my-0 mx-5 flex flex-wrap justify-center text-center lg:w-[50%] lg:mx-0">
            <div className="iconwrap relative max-w-[53px] h-[51px] w-[100%] overflow-hidden mb-[50px]">
              <img src="/images/codepen.svg"></img>
            </div>
            <div className="innercontent">
              <h4 className="text-[30px] text-[black] font-[700]">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
              <p className="text-[black] text-[20px] pt-[30px]">
                Custom content based on city. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
              </p>
            </div>
          </div>
          <div className="inneritem w-[calc(33.33%-40px)] bg-[#f1bfd4] my-0 mx-5 flex flex-wrap justify-center text-center lg:w-[50%] lg:mx-0 lg:mt-[30px]">
            <div className="iconwrap relative max-w-[53px] h-[51px] w-[100%] overflow-hidden mb-[50px]">
              <img src="/images/codepen.svg"></img>
            </div>
            <div className="innercontent">
              <h4 className="text-[30px] text-[black] font-[700]">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
              <p className="text-[black] text-[20px] pt-[30px]">
                Custom content based on city. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
              </p>
            </div>
          </div>
          {/* <div className="inneritem w-[calc(31%-40px)] bg-[#f1bfd4] my-0 mx-5 flex flex-wrap justify-center text-center lg:w-[50%] lg:mx-0">
            <div className="iconwrap relative max-w-[53px] h-[51px] w-[100%] overflow-hidden mb-[50px]">
              <img src="/images/codepen.svg"></img>
            </div>
            <div className="innercontent">
              <h4 className="text-[30px] text-[black] font-[700]">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
              <p className="text-[black] text-[20px] pt-[30px]">
                Custom content based on city. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
              </p>
            </div>
          </div>
          <div className="inneritem w-[calc(31%-40px)] bg-[#f1bfd4] my-0 mx-5 flex flex-wrap justify-center text-center lg:w-[50%] lg:mx-0">
            <div className="iconwrap relative max-w-[53px] h-[51px] w-[100%] overflow-hidden mb-[50px]">
              <img src="/images/codepen.svg"></img>
            </div>
            <div className="innercontent">
              <h4 className="text-[30px] text-[black] font-[700]">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
              <p className="text-[black] text-[20px] pt-[30px]">
                Custom content based on city. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
