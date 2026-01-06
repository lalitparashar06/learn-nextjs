"use client";
import React, { useEffect, useRef } from "react";

export default function VideoOverlay() {
  const overlayRef = useRef(null);
  const iframeRef = useRef(null);

  // Extract YouTube embed URL
  const getEmbedUrl = (url) => {
    if (!url) return "";
    const match = url.match(
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    );
    const videoId = match && match[2].length === 11 ? match[2] : null;

    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
      : "";
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const iframe = iframeRef.current;

    const openVideo = (e) => {
      const videoUrl = e.target.dataset.video;
      const embedUrl = getEmbedUrl(videoUrl);

      if (embedUrl) {
        iframe.src = embedUrl;
        overlay.classList.remove("hidden", "opacity-0");
        overlay.classList.add("opacity-100");
        document.body.classList.add("video-open");
      }
    };

    const closeVideo = () => {
      overlay.classList.add("opacity-0");
      setTimeout(() => {
        overlay.classList.add("hidden");
        iframe.src = "";
      }, 400);
      document.body.classList.remove("video-open");
    };

    // Listeners
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("play-btn")) openVideo(event);
    });

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) closeVideo();
    });

    document.getElementById("closeBtn").addEventListener("click", closeVideo);
  }, []);

  return (
    <section
      ref={overlayRef}
      id="video-Block"
      className="video-overlay fixed  backdrop-blur-sm opacity-0 hidden transition-opacity duration-400 z-[9999] flex items-center justify-center"
    >
      <div className="w-full h-full table text-center relative">
        <div className="table-cell align-middle">
          <div className="relative max-w-[1280px] mx-auto">
            <div className="relative px-5 max-w-[1320px] mx-auto">
              <iframe
                ref={iframeRef}
                width="560"
                height="315"
                src=""
                title="YouTube player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-[86%] h-[calc(88vh-40px)] max-h-[601px] border-2 border-[#00d4ff] rounded-[16px] shadow-[0_0_40px_rgba(0,212,255,0.5)] bg-black transition-all duration-300 mx-auto"
              ></iframe>
            </div>

            {/* Close Button */}
            <button
              id="closeBtn"
              className="absolute w-[48px] h-[48px] bg-[white] border-2 border-red-500 hover:border-black rounded-full flex items-center justify-center cursor-pointer right-[118px] -top-[60px] transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.6)] hover:bg-red-500  hover:scale-115 hover:rotate-90 hover:shadow-[0_0_30px_rgba(255,0,0,1)]"
            >
              <img
                src="/images/close-btn.svg"
                alt="Close"
                className="w-[24px] filter invert"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
