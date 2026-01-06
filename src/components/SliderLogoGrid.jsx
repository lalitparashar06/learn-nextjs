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

export default function SliderLogoGrid() {
  return (
    <section className="relative bg-[#000000] pt-10 pb-0 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-center text-2xl md:text-3xl font-semibold mb-8">
          Trusted By The Best
        </h2>
      </div>

      {/* Left to Right Auto Slider */}
      <div className="overflow-hidden">
        <div className="flex animate-slide-left-to-right gap-x-8">
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

      {/* Left to Right Animation */}
      <style jsx>{`
        @keyframes slideLeftToRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-slide-left-to-right {
          display: flex;
          width: max-content;
          animation: slideLeftToRight 30s linear infinite;
        }

        .animate-slide-left-to-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
