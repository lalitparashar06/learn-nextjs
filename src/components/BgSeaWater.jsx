export default function BgSeaWater() {
  return (
    <section className="BgSeaWater relative  bg-[linear-gradient(134.58deg,_#f6fcff_0.4%,_#cde8f6_99.63%)] overflow-hidden">
      <div
        className="bg-image absolute left-0 bottom-0  w-full h-[51.6%]
"
      >
        <img
          src="/images/cta_light_background_image.png"
          className="h-full w-full"
        ></img>
      </div>
      <div className="container">
        <div className="wrapper mb-[28px] flex items-center justify-between w-full gap-7">
          <div className="text-wrap max-w-[624px] text-[white] z-10">
            <h1 className="mb-[40px] text-[#1D2D40]  text-[88px] font-semibold leading-[110%] capitalize">
              Connect with us today<span className="text-[#F2AD24]">.</span>
            </h1>
            <div className="btn inline-block items-center  justify-center gap-[10px]  rounded-[100px] bg-[#00BFC8] transition-all duration-[600ms] ease-linear hover:bg-[#1D2D40] hover:text-[white]">
              <a href="#" className="inline-block relative px-[20px] py-[12px]">
                Contact us{" "}
              </a>
            </div>
          </div>
          <div className="img-wrap relative translate-x-[48px] z-[1]">
            <img
              src="/images/cta-light-circle-image.png"
              className=" relative"
            ></img>
            <div className="graphics absolute top-0 right-0 w-full h-full">
              <img
                src="/images/blue-pattern.svg"
                className="h-auto w-full"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
