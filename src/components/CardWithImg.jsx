import React from "react";
export default function CardWithImg() {
  return (
    <section class="CardWithImg bg-[#181919]  ">
      <div className="inner-wrapper relative flex flex-wrap mx-auto w-full">
        <div className="item  w-[50%] self-center">
          <div className="img-wrap w-full float-left h-full overflow-hidden">
            <img
              src="/images/Our-Mission-1.jpg"
              className="h-full w-full"
            ></img>
          </div>
        </div>
        <div className="item  w-[50%] flex flex-wrap items-center">
          <div className="content max-w[574px] pt-[60px] pl-[60px] ">
            <h2 className="text-[#fff] mb-[46px] capitalize">Our Mission</h2>
            <p className="text-[#fff]     pr-[321px]">
              Uniting brands and creators through strategy and technology for
              outcomes only we can deliver.
            </p>
            <div className="btn-wrap pt-[26px]">
              <a
                href="#"
                className="p-[13px] bg-[#2ee5a8] text-[black] hover:text-[#2ee5a8] hover:bg-[black] hover:border-[#2ee5a8] hover:border-[2px]  rounded-[5px]"
              >
                <span className="uppercase font-[900]">
                  Learn More About Us
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
