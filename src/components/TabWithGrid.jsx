"use client";
import { useState } from "react";

export default function TabWithGrid() {
  const [activeTab, setActiveTab] = useState("1");
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="tab-with-grid bg-[#013b5c] py-10">
      <div className="container mx-auto">
        <div className=" content-outer w-full flex items-center flex-wrap">
          {/* LEFT TABS */}
          <div className="tabs-container  w-1/4">
            <ul className="space-y-6">
              {[
                { id: "1", label: "Rental Terms and Conditions" },
                { id: "2", label: "Sales-Related Inquiries" },
                { id: "3", label: "Repairs and Support" },
                { id: "4", label: "Equipment Return" },
              ].map((tab) => (
                <li key={tab.id}>
                  <h6
                    onClick={() => {
                      setActiveTab(tab.id);
                      setOpenAccordion(null);
                    }}
                    className={`cursor-pointer pb-2 relative ${
                      activeTab === tab.id
                        ? "text-black font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#b3c205]"
                        : "text-black"
                    }`}
                  >
                    {tab.label}
                  </h6>
                </li>
              ))}
            </ul>
          </div>
          {/* RIGHT ACCORDION */}
          <div className="accordion-outer w-[75%] pl-[30px] md:w-3/4 md:pl-8 mt-6 md:mt-0">
            {/* TAB 1 */}
            {activeTab === "1" && (
              <div className="bg-[#e8ffed] p-6 shadow-lg">
                {[
                  "What is the warranty policy on your equipment?",
                  "When is my rental term over?",
                  "When does my rental start?",
                ].map((title, i) => (
                  <div key={i} className="border-b mb-4">
                    <div
                      onClick={() => toggleAccordion(`t1-${i}`)}
                      className="flex justify-between items-center cursor-pointer py-4"
                    >
                      <h6>{title}</h6>
                      <span
                        className={`transition-transform ${
                          openAccordion === `t1-${i}` ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </div>

                    {openAccordion === `t1-${i}` && (
                      <div className="pb-4">
                        <p className="text-sm">Sample answer content here.</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* TAB 2 */}
            {activeTab === "2" && (
              <div className="bg-[#e8ffed] p-6 shadow-lg">
                {["Sales contact number?", "Do you sell parts?"].map(
                  (title, i) => (
                    <div key={i} className="border-b mb-4">
                      <div
                        onClick={() => toggleAccordion(`t2-${i}`)}
                        className="flex justify-between items-center cursor-pointer py-4"
                      >
                        <h6>{title}</h6>
                        <span
                          className={`transition-transform ${
                            openAccordion === `t2-${i}` ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </div>

                      {openAccordion === `t2-${i}` && (
                        <div className="pb-4">
                          <p className="text-sm">Sample answer content here.</p>
                        </div>
                      )}
                    </div>
                  ),
                )}
              </div>
            )}

            {/* TAB 3 */}
            {activeTab === "3" && (
              <div className="bg-[#e8ffed] p-6 shadow-lg">
                {["Support timing?", "Repair process?"].map((title, i) => (
                  <div key={i} className="border-b mb-4">
                    <div
                      onClick={() => toggleAccordion(`t3-${i}`)}
                      className="flex justify-between items-center cursor-pointer py-4"
                    >
                      <h6>{title}</h6>
                      <span
                        className={`transition-transform ${
                          openAccordion === `t3-${i}` ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </div>

                    {openAccordion === `t3-${i}` && (
                      <div className="pb-4">
                        <p className="text-sm">Sample answer content here.</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* TAB 4 */}
            {activeTab === "4" && (
              <div className="bg-[#e8ffed] p-6 shadow-lg">
                {["Return policy?", "Invoice help?"].map((title, i) => (
                  <div key={i} className="border-b mb-4">
                    <div
                      onClick={() => toggleAccordion(`t4-${i}`)}
                      className="flex justify-between items-center cursor-pointer py-4"
                    >
                      <h6>{title}</h6>
                      <span
                        className={`transition-transform ${
                          openAccordion === `t4-${i}` ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </div>

                    {openAccordion === `t4-${i}` && (
                      <div className="pb-4">
                        <p className="text-sm">Sample answer content here.</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
