import React from "react";

export default function IntroWithColtem() {
  return (
    <section className="IntroWithColItem">
      <div className="container">
        <div className="introwrap max-w-[1000px] text-center m-auto pb-[100px]">
          <h3 className="text-[black] text-[30px] ">
            Headline About <span className="text-[red]">Challenges </span>in the
            Ajay verma
          </h3>
          <p className="text-[black] text-[20px] pt-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div className="colwrap w-[calc(100%+40px)] ml-[-20px] flex flex-wrap">
          <div className="inneritem w-[calc(27.81%+40px)] my-0 mx-5 flex flex-wrap justify-center text-center">
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
          <div className="inneritem w-[calc(27.81%+40px)] my-0 mx-5 flex flex-wrap justify-center text-center">
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
          <div className="inneritem w-[calc(27.81%+40px)] my-0 mx-5 flex flex-wrap justify-center text-center">
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
        </div>
      </div>
    </section>
  );
}
