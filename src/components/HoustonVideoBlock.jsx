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

import React, { useEffect, useState } from "react";

export default function HoustonHeroBanner() {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const links = document.querySelectorAll(".play-video");

    const handleClick = (e) => {
      e.preventDefault(); // new tab open band
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
      {/* 🔥 YOUR ORIGINAL CODE SAME */}
      <section className="HoustonHeroBanner  relative bg-[#013B5B] pt-[20px] pb-[60px] ">
        <div className="container">
          <div className="wrapper pt-[28px]">
            <a
              className="play-video w-full  cursor-pointer"
              data-videourl="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
              href="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
              target="_blank"
            >
              <img
                src="/images/building-img.webp"
                className="rounded-[30px] h-[450px] w-full object-cover"
              />
            </a>

            <a
              className="play-video absolute w-[83px] h-[91px] top-14 right-16 cursor-pointer"
              data-videourl="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
              href="https://www.youtube.com/embed/vNtokpSKcJE?si=SLIav7h9LYgWgynx"
              target="_blank"
            >
              <img
                className=" absolute bottom-[83px] w-full h-full object-cover"
                src="/images/play-btn-green.svg"
              />
            </a>
          </div>
        </div>
      </section>

      {/* 🎥 MODAL */}
      {videoUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-70  flex items-center justify-center z-50">
          <div className="relative w-[90%]  md:w-[700px]">
            <button
              onClick={() => setVideoUrl("")}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✖
            </button>

            <iframe
              width="100%"
              height="800"
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
