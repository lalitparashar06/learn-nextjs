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
        <div className="wrapper mb-[28px] flex items-center justify-between w-full gap-7 phablet:flex-wrap phone:flex-wrap xs:flex-wrap">
          <div className="text-wrap max-w-[624px] text-[white] z-1">
            <h1 className=" mb-[40px] text-[#1D2D40]  text-[88px] font-semibold leading-[110%] capitalize phablet:text-[56px] phone:text-[40px] xs:text-[40px] ">
              Connect with us today<span className="text-[#F2AD24]">.</span>
            </h1>

            <a
              href="#"
              className="btnPrimary relative inline-block  bg-[#00BFC8] border-2 border-transparent pt-[11px] pr-[50px] pb-[10px] pl-[15px] rounded-full no-underline transition-all duration-300 ease-linear overflow-hidden hover:text-[#0d0d0d] hover:bg-white phone:pt-[3px] phone:pb-[3px] phone:pr-[30px] phone:pl-[7px]"
            >
              <span className="relative text-[16px] font-medium text-[#0d0d0d] leading-[150%] tracking-[0.32px] z-[1] transition-colors duration-300 ease-linear phone:text-[11px]">
                Contact us
              </span>
            </a>
          </div>
          <div className="img-wrap relative translate-x-[48px] z-[1] flex-none basis-[48.5%]">
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
