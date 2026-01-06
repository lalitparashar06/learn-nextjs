// import React from "react";
// export default function QuoteSlider() {
//   return (
//     <section class="QuoteSlider relative bg-[black] ">
//       <div class="container">
//         <h2 className="text-[white] text-center capitalize">
//           Most Recent Content
//         </h2>
//         <div className="outer-wrap mt-[40px]">
//           <div className="col-wrap">
//             <div className="inner-wrap relative w-[1290px] h-auto py-0 px-[101px] flex flex-wrap">
//               <div className="img-wrap w-[55%]">
//                 <div className="bg-img mt-[1px] max-w-[593px] h-[443px] rounded-[5px]">
//                   <img
//                     src="/images/podcast-mic.jpg"
//                     className="h-full rounded-[5px] object-cover"
//                   ></img>
//                 </div>
//               </div>
//               <div className="content-wrap w-[45%] pl-[49px]">
//                 <div className="text-wrap">
//                   <h6 className="text-[white]">What is a Podcast?</h6>
//                   <h6 className="text-[white] pt-[20px] pt-[30px]">
//                     Podcasting, once the “pirate radio” of the media world, has
//                     become a cultural force and commercial juggernaut. But as
//                     video encroaches and platforms wall off access, the
//                     definition of a podcast is up for debate. The industry
//                     stands at a crossroads. In What Is a Podcast?, Oxford Road
//                     and Edison Research sound the alarm—and offer the framework
//                     to forge a path forward.
//                   </h6>
//                   <div className="btn-wrap pt-[31px]">
//                     <a
//                       href="#"
//                       className="bg-[#2ee5a8] text-[black] p-[13px] rounded-[5px] border-[#2ee5a8] border-2 border-solid hover:bg-[black] hover:text-[#2ee5a8] transition-colors duration-150 ease-in-out ]"
//                     >
//                       Read More
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="inner-wrap relative w-[1290px] h-auto py-0 px-[101px] flex flex-wrap">
//               <div className="img-wrap w-[55%]">
//                 <div className="bg-img mt-[1px] max-w-[593px] h-[443px] rounded-[5px]">
//                   <img
//                     src="/images/soundwave.png"
//                     className="h-full rounded-[5px] object-cover"
//                   ></img>
//                 </div>
//               </div>
//               <div className="content-wrap w-[45%] pl-[49px]">
//                 <div className="text-wrap">
//                   <h6 className="text-[white]">
//                     State of Audio Advertising 2025
//                   </h6>
//                   <h6 className="text-[white] pt-[20px] pt-[30px]">
//                     Audio is bigger and more complicated than ever. Network
//                     shakeups, the rise of video-led listening, and inconsistent
//                     measurement have left advertisers navigating a fragmented
//                     market without so much as a shared vocabulary.
//                   </h6>
//                   <div className="btn-wrap pt-[31px]">
//                     <a
//                       href="#"
//                       className="bg-[#2ee5a8] text-[black] p-[13px] rounded-[5px] border-[#2ee5a8] border-2 border-solid hover:bg-[black] hover:text-[#2ee5a8] transition-colors duration-150 ease-in-out ]"
//                     >
//                       Read More
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="inner-wrap relative w-[1290px] h-auto py-0 px-[101px] flex flex-wrap">
//               <div className="img-wrap w-[55%]">
//                 <div className="bg-img mt-[1px] max-w-[593px] h-[443px] rounded-[5px]">
//                   <img
//                     src="/images/webcam-img.jpg"
//                     className="h-full rounded-[5px] object-cover"
//                   ></img>
//                 </div>
//               </div>
//               <div className="content-wrap w-[45%] pl-[49px]">
//                 <div className="text-wrap">
//                   <h6 className="text-[white]">
//                     Inside the Walled Garden: Breaking New Ground on YouTube
//                     Podcast Measurement
//                   </h6>
//                   <h6 className="text-[white] pt-[20px] pt-[30px]">
//                     As podcasting’s ecosystem fragments and YouTube becomes an
//                     increasingly important listening platform for millions,
//                     audio marketers are being forced to rethink everything they
//                     know about attribution, engagement, and media planning. But
//                     until now, marketers have faced a critical blind spot: how
//                     do video podcast impressions really perform? This report is
//                     Oxford Road’s answer: a first-of-its-kind data-backed view
//                     into video podcasting, showing once and for all that the
//                     walled garden can be cracked open.
//                   </h6>
//                   <div className="btn-wrap pt-[31px]">
//                     <a
//                       href="#"
//                       className="bg-[#2ee5a8] text-[black] p-[13px] rounded-[5px] border-[#2ee5a8] border-2 border-solid hover:bg-[black] hover:text-[#2ee5a8] transition-colors duration-150 ease-in-out ]"
//                     >
//                       Read More
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function QuoteSlider() {
  return (
    <section className="QuoteSlider relative bg-[black] ">
      <div className="container">
        <h2 className="text-[white] text-center capitalize">
          Most Recent Content
        </h2>

        <div className="outer-wrap mt-[40px]">
          <div className="col-wrap">
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
                <div className="inner-wrap relative w-[1290px] h-auto py-0 px-[101px] flex flex-wrap">
                  <div className="img-wrap w-[55%]">
                    <div className="bg-img mt-[1px] max-w-[593px] h-[443px] rounded-[5px]">
                      <img
                        src="/images/podcast-mic.jpg"
                        className="h-full rounded-[5px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="content-wrap w-[45%] pl-[49px]">
                    <div className="text-wrap">
                      <h6 className="text-[white]">What is a Podcast?</h6>
                      <h6 className="text-[white] pt-[30px]">
                        Podcasting, once the “pirate radio” of the media world,
                        has become a cultural force and commercial juggernaut.
                        But as video encroaches and platforms wall off access,
                        the definition of a podcast is up for debate. The
                        industry stands at a crossroads. In What Is a Podcast?,
                        Oxford Road and Edison Research sound the alarm—and
                        offer the framework to forge a path forward.
                      </h6>
                      <div className="btn-wrap pt-[31px]">
                        <a
                          href="#"
                          className="bg-[#2ee5a8] text-[black] p-[13px] rounded-[5px] border-[#2ee5a8] border-2 border-solid hover:bg-[black] hover:text-[#2ee5a8] transition-colors duration-150 ease-in-out"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* ✅ SLIDE 2 */}

              <SwiperSlide>
                <div className="inner-wrap relative w-[1290px] h-auto py-0 px-[101px] flex flex-wrap">
                  <div className="img-wrap w-[55%]">
                    <div className="bg-img mt-[1px] max-w-[593px] h-[443px] rounded-[5px]">
                      <img
                        src="/images/soundwave.png"
                        className="h-full rounded-[5px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="content-wrap w-[45%] pl-[49px]">
                    <div className="text-wrap">
                      <h6 className="text-[white]">
                        State of Audio Advertising 2025
                      </h6>
                      <h6 className="text-[white] pt-[30px]">
                        Audio is bigger and more complicated than ever. Network
                        shakeups, the rise of video-led listening, and
                        inconsistent measurement have left advertisers
                        navigating a fragmented market without so much as a
                        shared vocabulary.
                      </h6>
                      <div className="btn-wrap pt-[31px]">
                        <a
                          href="#"
                          className="bg-[#2ee5a8] text-[black] p-[13px] rounded-[5px] border-[#2ee5a8] border-2 border-solid hover:bg-[black] hover:text-[#2ee5a8] transition-colors duration-150 ease-in-out"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* ✅ SLIDE 3 */}
              <SwiperSlide>
                <div className="inner-wrap relative w-[1290px] h-auto py-0 px-[101px] flex flex-wrap">
                  <div className="img-wrap w-[55%]">
                    <div className="bg-img mt-[1px] max-w-[593px] h-[443px] rounded-[5px]">
                      <img
                        src="/images/webcam-img.jpg"
                        className="h-full rounded-[5px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="content-wrap w-[45%] pl-[49px]">
                    <div className="text-wrap">
                      <h6 className="text-[white]">
                        Inside the Walled Garden: Breaking New Ground on YouTube
                        Podcast Measurement
                      </h6>
                      <h6 className="text-[white] pt-[30px]">
                        As podcasting’s ecosystem fragments and YouTube becomes
                        an increasingly important listening platform for
                        millions, audio marketers are being forced to rethink
                        everything they know about attribution, engagement, and
                        media planning. But until now, marketers have faced a
                        critical blind spot: how do video podcast impressions
                        really perform? This report is Oxford Road’s answer: a
                        first-of-its-kind data-backed view into video
                        podcasting, showing once and for all that the walled
                        garden can be cracked open.
                      </h6>
                      <div className="btn-wrap pt-[31px]">
                        <a
                          href="#"
                          className="bg-[#2ee5a8] text-[black] p-[13px] rounded-[5px] border-[#2ee5a8] border-2 border-solid hover:bg-[black] hover:text-[#2ee5a8] transition-colors duration-150 ease-in-out"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
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
