import React, { useState } from "react";

export default function Tabgridoxford() {
  const [activeTab, setActiveTab] = useState("Podcast");

  const tabs = [
    { name: "Podcast", icon: "🎙️" },
    { name: "Audio", icon: "📻" },
    { name: "Creator", icon: "⭐" },
  ];

  const tabContent = {
    Podcast: (
      <div className="flex  items-center w-full flex flex-wrap flex-row-reverse ">
        <div className="img-wrap w-[50%]">
          <img
            src="/images/services-podcast-card-fpo-img.png"
            alt="Podcast"
            className="w-full max-w-xs  rounded-lg"
          />
        </div>
        <div className="content w-[50%] bg-white">
          <div className="img-wrap h-[71px] w-[43px] m-auto">
            <img src="/images/Vector (2).png"></img>
          </div>
          <h2 className="text-xl mb-2 text-black">
            The world's largest podcast agency,
          </h2>
          <p className="mb-4 text-black">here from the very beginning</p>

          <a
            href="#"
            className="px-2 py-1 bg-teal-500 hover:bg-teal-600 rounded"
          >
            Learn More
          </a>
        </div>
      </div>
    ),
    Audio: (
      <div className=" flex  items-center w-full flex flex-wrap flex-row-reverse">
        <div className="img-wrap w-[50%]">
          <img
            src="/images/habu-template.png"
            alt="Audio"
            className="w-full max-w-xs  rounded-lg"
          />
        </div>
        <div className="content w-[50%]">
          <h2 className="text-xl mb-2">Explore audio solutions</h2>
          <p className="mb-4">Innovative audio services available.</p>
          <a
            href="#"
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded"
          >
            Learn More
          </a>
        </div>
      </div>
    ),
    Creator: (
      <div className=" flex  items-center w-full flex flex-wrap flex-row-reverse">
        <div className="img-wrap w-[50%]">
          <img
            src="/images/doctor-office.png"
            alt="Creator"
            className="w-full max-w-xs  rounded-lg"
          />
        </div>
        <div className="content w-[50%]">
          <h2 className="text-xl mb-2">Empower your creators</h2>
          <p className="mb-4">Tools for creator success.</p>
          <a
            href="#"
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded"
          >
            Learn More
          </a>
        </div>
      </div>
    ),
  };

  return (
    <section className="Tabgridoxford flex flex-col md:flex-row h-screen bg-[linear-gradient(rgb(24,25,25),rgba(24,25,25,0)_34.35%),linear-gradient(47deg,rgb(36,178,200),rgb(24,25,25)_80.55%)] relative">
      {/* Header Text and Button */}

      <div className="container mx-auto px-4 pt-40 md:pt-0 flex-1 flex flex-col md:flex-row">
        <div className="row relative  w-full flex flex-wrap ">
          <div className="col-two w-[50%]">
            <h1 className="text-4xl font-bold text-white">
              Podcast, Audio, and Creator Media—for Outcomes Only We Can Deliver
            </h1>
          </div>
          <div className="col-two w-[50%]">
            <p className="mt-2 text-gray-300">
              From host-read podcast ads to video integrations, programmatic to
              radio, our Podcast+ approach unites every channel into one
              outcome-driven strategy. Influence-first. Format-flexible. Always
              measurable.
            </p>
            <button className="mt-4 px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded text-white">
              <a href="#"> SEE OUR SERVICES </a>
            </button>
          </div>
        </div>

        <div className=" grid-box w-full md:w-1/4 p-[60px] bg-black bg-opacity-70 rounded-lg shadow-lg mt-[50px] flex flex-wrap w-full items-center">
          <ul className="space-y-4 w-[30%]">
            {tabs.map((tab) => (
              <li
                key={tab.name}
                className="flex items-center space-x-2  mb-12 pt-5 px-2.5 pb-0"
              >
                <span className="text-teal-400">{tab.icon}</span>
                <button
                  onClick={() => setActiveTab(tab.name)}
                  className={`hover:text-teal-200 ${
                    activeTab === tab.name ? "text-teal-200" : "text-white"
                  }`}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
          {/* Content Area */}
          <div className="grid-image  md:w-3/4 p-0 flex items-center justify-center w-[70%]">
            <div className="bg-white bg-opacity-10 p-0 rounded-lg text-center content">
              {tabContent[activeTab]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
