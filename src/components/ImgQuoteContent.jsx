export default function ImgQuoteContent() {
  return (
    <section className="ImgQuoteContent bg-[#E5E4E7]">
      <div className="container">
        <div className="outer-wrap relative flex items-center w-[100%] lg:block  lg:text-center">
          <div className="img-item relative w-[45%] lg:w-full tablet:w-full phablet:w-full phone:w-full xs:w-full lg:mb-[30px]">
            <div className="inner-contentblue absolute top-[-50px] left-[-50px] items-center flex w-[185px] h-[185px] text-center rounded-[100px] bg-[#fff] border-8 border-[#ED268B] phone:w-[150px] phone:h-[150px] phone:left-[-19px] xs:w-[150px] xs:h-[150px] xs:left-[-19px] ">
              <div className="inner-outer">
                <span className="text-wrap text-black text-[32px] font-normal leading-[38px] tracking-[-0.05em] text-center">
                  $20m
                </span>
                <p className="text-black text-[14px] font-normal leading-[21px] tracking-[0em] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="img-wrap max-h-[500px] h-[100%] overflow-hidden">
              <img src="/images/doctor-office.png"></img>
            </div>
            <div className=""></div>
          </div>
          <div className="content-item w-[55%] lg:w-full tablet:w-full phablet:w-full phone:w-full xs:w-full">
            <div className="content-wrap pl-[60px] lg:pl-0 tablet:pl-0 phone:pl-0 xs:pl-0">
              <h3 className="text-black text-[30px] font-bold leading-[36px] tracking-[-0.03em] text-left">
                Lorem ipsum dolor sit amet consectetur. Ipsum amet in diam
                vitae.
              </h3>
              <h4 className="text-black text-[20px] font-normal leading-[30px] tracking-normal text-left">
                Custom content based on city. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad
              </h4>
              <div className="quote-icon relative max-w-[31px] h-[20px] z-[2] w-full overflow-hidden my-[25px]">
                <img
                  src="/images/pink-quoto.svg"
                  className="object-contain"
                ></img>
              </div>
              <p className="text-black text-base font-normal leading-6 tracking-normal text-left">
                Customer quote Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad
              </p>
              <div className="inner-wrap flex flex-wrap pt-[50px] phone:block xs:block">
                <div className="logo-wrap w-[30%] m-auto border-r border-black text-left flex items-center phone:w-full phone:border-0 phone:m-auto xs:w-full xs:border-0 xs:m-auto">
                  <div className="inner-icon relative h-[34px] z-2 w-full overflow-hidden ">
                    <img
                      src="/images/sures-icon.svg"
                      className="object-contain"
                    ></img>
                  </div>
                </div>
                <div className="inner-content w-[70%] pl-[70px] flex items-center phone:w-full phone:pt-[30px] phone:pl-0 xs:pt-[30px] xs:pl-0">
                  <p className="text-black text-base font-normal leading-6 tracking-normal text-left overflow-hidden">
                    Aaron "Checo" Pacheco, Product Delivery Infrastructure
                    Manager at Acquia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
