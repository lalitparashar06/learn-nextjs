export default function ColTwoWithImage() {
  return (
    <section class="CardWithText relative bg-[rgb(29,45,64)] mt-[-15%]">
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
        <div className="row-wrapper     mt-[412px]">
          <div className="outer-wrap relative flex items-center mb-[252px]">
            <div className="content-item w-[45%] relative">
              <div className="inner-content  ">
                <h2>
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
            <div className="img-item w-[45%]  ml-[10%]">
              <div className="img-wrap  ">
                <img
                  src="/images/apm-hero-61623 (1) 2.png"
                  className="h-auto w-full"
                ></img>
              </div>
            </div>
          </div>
        </div>

        <div className="outer-wrap relative flex items-center mb-[156px]">
          <div className="img-item w-[45%]  relative ">
            <div className="img-wrap  ">
              <img
                src="/images/apm-hero-61623 (1) 3.png"
                className="h-auto w-full"
              ></img>
            </div>
          </div>
          <div className="content-item w-[45%] relative ml-[10%]">
            <div className="inner-content ">
              <h2>
                Early Stage<span className="text-[#F2AD24]">.</span>
              </h2>
              <p className="">
                We empower founders to achieve their highest potential by
                supporting them with capital, sector expertise and operational
                experience. Our team's collection of operating and
                entrepreneurial backgrounds means that we know what it takes to
                walk the path of building and scaling a business and the
                relentless execution that is required day in and day out.
              </p>
              <div className="btn mt-[40px] flex w-[164px] px-[20px] py-[12px] justify-center items-center gap-[10px] rounded-[100px] border-2 border-[var(--Primary-White,#FFF)]">
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
