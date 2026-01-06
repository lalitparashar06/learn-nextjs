import React from "react";
export default function BannerOxford() {
  return (
    <section classname="BannerOxford relative min-h-[1400px]  overflow-hidden md:min-h-[800px]  p-0  flex-wrap">
      <div className="bg-img   absolute w-full h-full  top-0 left-0  ">
        <img
          src="/images/pexels-rdne-8198616.jpg"
          className="h-full w-full object-cover"
        ></img>
      </div>
      <div className="container">
        <div className="content relative max-w-[962px] pt-[221px]">
          <h1 className="text-[#fff] text-[82px] pt-[80px] mb-[23px] xl:text-[70px] lg::text-[60px] md:text-[50px] sm:text-[40px]  ">
            The World's Largest Podcast Advertising Agency
          </h1>
          <p className="text-[#fff] text-[25px]">
            The Category Leader in Podcast, Audio, and Creator Media. Billions
            in measured outcomes. Decades of expertise. Trusted by the best.
          </p>
          <div className="btn mt-[38px]">
            <a
              href="#"
              className="bg-[#2EE5A8] p-[15px] rounded-[5px]  hover:bg-[transparent] font-[900] hover:border-[2px] hover:text-[#fff] transition-all duration-1000 ease-in-out "
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// import React from "react";

// export default function BannerOxford() {
//   return (
//     <section className="BannerOxford relative min-h-[900px] table sm:min-h-[1100px] md:min-h-[1300px] lg:min-h-[1600px] p-0">
//       {/* Background Image */}
//       <div className="bg-img absolute w-full h-full top-0 left-0">
//         <img
//           src="/images/pexels-rdne-8198616.jpg"
//           className="h-full w-full object-cover"
//           alt=""
//         />
//       </div>

//       <div className="container relative z-10">
//         <div className="content max-w-[962px] pt-[150px] sm:pt-[180px] md:pt-[200px] lg:pt-[221px]">
//           {/* Heading Responsive */}
//           <h1
//             className="text-white text-[30px]sm:text-[40px]
//               md:text-[50px]
//               lg:text-[78px]
//               xl:text-[82px]
//               pt-[40px]
//               sm:pt-[60px]
//               md:pt-[70px]
//               lg:pt-[80px]
//               mb-[20px]
//               leading-tight
//             "
//           >
//             The World's Largest Podcast Advertising Agency
//           </h1>

//           {/* Paragraph Responsive */}
//           <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] max-w-[800px]">
//             The Category Leader in Podcast, Audio, and Creator Media. Billions
//             in measured outcomes. Decades of expertise. Trusted by the best.
//           </p>

//           {/* Button Responsive */}
//           <div className="btn mt-[30px] sm:mt-[35px] md:mt-[38px]">
//             <a
//               href="#"
//               className="
//                 bg-[#2EE5A8]
//                 px-[18px] py-[12px]
//                 sm:px-[22px] sm:py-[14px]
//                 md:px-[26px] md:py-[15px]
//                 rounded-[5px]
//                 font-[900]
//                 hover:bg-transparent
//                 hover:border-[2px]
//                 hover:text-white
//                 transition-all duration-700 ease-in-out
//               "
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
