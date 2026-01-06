// import React from "react";
// export default function SliderLogoGrid() {
//   return (
//     <section class="sliderLogoGrid relative bg-[#16a4b1] py-10">
//       <div class="container">
//         <h2 className="text-[white] text-center">Trusted By The Best</h2>
//       </div>
//       <div className="outer w-full flex flex-wrap items-center">
//         <div className="item mt-[50px] w-[200px] h-[auto] flex flex-wrap  px-[10px] py-[10px]">
//           <div className="img-wrap">
//             <img src="/images/Boll-Branch.svg" />
//           </div>
//         </div>
//         <div className="item mt-[50px] w-[200px] h-[auto] flex flex-wrap  px-[10px] py-[10px]">
//           <div className="img-wrap">
//             <img src="/images/Boll-Branch.svg" />
//           </div>
//         </div>
//         <div className="item mt-[50px] w-[200px] h-[auto] flex flex-wrap  px-[10px] py-[10px]">
//           <div className="img-wrap">
//             <img src="/images/Boll-Branch.svg" />
//           </div>
//         </div>
//         <div className="item mt-[50px] w-[200px] h-[auto] flex flex-wrap  px-[10px] py-[10px]">
//           <div className="img-wrap">
//             <img src="/images/Boll-Branch.svg" />
//           </div>
//         </div>
//         <div className="item mt-[50px] w-[200px] h-[auto] flex flex-wrap  px-[10px] py-[10px]">
//           <div className="img-wrap">
//             <img src="/images/Boll-Branch.svg" />
//           </div>
//         </div>
//         <div className="item mt-[50px] w-[200px] h-[auto] flex flex-wrap  px-[10px] py-[10px]">
//           <div className="img-wrap">
//             <img src="/images/Boll-Branch.svg" />
//           </div>
//         </div>
//         <div className="item mt-[50px] w-[200px] h-[auto] flex flex-wrap  px-[10px] py-[10px]">
//           <div className="img-wrap">
//             <img src="/images/Boll-Branch.svg" />
//           </div>
//         </div>
//         <div className="item mt-[50px] w-[200px] h-[auto] flex flex-wrap  px-[10px] py-[10px]">
//           <div className="img-wrap">
//             <img src="/images/Boll-Branch.svg" />
//           </div>
//         </div>
//         <div className="item mt-[50px] w-[200px] h-[auto] flex flex-wrap  px-[10px] py-[10px]">
//           <div className="img-wrap">
//             <img src="/images/Boll-Branch.svg" />
//           </div>
//         </div>
//         <div className="item mt-[50px] w-[200px] h-[auto] flex flex-wrap  px-[10px] py-[10px]">
//           <div className="img-wrap">
//             <img src="/images/Boll-Branch.svg" />
//           </div>
//         </div>
//         <div className="item mt-[50px] w-[200px] h-[auto] flex flex-wrap  px-[10px] py-[10px]">
//           <div className="img-wrap">
//             <img src="/images/Boll-Branch.svg" />
//           </div>
//         </div>

//         <div className="item mt-[50px] w-[200px] h-[auto] flex flex-wrap  px-[10px] py-[10px]">
//           <div className="img-wrap">
//             <img src="/images/Boll-Branch.svg" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

const logos = [
  "/images/Boll-Branch.svg",
  "/images/Boll-Branch.svg",
  "/images/Boll-Branch.svg",
  "/images/Boll-Branch.svg",
  "/images/Boll-Branch.svg",
  "/images/Boll-Branch.svg",
  "/images/Boll-Branch.svg",
  "/images/Boll-Branch.svg",
  "/images/Boll-Branch.svg",
  "/images/Boll-Branch.svg",
  "/images/Boll-Branch.svg",
  "/images/Boll-Branch.svg",
];

function LogoItem({ src }) {
  return (
    <div className="flex-shrink-0 w-48 md:w-52 px-2 py-4">
      <div className="flex items-center justify-center h-20">
        <img
          src={src}
          alt="Logo"
          className="max-w-full max-h-full object-contain brightness-0 invert"
        />
      </div>
    </div>
  );
}

export default function SliderLogoGridSecond() {
  return (
    <section className="relative bg-[#000000] pt-0 pb-0 overflow-hidden">
      {/* Right to Left Auto Slider */}
      <div className="overflow-hidden">
        <div className="flex animate-slide-right-to-left gap-x-8">
          {/* First set */}
          {logos.map((src, i) => (
            <LogoItem key={`a-${i}`} src={src} />
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((src, i) => (
            <LogoItem key={`b-${i}`} src={src} />
          ))}
        </div>
      </div>

      {/* Right to Left Animation */}
      <style jsx>{`
        @keyframes slideRightToLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-slide-right-to-left {
          display: flex;
          width: max-content;
          animation: slideRightToLeft 30s linear infinite;
        }

        .animate-slide-right-to-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
