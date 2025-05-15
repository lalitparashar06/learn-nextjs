export default function CardWithText() {
  return (
    <section
      class="CardWithText relative bg-white  pt-[90px] pb-[90px] px-0 overflow-hidden lg:pb-[0]
"
    >
      <div className="container">
        <div className="intro-wrap text-center max-w-[827px] mx-auto">
          <h2 className="text-[64px] text-[black] leading-[120%] pb-[16px] capitalize">
            Buyout<span className="text-[#F2AD24]">.</span>
          </h2>
          <p
            className="text-[color:var(--Secondary-Darkest-Teal,#1D2D40)] text-center font-montserrat text-[20px] not-italic font-normal leading-[150%] tracking-[0.4px] pb-[16px]
"
          >
            We have built a concentrated portfolio of investments. This approach
            allows us to provide the advice and support to help our businesses
            achieve their strategic and operational goals and not dilute our
            efforts across an overly broad portfolio.
          </p>
          <p
            className="text-[color:var(--Secondary-Darkest-Teal,#1D2D40)] text-center font-montserrat text-[20px] not-italic font-normal leading-[150%] tracking-[0.4px]
"
          >
            In a crowded space of technology-focused private equity firms, our
            investors consistently cite our concentrated strategy, sector-led
            underwriting and post-deal value creation capabilities as the
            reasons they partner with Crosspoint – simply put, they believe we
            can find and help build great companies.
          </p>
        </div>
        <div className="card-wrap mt-[64px] flex justify-center w-[calc(100%+20px)] -ml-[10px] flex-wrap relative z-[4] tablet:w-full">
          {/* Card 1 */}
          <div className="group relative bg-[rgb(0,77,124)] h-[440px] max-w-[392px] w-[calc(33.333%-20px)] flex flex-wrap items-end p-[40px] rounded-[16px] mx-[10px] mb-[20px] transition-all duration-[600ms] ease-linear hover:-translate-y-2 tablet:w-[calc(50%-32px)] tablet:p-[32px] phone:w-full md:w-full md:h-[300px] lg:h-[350px]  xs:h-auto xs:p-[20px]">
            <a
              href="#"
              className="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none"
            >
              .
            </a>

            <div className="outer-content overflow-hidden w-full">
              <div className="inner-text mt-auto w-full relative z-[5] overflow-hidden transform transition-transform duration-[300ms] translate-y-[162px] group-hover:translate-y-0 md:translate-y-[0] laptop-portrait:translate-y-[130px] lg:translate-y-[0] ">
                <div className="title-wrap">
                  <h4 className="text-[32px] not-italic font-semibold leading-[120%] text-white   xs:text-[27px]">
                    Creating Long Term Value
                  </h4>
                  <div className="body-wrap overflow-hidden transition-[max-height] duration-[400ms] ease-in-out">
                    <p className="text-white font-montserrat text-[18px] font-normal leading-[27px] tracking-[0.02em] text-left xs:text-[22px] xs:leading-[20px] xs:tracking-[0.03em]">
                      We bring the collective decades of operational and
                      investment experience from across the Crosspoint team to
                      support our portfolio companies with their transformation
                      and expansion goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 (repeat with different bg) */}
          <div className="group relative h-[440px] bg-[rgb(186,213,143)] max-w-[392px] w-[calc(33.333%-20px)] flex flex-wrap items-end p-[40px] rounded-[16px] mx-[10px] mb-[20px] transition-all duration-[600ms] ease-linear hover:-translate-y-2 tablet:w-[calc(50%-32px)] tablet:p-[32px] phone:w-full lg:p-[32px] md:w-full md:h-[300px] md:p-[32px] lg:h-[350px] xs:p-[20px] xs:h-auto">
            <a
              href="#"
              className="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none"
            >
              .
            </a>
            <div className="outer-content overflow-hidden w-full">
              <div className="inner-text mt-auto w-full relative z-[5] overflow-hidden transform transition-transform duration-[300ms] translate-y-[162px] group-hover:translate-y-0 laptop-portrait:translate-y-[130px] lg:translate-y-[0] ">
                <div className="title-wrap">
                  <h4 className="text-[32px] not-italic font-semibold leading-[120%] text-white  xs:text-[27px] ">
                    Creating Long Term Value
                  </h4>
                  <div className="body-wrap overflow-hidden transition-[max-height] duration-[400ms] ease-in-out">
                    <p className="text-white font-montserrat text-[18px] font-normal leading-[27px] tracking-[0.02em] text-left xs:text-[22px] xs:leading-[20px] xs:tracking-[0.03em]">
                      We bring the collective decades of operational and
                      investment experience from across the Crosspoint team to
                      support our portfolio companies with their transformation
                      and expansion goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
