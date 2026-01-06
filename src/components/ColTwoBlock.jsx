import React from "react";
export default function ColTwoBlock() {
  return (
    <section className="IntroWithCta relative bg-[black] ">
      <div class="container">
        <div className="row-wrap relative w-full flex flex-wrap ">
          <div className="title-wrap w-[580px] pr-[30px]">
            <h2 className="text-[white]">The Oxford Edge: Why We Outperform</h2>
          </div>
          <div className="description-wrap w-[calc(100%-580px)] pl-[81px]">
            <h6 className="text-[white] pb-[20px]">
              We pioneered best practices that the industry now follows. With
              proprietary data, exclusive access, and a performance playbook
              trusted by the top podcast advertisers in the world, we give you a
              competitive edge.
            </h6>
            <div className="btn-wrap pt-[16px]">
              <a
                href="#"
                className="font-bold leading-[30px]text-[18px] relative {`${styles.span}`}"
              >
                <span className="text-[white]  font-bold leading-[30px] ">
                  See the Oxford Edge
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
