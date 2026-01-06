import styles from "@/styles/CardGrid.module.css";
import { wrap } from "framer-motion";
import React from "react";

export default function CardGrid() {
  return (
    <section
      className="CardGrid relative bg-[#2e2b2b] {`${styles.CardGrid}
      } relative `} "
    >
      <div className="column-wrappper  relative w-full flex flex-wrap ">
        <div className="card relative w-[50%] flex h-[415px] border-[2px] border-solid border-[#ffffff]">
          <div
            className={`content ${styles.content} relative w-[100%] h-[100%]`}
          >
            <div className="outer-wrap group relative h-full w-full flex items-center justify-center">
              <img
                src="/images/Strategy-Built-to-Scale-1.jpg"
                className="w-full h-full object-cover"
              />

              {/* Hover Content */}
              <div className="content-hover absolute inset-0 z-[2] px-[154px] py-[77px] opacity-0 group-hover:opacity-[1] bg-[rgba(0,0,0,0.5)] transition-opacity duration-300">
                <h5 className="text-white text-[40px]">
                  Strategy Built to Scale
                </h5>
                <p className="text-white text-[22px]">
                  We connect insights, audiences, creative, and media buying
                  under one roof, translating data into campaigns that convert
                  and scale.
                </p>
              </div>

              {/* Default (non-hover) Content */}
              <div className="content-outer absolute inset-0 z-[3] flex items-center justify-center text-center opacity-[1] group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-white">Strategy Built to Scale</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="card relative w-[50%] flex h-[415px] border-[2px] border-solid border-[#ffffff]">
          <div
            className={`content ${styles.content} relative w-[100%] h-[100%]`}
          >
            <div className="outer-wrap group relative h-full w-full flex items-center justify-center">
              <img
                src="/images/Strategy-Built-to-Scale-1.jpg"
                className="w-full h-full object-cover"
              />

              {/* Hover Content */}
              <div className="content-hover absolute inset-0 z-[2] px-[154px] py-[77px] opacity-0 group-hover:opacity-[1] bg-[rgba(0,0,0,0.5)] transition-opacity duration-300">
                <h5 className="text-white text-[40px]">
                  Strategy Built to Scale
                </h5>
                <p className="text-white text-[22px]">
                  We connect insights, audiences, creative, and media buying
                  under one roof, translating data into campaigns that convert
                  and scale.
                </p>
              </div>

              {/* Default (non-hover) Content */}
              <div className="content-outer absolute inset-0 z-[3] flex items-center justify-center text-center opacity-[1] group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-white">Strategy Built to Scale</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="card relative w-[50%] flex h-[415px] border-[2px] border-solid border-[#ffffff]">
          <div
            className={`content ${styles.content} relative w-[100%] h-[100%]`}
          >
            <div className="outer-wrap group relative h-full w-full flex items-center justify-center">
              <img
                src="/images/Strategy-Built-to-Scale-1.jpg"
                className="w-full h-full object-cover"
              />

              {/* Hover Content */}
              <div className="content-hover absolute inset-0 z-[2] px-[154px] py-[77px] opacity-0 group-hover:opacity-[1] bg-[rgba(0,0,0,0.5)] transition-opacity duration-300">
                <h5 className="text-white text-[40px]">
                  Strategy Built to Scale
                </h5>
                <p className="text-white text-[22px]">
                  We connect insights, audiences, creative, and media buying
                  under one roof, translating data into campaigns that convert
                  and scale.
                </p>
              </div>

              {/* Default (non-hover) Content */}
              <div className="content-outer absolute inset-0 z-[3] flex items-center justify-center text-center opacity-[1] group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-white">Strategy Built to Scale</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="card relative w-[50%] flex h-[415px] border-[2px] border-solid border-[#ffffff]">
          <div
            className={`content ${styles.content} relative w-[100%] h-[100%]`}
          >
            <div className="outer-wrap group relative h-full w-full flex items-center justify-center">
              <img
                src="/images/Strategy-Built-to-Scale-1.jpg"
                className="w-full h-full object-cover"
              />

              {/* Hover Content */}
              <div className="content-hover absolute inset-0 z-[2] px-[154px] py-[77px] opacity-0 group-hover:opacity-[1] bg-[rgba(0,0,0,0.5)] transition-opacity duration-300">
                <h5 className="text-white text-[40px]">
                  Strategy Built to Scale
                </h5>
                <p className="text-white text-[22px]">
                  We connect insights, audiences, creative, and media buying
                  under one roof, translating data into campaigns that convert
                  and scale.
                </p>
              </div>

              {/* Default (non-hover) Content */}
              <div className="content-outer absolute inset-0 z-[3] flex items-center justify-center text-center opacity-[1] group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-white">Strategy Built to Scale</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
