import React from "react";

export default function DetailModule() {
  return (
    <section className="detailmodule bg-[linear-gradient(1turn,hsla(0,0%,100%,0),rgba(113,197,232,0.15)_60.5%)]">
      <div className="container ">
        <div className="intro-wrap  ">
          <span className="w-[751px] text-[#003B5C] text-[16px] ">
            Data, Insight & Analysis
          </span>
          <h2 className=" text-[#1F1F1F]  mt-[20px]">
            Economy at a Glance - June 2024
          </h2>
          <p className="text-[#1F1F1F] text-[24px] mt-[20px] font-medium">
            This issue of Glance examines city of Houston population growth, the
            health of the local housing market, highlights of the latest Kinder
            Houston Area Survey, and the near-term outlook for the U.S. economy.{" "}
          </p>
          <span className="text-[#000] text-[16px] mt-[20px]">
            Published on 6/5/24
          </span>
        </div>
        <div className="outer-wrap mt-[80px] flex lg:block lg:mt-[40px]">
          <div className="left-content w-[75%] pr-[110px] lg:w-[100%] tabletlarge:pr-[30px] lg:pr-[0]">
            <div className="card-wrap border-0 ">
              <div className="title-content p-[30px] bg-[#003B5C] rounded-t-[30px] rounded-b-[0]  shadow-[-8px_4px_6px_0px_rgba(0,_0,_0,_0.1)] ">
                <h3 className="text-[white] text-[30px]">
                  Key March Takeaways
                </h3>
                <p className="text-[white] text-[18px]">
                  Here are the facts to know about the Houston region this month{" "}
                </p>
              </div>
              <div className="card-content p-[30px] bg-[white]">
                <div className="card-item pb-[30px] ">
                  <h4 className="text-[18px]">June Takeaway #1</h4>
                  <p className="text-[16px] pt-[10px]">
                    Unlike many U.S. cities, Houston has added population in
                    recent years.
                  </p>
                </div>
                <div className="card-item pb-[30px] ">
                  <h4 className="text-[18px]">June Takeaway #2</h4>
                  <p className="text-[16px] pt-[10px]">
                    Metro Houston area leads the nation in new and existing home
                    sales.
                  </p>
                </div>
                <div className="card-item pb-[30px] ">
                  <h4 className="text-[18px]">June Takeaway #3</h4>
                  <p className="text-[16px] pt-[10px]">
                    Across every demographic and income level, more Houstonians
                    are excited about the future than worried.
                  </p>
                </div>
              </div>
            </div>
            <div className="inner-content mt-[40px]">
              <div className="inner-wrap">
                <h3 className="text-[48px] text-[#1F1F1F] pb-[20px]">
                  CITY POPULATION UPDATES
                </h3>
                <p className="text-[18px] text-[#1F1F1F]">
                  The City of Houston is growing again. After struggling to
                  retain population after Hurricane Harvey and losing population
                  during the COVID-19 pandemic, the city added more than 23,000
                  residents over the past two years.
                </p>

                <div className="img-wrap mt-[40px] mb-[40px] relative ">
                  <img
                    src="/images/map.webp"
                    className="img shadow-[0px_4px_25px_0px_rgba(91,91,91,.15)] rounded-t-[30px] rounded-b-[30px] relative object-contain"
                  ></img>
                  <div className="overlay-btn absolute w-[42px] h-[42px] bottom-[30px] right-[30px] cursor-pointer phablet:w-[29px] phablet:h-[29px] phablet:right-[22px] phablet:bottom-[20px] sm:w-[22px] sm:h-[22px] sm:right-[15px] sm:bottom-[11px]">
                    <img src="/images/greenbtn.svg"></img>
                  </div>
                </div>
                <span className="mt-[40px] block underline">
                  Click to Expand
                </span>
              </div>
              <div className="inner-content  mt-[40px] ">
                <div className="inner-wrap">
                  <p className="mb-[40px] text-[18px] text-[black]">
                    Houston is bucking the trend that plagues many of its peers.
                    Of the nation’s 100 most populous cities, 43 lost population
                    between ’21 and ’23. For some, the population losses were
                    significant.
                  </p>
                  <div className="img-wrap  relative">
                    <img
                      src="/images/tablenew.webp "
                      className="rounded-t-[30px] rounded-b-[30px] shadow-[0px_4px_25px_0px_rgba(91,91,91,.15)]"
                    ></img>
                    <div className="overlay-btn absolute w-[42px] h-[42px] bottom-[25px] right-[24px] cursor-pointer phablet:w-[29px] phablet:h-[29px] phablet:right-[15px] phablet:bottom-[11px] sm:w-[22px] sm:h-[22px] sm:right-[10px] sm:bottom-[11px]">
                      <img src="/images/greenbtn.svg"></img>
                    </div>
                  </div>
                  <span className="mt-[40px] block underline">
                    Click to Expand
                  </span>
                </div>
              </div>

              <div className="inner-content  mt-[40px] ">
                <div className="inner-wrap">
                  <p className="mb-[40px] text-[18px] text-[black]">
                    The cities enjoying the most robust growth have several
                    characteristics in common. First, they’re in metro areas
                    that quickly recovered their pandemic job losses. Employment
                    in these regions is at an all-time high.
                  </p>
                  <div className="img-wrap relative ">
                    <img
                      src="images/jully.webp "
                      className="rounded-t-[30px] rounded-b-[30px] shadow-[0px_4px_25px_0px_rgba(91,91,91,.15)] "
                    ></img>
                    <div className="overlay-btn absolute w-[42px] h-[42px] bottom-[15px] right-[20px] cursor-pointer  phablet:w-[29px] phablet:h-[29px] phablet:right-[15px] phablet:bottom-[11px] sm:w-[22px] sm:h-[22px] sm:right-[10px] sm:bottom-[10px]">
                      <img src="/images/greenbtn.svg"></img>
                    </div>
                  </div>
                  <span className="mt-[40px] block underline">
                    Click to Expand
                  </span>
                </div>
              </div>
              <div className="inner-content  mt-[40px] ">
                <div className="inner-wrap">
                  <p className="mb-[40px] text-[18px] text-[black]">
                    The nation’s fastest growing cities are also in metros where
                    the cost of living is substantially lower than cities that
                    are losing population. The data in the following chart comes
                    from the Council for Community and Economic Research’s
                    quarterly Cost of Living Index, which examines housing,
                    utility, food, health care, and transportation costs in 264
                    metro areas. The index does not factor in local taxes.
                  </p>
                  <div className="img-wrap  relative">
                    <img
                      src="/images/costnew.webp "
                      className="rounded-t-[30px] rounded-b-[30px] shadow-[0px_4px_25px_0px_rgba(91,91,91,.15)]"
                    ></img>
                    <div className="overlay-btn absolute w-[42px] h-[42px] bottom-[30px] right-[30px] cursor-pointer   phablet:w-[29px] phablet:h-[29px] phablet:right-[15px] phablet:bottom-[11px] sm:w-[22px] sm:h-[22px] sm:right-[15px] sm:bottom-[11px]">
                      <img src="/images/greenbtn.svg"></img>
                    </div>
                  </div>
                  <span className="mt-[40px] block underline">
                    Click to Expand
                  </span>
                </div>
              </div>
              <div className="inner-content  mt-[40px] ">
                <div className="inner-wrap">
                  <p className="mb-[40px] text-[18px] text-[black]">
                    The nation’s fastest growing cities are also in metro areas
                    where housing tends to be more affordable.
                  </p>
                  <div className="img-wrap relative ">
                    <img
                      src="/images/avg.webp "
                      className="rounded-t-[30px] rounded-b-[30px] shadow-[0px_4px_25px_0px_rgba(91,91,91,.15)]"
                    ></img>
                    <div className="overlay-btn absolute w-[42px] h-[42px] bottom-[25px] right-[30px] cursor-pointer  phablet:w-[29px] phablet:h-[29px] phablet:right-[15px] phablet:bottom-[11px] sm:w-[22px] sm:h-[22px] sm:right-[15px] sm:bottom-[11px] ">
                      <img src="/images/greenbtn.svg"></img>
                    </div>
                  </div>
                  <span className="mt-[40px] block underline">
                    Click to Expand
                  </span>
                </div>
              </div>
              <div className="inner-content  mt-[40px] ">
                <div className="inner-wrap">
                  <p className="mb-[40px] text-[18px] text-[black]">
                    Cities with the largest gains also tend to have lower state
                    tax burdens. Conversely, the cities with shrinking
                    populations tend to have higher tax burdens.
                  </p>
                  <div className="img-wrap relative ">
                    <img
                      src="/images/state.webp "
                      className="rounded-t-[30px] rounded-b-[30px] shadow-[0px_4px_25px_0px_rgba(91,91,91,.15)]"
                    ></img>
                    <div className="overlay-btn absolute w-[42px] h-[42px] bottom-[20px] right-[30px] cursor-pointer  phablet:w-[29px] phablet:h-[29px] phablet:right-[15px] phablet:bottom-[11px] sm:w-[22px] sm:h-[22px] sm:right-[15px] sm:bottom-[11px]">
                      <img src="/images/greenbtn.svg"></img>
                    </div>
                  </div>
                  <span className="mt-[40px] block underline">
                    Click to Expand
                  </span>
                </div>
              </div>
              <div className="inner-content mt-[40px]">
                <div className="inner-wrap">
                  <p className="font-normal leading-9 ">
                    Other factors come into play as well. For instance, except
                    for Seattle, the nation’s fastest growing cities tend to be
                    in the sunbelt. Where Houston Ranks
                  </p>

                  <p className="pt-[30px]">
                    The City of Houston’s population now exceeds 2.3 million,
                    ranking it as the nation’s fourth most populous city. Five
                    of the nation’s most populous cities are now in Texas. San
                    Antonio is the nation’s seventh most populous and could
                    overtake No. 6 Philadelphia by the end of the decade.
                  </p>
                  <p className="pt-[30px]">
                    To continue reading, download this report.
                  </p>
                  <p className="pt-[30px]">
                    Note: The geographic area referred to in this publication as
                    “Houston,” "Houston Area” and “Metro Houston” is the
                    ten-county Census designated metropolitan statistical area
                    of Houston-Pasadena-The Woodlands-Sugar Land, TX. The ten
                    counties are: Austin, Brazoria, Chambers, Fort Bend,
                    Galveston, Harris, Liberty, Montgomery, San Jacinto, and
                    Waller.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-content w-[25%] lg:w-[100%] tabletlarge:w-[30%] tablet:w-[50%] phablet:w-[50%] sm:w-[100%] ">
            <div className="social-icon">
              <div className="social-wrap">
                <h6>Share this Event</h6>
                <ul className="flex pt-[30px]">
                  <a
                    className="iconwrap max-w-[33px] max-h-[33px] mr-[27px]"
                    href="#"
                  >
                    <img
                      src="/images/Vector.svg"
                      className="object-contain"
                    ></img>
                  </a>
                  <a
                    className="iconwrap max-w-[33px] max-h-[33px] mr-[27px]"
                    href="#"
                  >
                    <img
                      src="/images/Twitter.svg"
                      className="object-contain"
                    ></img>
                  </a>
                  <a
                    className="iconwrap max-w-[33px] max-h-[33px] mr-[27px]"
                    href="#"
                  >
                    <img
                      src="/images/LinkedIn.svg"
                      className="object-contain"
                    ></img>
                  </a>
                  <a
                    className="iconwrap max-w-[33px] max-h-[33px] mr-[27px]"
                    href="#"
                  >
                    <img
                      src="/images/Group.svg"
                      className="object-contain"
                    ></img>
                  </a>
                </ul>
              </div>
              <div className="card relative mt-[60px] mb-[60px]   ">
                <div className="img-wrap  absolute truncate w-[100%] h-[100%] ">
                  <img
                    src="/images/office.webp"
                    className="rounded-[30px]   "
                  ></img>

                  <div className="absolute inset-0   opacity-60 shadow-lg rounded-[30px] bg-gradient-to-b from-pink-50 to-pink-900 "></div>
                </div>
                <div className="card-content relative p-[40px] z-[4] ">
                  <h5 className="text-[white] text-[25px]">
                    Download Economy at a Glance June 2024
                  </h5>
                  <div className="button mt-[20px]">
                    <a href="#" className="text-[white]">
                      Download
                    </a>
                  </div>
                </div>
              </div>
              <div className="card bg-[white] rounded-[30px] shadow-[-8px_4px_6px_0px_rgba(0,_0,_0,_0.1)] ">
                <div className="card-content p-[30px]">
                  <h5 className="">
                    Get Economy at a Glance Delivered Monthly
                  </h5>
                  <p className="pt-[20px]">
                    Join the Houston: Economy at a Glance mailing list to get
                    each month's edition sent directly to your inbox
                  </p>
                  <div className="btn pt-[20px]">
                    <a href="#">Subscriber</a>
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
