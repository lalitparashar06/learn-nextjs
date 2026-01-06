import React from "react";

export default function LogoGrid() {
  const data = [
    { image: "/images/CNN logo.png", altText: "" },
    { image: "/images/PAC12.png", altText: "" },
    { image: "/images/cbs-sports-logo-white 1.png", altText: "" },
    { image: "/images/Roland-garros-white-logo.png", altText: "" },
    { image: "/images/viral-vault-logo 1.png", altText: "" },
    { image: "/images/usa-swimming-logo-vector-white 1.png", altText: "" },
    { image: "/images/scmp_logo_white 1.png", altText: "" },
    { image: "/images/us_soccer-white 1.png", altText: "" },
    { image: "/images/CNN logo.png", altText: "" },
    { image: "/images/PAC12.png", altText: "" },
    { image: "/images/cbs-sports-logo-white 1.png", altText: "" },
    { image: "/images/Roland-garros-white-logo.png", altText: "" },
    { image: "/images/viral-vault-logo 1.png", altText: "" },
    { image: "/images/usa-swimming-logo-vector-white 1.png", altText: "" },
    { image: "/images/scmp_logo_white 1.png", altText: "" },
    { image: "/images/us_soccer-white 1.png", altText: "" },
  ];

  return (
    <section className="LogoGrid relative bg-[#132d43] p-[0] ">
      <div className="logo-grid pl-[40px] pr-[40px] w-full flex flex-wrap">
        {data.map((item, index) => (
          <div
            className="section_inner_wrapper  w-[12.5%] h-[100%]"
            key={index}
          >
            <div className="grid-item bg-[#132D43] h-full ">
              <div className="img-wrap h-[147px]  m-auto">
                <a href="#" className="">
                  <img
                    src={item.image}
                    className="object-contain p-[30px]"
                    alt={item.altText}
                  ></img>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
