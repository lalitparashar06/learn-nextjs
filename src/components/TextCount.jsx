export default function TextCount() {
  return (
    <section className="TextCount bg-gradient-to-r from-pink-300 to-grey-300">
      <div className="container">
        <div className="wrapper">
          <div className="text-wrapper ">
            <h2 className="">Arcu tristique risus massa hac proin</h2>
            <p className="max-w-[838px] pt-[30px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae.
            </p>
          </div>
          <div className="counter-wrap flex flex-wrap w-[calc(100%+128px)] -ml-16 mt-20 bg-gradient-to-r from-yellow-300 to-blue-300 p-[30px] lg:justify-left lg:w-[calc(100%+60px)] lg:ml-[-30px] tablet:block tablet:m-auto tablet:w-full tablet:mt-[20px] mdDown:block mdDown:m-auto mdDown:w-full mdDown:mt-[20px]">
            <div className="col-three flex flex-wrap  w-[calc(33.33%-128px)] mx-16 lg:w-[calc(50%-60px)] lg:mx-[30px] lg:mt-[20px]   mdDown:block mdDown:m-auto mdDown:w-full mdDown:mt-[20px]">
              <div className="wrap-one">
                <div className="text-wrap">
                  <h1 className="text-[black] ">
                    <span className="counter-animated">300</span>
                    <span>%</span>
                  </h1>
                </div>
                <div className="content-wrap pt-[30px]">
                  <h5>Duis aute irure dolor reprehenderit</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-three flex flex-wrap  w-[calc(33.33%-128px)] mx-16 lg:w-[calc(50%-60px)] lg:mx-[30px] lg:mt-[20px] tablet:block tablet:m-auto tablet:w-full tablet:mt-[20px] mdDown:block mdDown:m-auto mdDown:w-full mdDown:mt-[20px]  ">
              <div className="wrap-one">
                <div className="text-wrap">
                  <h1 className="text-[black] ">
                    <span className="counter-animated">15</span>
                    <span>X</span>
                  </h1>
                </div>
                <div className="content-wrap pt-[30px]">
                  <h5>Duis aute irure dolor reprehenderit</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-three flex flex-wrap  w-[calc(33.33%-128px)] mx-16 lg:w-[calc(50%-60px)] lg:mx-[30px] lg:mt-[20px] tablet:block tablet:m-auto tablet:w-full tablet:mt-[20px] mdDown:block mdDown:m-auto mdDown:w-full mdDown:mt-[20px]">
              <div className="wrap-one">
                <div className="text-wrap">
                  <h1 className="text-[black] ">
                    <span className="counter-animated">100</span>
                    <span>+</span>
                  </h1>
                </div>
                <div className="content-wrap pt-[30px]">
                  <h5>Duis aute irure dolor reprehenderit</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
