import React from "react";
export default function CardWithImage() {
  return (
    <section class="CardWithImage bg-[#181919]  ">
      <div className="inner-wrapper relative flex flex-wrap mx-auto w-full">
        <div className="item  w-[50%] flex flex-wrap items-center">
          <div className="content max-w[574px] pt-[60px] pl-[60px]">
            <h2 className="text-[#fff] capitalize">
              Uniting Brands and Creators
            </h2>
            <p className="text-[#fff] pt-[40px] pr-[335px]">
              Through original programming and flagship events like the Chief
              Audio Officer Summit, we bring together the marketers, platforms,
              and creators shaping the future of Podcast+ media.
            </p>
            <div className="btn-wrap pt-[30px]">
              <a
                href="#"
                className="p-[13px] bg-[#2ee5a8] text-[black] rounded-[5px]"
              >
                <span className="uppercase font-[900]">
                  Join The Conversation
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="item  w-[50%] self-center">
          <div className="img-wrap w-full float-right h-full overflow-hidden">
            <img
              src="/images/Uniting-Brands-and-Creators.jpg"
              className="h-full w-full"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
