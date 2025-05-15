export default function BannerSecondLevel() {
  return (
    <section className="relative bg-[#004D7C] w-full pt-[181px] pb-[124px] z-[1] overflow-hidden md:pt-[100px] md:pb-[70px] sm:pt-[80px] sm:pb-[50px]">
      <div className="absolute top-0 left-0 w-full h-full ">
        <img
          src="/images/girls-black.png"
          className="w-full h-full  object-right min-h-[100%] "
          alt="banner"
        />
      </div>
      <div className="container ">
        <div className="max-w-[550px] w-full text-white md:w-[70%] sm:w-full">
          <h1 className="text-[72px] font-semibold leading-[110%] md:text-[48px] sm:text-[36px] xs:text-[30px]">
            Investment Strategy
            <span className="text-[72px] text-[#f2ad24] md:text-[48px] sm:text-[36px] xs:text-[30px]">
              .
            </span>
          </h1>
          <p className="mt-6 text-[20px] md:text-[18px] sm:text-[16px] sm:mt-4">
            The process to create great businesses requires focus and attention.
          </p>
        </div>
      </div>
    </section>
  );
}
