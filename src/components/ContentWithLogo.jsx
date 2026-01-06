export default function ContentWithLogo() {
  return (
    <section class="ContentWithLogo bg-[#e2a7f9]">
      <div class="container mx-auto px-4">
        <div class="wrapper relative flex flex-wrap -ml-4 w-[calc(100%+30px)]">
          <div class="col-three relative w-[calc(33.33%-30px)] mx-[15px] mb-5 p-[40px] flex flex-wrap items-end justify-end first:items-center  lg:w-[100%] lg:justify-center block">
            <div class="relative">
              <h2 class="text-black font-normal capitalize">
                Ready To Get Started?
              </h2>
            </div>
          </div>
          <div class="col-three relative w-[calc(33.33%-30px)] mx-[15px] mb-5  p-[40px] flex flex-wrap   lg:w-[46%] lg:mx-[18px] tablet:w-[47%] tablet:mx-[10px] phablet:w-[100%]  phone:w-full xs:w-full">
            <div class="absolute w-full h-full top-0 left-0">
              <img
                src="/images/pexels-padrinan-255379.jpg"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="relative w-full">
              <h3 class="relative text-black pb-9 after:content-[''] after:absolute after:w-[127px] after:h-[2px] after:bg-red-500 after:bottom-0 after:left-0">
                Lorem Ipsum
              </h3>
              <p class="pt-9 max-w-[373px] text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
          </div>
          <div class="col-three relative w-[calc(33.33%-30px)] mx-[15px] mb-5  p-[40px] flex flex-wrap   lg:w-[46%] lg:mx-[18px]  tablet:w-[47%] tablet:mx-[10px] phablet:w-[100%]  phone:w-full xs:w-full">
            <div class="absolute w-full h-full top-0 left-0">
              <img
                src="images/pexels-padrinan-255379.jpg"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="relative w-full">
              <h3 class="relative text-black pb-9 after:content-[''] after:absolute after:w-[127px] after:h-[2px] after:bg-red-500 after:bottom-0 after:left-0">
                Lorem Ipsum
              </h3>
              <p class="pt-9 max-w-[373px] text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
