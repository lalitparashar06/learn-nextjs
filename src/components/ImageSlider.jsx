"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider() {
  return (
    <section className=" ImageSlider relative bg-[black] ">
      <div className="container">
        <h2 className="text-[white] text-center capitalize">
          Most Recent Content
        </h2>

        <div className="outer-wrap mt-[40px] relative">
          <div className="col-wrap relative">
            <Swiper
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination, Autoplay]}
            >
              {/* ✅ SLIDE 1 */}
              <SwiperSlide>
                <div className="item relative w-full min-w-[100%] flex justify-center">
                  <div className="inner-content text-center px-[40px]">
                    <h3 className="text-[#fff]">Our Clients Say</h3>
                    <p className="text-[#fff] max-w-[721px] m-auto pt-[20px]">
                      "Aenean pulvinar dui ornare, feugiat lorem non, ultrices
                      justo. Mauris efficitur, mauris in auctor euismod, quam
                      elit ultrices urna, eget eleifend arcu risus id metus.
                      Maecenas ex enim, mattis eu velit vitae, blandit mattis
                      sapien. Sed aliquam leo et semper vestibulum."
                    </p>
                    <h5 className="text-[#fff] pt-[15px]">Nina Hudson</h5>
                  </div>
                </div>
              </SwiperSlide>

              {/* ✅ SLIDE 2 */}

              <SwiperSlide>
                <div className="item w-full relative">
                  <div className="inner-content text-center px-[40px]">
                    <h3 className="text-[#fff]">Our Clients Say</h3>
                    <p className="text-[#fff] max-w-[721px] m-auto pt-[20px]">
                      "Aenean pulvinar dui ornare, feugiat lorem non, ultrices
                      justo. Mauris efficitur, mauris in auctor euismod, quam
                      elit ultrices urna, eget eleifend arcu risus id metus.
                      Maecenas ex enim, mattis eu velit vitae, blandit mattis
                      sapien. Sed aliquam leo et semper vestibulum."
                    </p>
                    <h5 className="text-[#fff] pt-[15px]">Marry Larson</h5>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
