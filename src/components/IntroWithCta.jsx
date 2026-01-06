import React from "react";
export default function IntroWithCta() {
  return (
    <section class="IntroWithCta relative bg-[linear-gradient(180deg,rgba(24,25,25,0),#181919_99.98%),linear-gradient(37deg,#181919_0.72%,#24b283_75.78%)] ">
      <div class="container">
        <div className="outer-wrap w-full flex">
          <div className="item w-[50%]">
            <div className="title-wrap">
              <h2 className="text-[#fff] mb-[50px] text-[60px]">
                Insights That Drive Your Next Win
              </h2>
            </div>
            <div className="btn-wrap">
              <a
                href="#"
                className="text-[black] bg-[#2ee5a8] hover:bg-[black] hover:text-[#2ee5a8] p-[20px] border-2 border-#2ee5a8  hover:border-[#2ee5a8] rounded-[10px] hover:[transition:color_.50s_ease-in-out,background-color_.50s_ease-in-out] border-[black]"
              >
                <span> Unlock Scalable Insights</span>
              </a>
            </div>
          </div>
          <div className="item w-[50%]">
            <div className="body-wrap pl-[30px]">
              <div className="inner-wrap">
                <p className="text-[#fff]  text-[23px]">
                  Insights should lead to market impact. Explore our library of
                  case studies, white papers, podcast episodes, and panels,
                  searchable by topic, format, and outcome.
                </p>
              </div>
              <div className="links-wrap pt-[30px]">
                <ul>
                  <li className="">
                    <a href="#">
                      <span>Explore our Case Studies and Whitepapers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Explore the Media Roundtable Podcast</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Explore the Influencer Newsletter</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
