"use client";
import React, { useState } from "react";

export default function MenuCard() {
  const [active, setActive] = useState("home");
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenu = (menu) => {
    setActive(menu);
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    // 🔥 FIX 1: z-index increase
    <header className=" MenuCard py-0 bg-[rgba(0,242,141,0.6)] fixed w-full shadow-md z-[1]">
      <div className="container">
        <div className="wrapper w-full flex flex-wrap items-center">
          {/* LOGO */}
          <div className="w-[25%]">
            <div className="img-wrap w-[83px] h-[83px]">
              <img
                src="/images/magpie.png"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* NAV */}
          <nav className="bg-transparent px-6 py-4 w-[75%]">
            {/* 🔥 FIX 2: flex-wrap remove */}
            <ul className="flex justify-between  gap-x-6">
              {/* HOME */}
              <li>
                <a
                  href="http://localhost:3000/partnership"
                  onClick={() => setActive("home")}
                  className={`font-bold uppercase ${
                    active === "home" ? "text-black" : "text-white"
                  }`}
                >
                  Home
                </a>
              </li>

              {/* ABOUT */}
              <li>
                <a
                  href="/about"
                  onClick={() => setActive("about")}
                  className={`font-bold uppercase ${
                    active === "about" ? "text-black" : "text-white"
                  }`}
                >
                  About
                </a>
              </li>

              {/* SHORTCODES */}
              <li className="relative">
                <button
                  onClick={() => handleMenu("shortcodes")}
                  className={`font-bold uppercase ${
                    active === "shortcodes" ? "text-black" : "text-white"
                  }`}
                >
                  Shortcodes ▼
                </button>

                {openMenu === "shortcodes" && (
                  <div className="absolute left-0 top-full mt-2 min-w-[200px] bg-[#6cf0d3] rounded-lg shadow-lg z-[9999]">
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-[#a4c639] hover:text-white"
                    >
                      Menu 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-[#a4c639] hover:text-white"
                    >
                      Menu 2
                    </a>
                  </div>
                )}
              </li>

              {/* PAGES */}
              <li className="relative">
                <button
                  onClick={() => handleMenu("pages")}
                  className={`font-bold uppercase ${
                    active === "pages" ? "text-black" : "text-white"
                  }`}
                >
                  Pages ▼
                </button>

                {openMenu === "pages" && (
                  <div className="absolute left-0 top-full mt-2 min-w-[600px] flex flex-wrap bg-[#6cf0d3] rounded-lg shadow-lg z-[9999]">
                    <a
                      href="http://localhost:3000/mario"
                      className="block px-4 py-2 w-[20%] hover:bg-[#a4c639] hover:text-white"
                    >
                      Page 1
                    </a>
                    <a
                      href="http://localhost:3000/oxford"
                      className="block px-4 py-2 hover:bg-[#a4c639] hover:text-white"
                    >
                      Page 2
                    </a>
                    <a
                      href="/page3"
                      className="block px-4 py-2 hover:bg-[#a4c639] hover:text-white"
                    >
                      Page 3
                    </a>
                    <a
                      href="/page4"
                      className="block px-4 py-2 w-[20%] hover:bg-[#a4c639] hover:text-white"
                    >
                      Page 4
                    </a>{" "}
                    <a
                      href="/page5"
                      className="block px-4 py-2 w-[20%] hover:bg-[#a4c639] hover:text-white"
                    >
                      Page 5
                    </a>{" "}
                    <a
                      href="/page6"
                      className="block px-4 py-2 w-[20%] hover:bg-[#a4c639] hover:text-white"
                    >
                      Page 6
                    </a>{" "}
                    <a
                      href="/page7"
                      className="block px-4 py-2 w-[20%] hover:bg-[#a4c639] hover:text-white"
                    >
                      Page 7
                    </a>{" "}
                    <a
                      href="/page8"
                      className="block px-4 py-2 w-[20%] hover:bg-[#a4c639] hover:text-white"
                    >
                      Page 8
                    </a>{" "}
                    <a
                      href="/page9"
                      className="block px-4 py-2 w-[20%] hover:bg-[#a4c639] hover:text-white"
                    >
                      Page 9
                    </a>{" "}
                    <a
                      href="/page10"
                      className="block px-4 py-2 w-[20%] hover:bg-[#a4c639] hover:text-white"
                    >
                      Page 10
                    </a>{" "}
                    {/* SUB MENU */}
                    <div className="relative group">
                      <div className="px-4 py-2 hover:bg-[#a4c639] hover:text-white cursor-pointer">
                        More Pages →
                      </div>

                      <div className="absolute left-full top-0 min-w-[200px] bg-white rounded-lg shadow-lg hidden group-hover:block z-[9999]">
                        <a
                          href="/sub1"
                          className="block px-4 py-2 hover:bg-[#a4c639] hover:text-white"
                        >
                          Sub Page 1
                        </a>
                        <a
                          href="/sub2"
                          className="block px-4 py-2 hover:bg-[#a4c639] hover:text-white"
                        >
                          Sub Page 2
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* PORTFOLIO */}
              <li>
                <a
                  href="http://localhost:3000/Portfolio"
                  onClick={() => setActive("portfolio")}
                  className={`font-bold uppercase ${
                    active === "portfolio" ? "text-black" : "text-white"
                  }`}
                >
                  Portfolio
                </a>
              </li>

              {/* CONTACT */}
              <li className="mb-[15px]">
                <a
                  href="/contact"
                  onClick={() => setActive("contact")}
                  className={`font-bold uppercase ${
                    active === "contact" ? "text-black" : "text-white"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
