// import React from "react";
// export default function HoustonHeroBanner() {
//   return (
//     <section className="HoustonHeroBanner  relative bg-[#013B5B] pt-[20px] pb-[60px] ">
//       <div className="container">
//         <div className="wrapper pt-[28px]">
//           <a
//             aria-label=""
//             className="play-video  w-full cursor-pointer VideoBlock_playvideo__Anib0"
//             data-video-title=""
//             data-videourl="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
//             href="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
//             target="_blank"
//           >
//             <img
//               src="/images/building-img.webp"
//               className="rounded-[30px] h-[450px] w-full object-cover"
//             ></img>
//           </a>
//           <a
//             aria-label=""
//             className="play-video absolute w-[83px] h-[91px] top-[0]  laptop-portrait:w-[68px] laptopDown:w-[68px] lg:w-[50px] laptop-portrait:h-[75px] laptopDown:h-[75px] lg:h-[55px] top-14 ipad:top-[10px] laptop-portrait:top-[30px] right-16 laptop-portrait:right-16 ipad:right-16 xs:right-12 cursor-pointer  VideoBlock_playvideo__Anib0"
//             data-video-title=""
//             data-videourl="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
//             href="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
//             target="_blank"
//           >
//             <img
//               className="videoblockicon relative bottom-[10px] right-[20px] w-full h-full object-cover"
//               src="/images/play-btn-green.svg"
//             ></img>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

////////////////aaaaaäaaaaa////////////////

// import React, { useEffect, useState } from "react";

// export default function HoustonHeroBanner() {
//   const [videoUrl, setVideoUrl] = useState("");

//   useEffect(() => {
//     const links = document.querySelectorAll(".play-video");

//     const handleClick = (e) => {
//       e.preventDefault(); // new tab open band
//       const url = e.currentTarget.getAttribute("data-videourl");
//       setVideoUrl(url + "&autoplay=1");
//     };

//     links.forEach((link) => {
//       link.addEventListener("click", handleClick);
//     });

//     return () => {
//       links.forEach((link) => {
//         link.removeEventListener("click", handleClick);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* 🔥 YOUR ORIGINAL CODE SAME */}
//       <section className="HoustonHeroBanner  relative bg-[#013B5B]  pb-[60px] ">
//         <div className="container">
//           <div className="wrapper pt-[28px]">
//             <a
//               className="play-video w-full  cursor-pointer"
//               data-videourl="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
//               href="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
//               target="_blank"
//             >
//               <img
//                 src="/images/building-img.webp"
//                 className="rounded-[30px] h-[450px] w-full object-cover"
//               />
//             </a>

//             <a
//               className="play-video absolute w-[83px] h-[91px] top-14 right-16 cursor-pointer"
//               data-videourl="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
//               href="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
//               target="_blank"
//             >
//               <img
//                 className=" absolute bottom-[83px] w-full h-full object-cover"
//                 src="/images/play-btn-green.svg"
//               />
//               <div className="text absolute w-[211px] h-[211px] laptop-portrait:w-[179px] laptop-portrait:h-[179px] laptopDown:w-[179px] lg:w-[145px] laptopDown:h-[179px] lg:h-[145px] top-[-50px] laptop-portrait:top-[-40px] tabletlarge:top-[-25px] lg:top-[-20px] right-[-40px] laptop-portrait:right-[-30px] tabletlarge:right-[-28px] lg:right-[-25px] text-white opacity-100 transition-opacity duration-1000 ease-in-out">
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[0deg] absolute left-[56%] bottom-[125%]  origin-[0_100px]">
//                   L
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[14.5deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   e
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[29deg] absolute  left-[56%] bottom-[125%] origin-[0_100px]">
//                   a
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[43.5deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   r
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[58deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   n
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[72.5deg] absolute left-[56%] bottom-[125%]  origin-[0_100px]">
//                   {" "}
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[87deg] absolute left-[56%] bottom-[125%]  origin-[0_100px]">
//                   m
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[101.5deg] absolute left-[56%] bottom-[125%]  origin-[0_100px]">
//                   o
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[116deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   r
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[130.5deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   e
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[145deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   {" "}
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[159.5deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   a
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[174deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   b
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[188.5deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   o
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[203deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   u
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[217.5deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   t
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[232deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   {" "}
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[246.5deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   H
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[261deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   o
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[275.5deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   u
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[290deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   s
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[304.5deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   t
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[319deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   o
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[333.5deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   n
//                 </span>
//                 <span className="text-white text-lg font-medium lg:text-base rotate-[348deg] absolute left-[56%] bottom-[125%] origin-[0_100px]">
//                   {" "}
//                 </span>
//               </div>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* 🎥 MODAL */}
//       {videoUrl && (
//         <div className="fixed inset-0 bg-black bg-opacity-70  flex items-center justify-center z-50">
//           <div className="relative w-[90%]  md:w-[700px]">
//             <button
//               onClick={() => setVideoUrl("")}
//               className="absolute -top-10 right-0 text-white text-2xl"
//             >
//               ✖
//             </button>

//             <iframe
//               width="100%"
//               height="800"
//               src={videoUrl}
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//               className="rounded-[20px]"
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

/////////////////hjjhjjhkuugugugigiluiug////////////////////

import React, { useEffect, useState } from "react";

export default function HoustonHeroBanner() {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const links = document.querySelectorAll(".play-video");

    const handleClick = (e) => {
      e.preventDefault();
      const url = e.currentTarget.getAttribute("data-videourl");
      setVideoUrl(url + "&autoplay=1");
    };

    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <>
      {/* ✅ INLINE CSS (kuch alag se add nahi karna padega) */}
      <style>
        {`
          @keyframes VideoBlock_rotateText__tLmCe {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .rotate-text {
            animation: VideoBlock_rotateText__tLmCe 30s linear infinite;
          }
        `}
      </style>

      <section className="HoustonHeroBanner relative bg-[#013B5B] pb-[60px]">
        <div className="container">
          <div className="wrapper pt-[28px]">
            <a
              className="play-video w-full cursor-pointer"
              data-videourl="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
              href="#"
            >
              <img
                src="/images/building-img.webp"
                className="rounded-[30px] h-[450px] w-full object-cover"
              />
            </a>

            <a
              className="play-video absolute w-[83px] h-[91px] top-14 right-16 cursor-pointer"
              data-videourl="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
              href="#"
            >
              <img
                className="absolute bottom-[83px] w-full h-full object-cover"
                src="/images/play-btn-green.svg"
              />

              {/* 🔥 ROTATING TEXT */}
              {/* <div className="rotate-text absolute w-[211px] h-[211px] laptop-portrait:w-[179px] laptop-portrait:h-[179px] laptopDown:w-[179px] lg:w-[145px] laptopDown:h-[179px] lg:h-[145px] top-[-50px] laptop-portrait:top-[-40px] tabletlarge:top-[-25px] lg:top-[-20px] right-[-40px] laptop-portrait:right-[-30px] tabletlarge:right-[-28px] lg:right-[-25px] text-white">
                {"Learn more about Houston ".split("").map((char, i) => (
                  <span
                    key={i}
                    className="text-white text-lg font-medium lg:text-base absolute left-[56%] bottom-[125%]"
                    style={{
                      transform: `rotate(${i * 14.5}deg)`,
                      transformOrigin: "0 100px",
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div> */}
              <div className="rotate-text absolute w-[211px]  top-[-37px] right-[-60px] flex items-center justify-center text-white">
                {"Learn more about Houston ".split("").map((char, i) => (
                  <span
                    key={i}
                    className="absolute text-white text-lg font-medium lg:text-base"
                    style={{
                      transform: `rotate(${i * 14.5}deg) translateY(-100px)`,
                      transformOrigin: "center",
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 🎥 MODAL */}
      {videoUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[700px]">
            <button
              onClick={() => setVideoUrl("")}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✖
            </button>

            <iframe
              width="100%"
              height="900"
              src={videoUrl}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-[20px]"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
