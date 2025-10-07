import React from "react";
export default function BrandWithContent() {
  return (
    <section class="BrandWithContent bg-[#6be1f9] ">
      <div className="container">
        <div className="content">
          <h2>Latest Blogs & News</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </p>
        </div>
        <div className="mx-auto mt-12.5 max-w-1280 px-4 md:px-8 lg:mt-17.5 xl:px-0">
          <div className="row grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            <div className="col-three animate_top overflow-hidden rounded-lg shadow-3 dark:bg-blacksection dark:shadow-none">
              <div className="img-wrap">
                <img src="/images/person.png"></img>
              </div>
              <div className="text-wrap">
                <div></div>
              </div>
            </div>
            <div className="col-three animate_top overflow-hidden rounded-lg shadow-3 dark:bg-blacksection dark:shadow-none">
              <div className="img-wrap">
                <img src="/images/person.png"></img>
              </div>
            </div>
            <div className="col-three animate_top overflow-hidden rounded-lg shadow-3 dark:bg-blacksection dark:shadow-none">
              <div className="img-wrap">
                <img src="/images/person.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
