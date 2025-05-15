export default function ColTwoWithImage() {
  return (
    <section class="ColTwoWithImage relative bg-[rgb(29,45,64)] mt-[-15%]">
      <div className="bg-pattern absolute top-0 left-0 w-full h-full z-[3] ">
        <img
          src="/images/white-pattern-circle.svg"
          className="item  relative translate-y-[-137.049px] will-change-transform transition-transform duration-[200ms] w-full h-auto
"
        ></img>
      </div>
      <div
        className="bg-image absolute bottom-0 left-0 w-full h-auto
"
      >
        <img src="/images/white-maths-calc.png" className="w-full h-auto"></img>
      </div>
      <div className="container">
        <div className="row-wrapper     mt-[412px] phablet:mt-[129px] phone:mt-[129px] xs:mt-[129px]">
          <div className="outer-wrap relative flex items-center mb-[252px] z-10 phablet:flex-wrap phablet:mb-[87px] phone:flex-wrap phone:mb-[80px] xs:flex-wrap xs:mb-[87px]">
            <div className="content-item w-[45%] relative phablet:w-full phone:w-full xs:w-full">
              <div className="inner-content   ">
                <h2 className="capitalize">
                  Growth Equity<span className="text-[#F2AD24]">.</span>
                </h2>
                <p className="">
                  We help companies with disruptive technology preserve their
                  entrepreneurial spirit by supporting their culture of
                  innovation and agility, while providing industry expertise,
                  operational support, repeatable processes and strategic growth
                  strategies to help them scale effectively. By helping them
                  execute against their original vision, we ensure they maintain
                  their passion while growing their market presence to become a
                  bigger player in a dynamic industry.
                </p>
              </div>
            </div>
            <div className="img-item w-[45%]  ml-[10%] phablet:w-full phone:w-full phablet:ml-[0]  phone:ml-[0] xs:ml-[0] xs:w-full ">
              <div className="img-wrap  ">
                <img
                  src="/images/apm-hero-61623 (1) 2.png"
                  className="h-auto w-full"
                ></img>
              </div>
            </div>
          </div>

          <div className="outer-wrap relative flex items-center flex-row-reverse  mb-[156px]  z-10 phablet:flex-wrap phablet:mb-[80px] phone:flex-wrap xs:flex-wrap  xs:mb-[60px] mb-[87px]">
            <div className="content-item w-[45%] relative ml-[10%] phablet:w-full phablet:ml-[0] phone:w-full phone:ml-[0]  xs:w-full xs:ml-[0]">
              <div className="inner-content mb-[30px]">
                <h2 className="capitalize">
                  Early Stage<span className="text-[#F2AD24]">.</span>
                </h2>
                <p className="">
                  We empower founders to achieve their highest potential by
                  supporting them with capital, sector expertise and operational
                  experience. Our team's collection of operating and
                  entrepreneurial backgrounds means that we know what it takes
                  to walk the path of building and scaling a business and the
                  relentless execution that is required day in and day out.
                </p>
              </div>
              <a
                href="#"
                className="btnPrimary relative inline-block  bg-[#00BFC8] border-2 border-transparent pt-[11px] pr-[50px] pb-[10px] pl-[15px] rounded-full no-underline transition-all duration-300 ease-linear overflow-hidden hover:text-[#0d0d0d] hover:bg-white"
              >
                <span className="relative text-[16px] font-medium text-[#0d0d0d] leading-[150%] tracking-[0.32px] z-[1] transition-colors duration-300 ease-linear">
                  Contact us
                </span>
              </a>
            </div>
            <div className="img-item w-[45%]  relative phablet:w-full phone:w-full xs:w-full ">
              <div className="img-wrap  ">
                <img
                  src="/images/apm-hero-61623 (1) 3.png"
                  className="h-auto w-full"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
