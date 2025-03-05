import styles from "@/styles/ResourceFilter.module.css";
import Image from "next/image";

export default function ResourceFilter() {
  return (
    <section className="ResourceFilter bg-black overflow-visible">
      <div className="container">
        <div className="introWrap text-center">
          <h3 className="text-black pb-[40px]">Resource</h3>
        </div>
        <div className="outerWrap flex pb-[17px]">
          <h4 className="mr-[263px] text-white">LATEST</h4>
          <div className={`navWrapper ${styles.navWrapper} relative`}>
            <div className={`tableTitle ${styles.tableTitle}`}>
              <p>Year</p>
            </div>
            <ul class={`list ${styles.list}`} id="year">
              <li class="all">All</li>
              <li>
                <span>2020</span>
              </li>
              <li>
                <span>2021</span>
              </li>
              <li>
                <span>2022</span>
              </li>
              <li>
                <span>2023</span>
              </li>
              <li>
                <span>2024</span>
              </li>
              <li>
                <span>2025</span>
              </li>
              <li>
                <span>2026</span>
              </li>
              <li>
                <span>2027</span>
              </li>
            </ul>
          </div>
          <div className={`navWrapper ${styles.navWrapper}`}>
            <div className={`tableTitle ${styles.tableTitle}`}>
              <p>Topic</p>
            </div>
            <ul class={`list ${styles.list}`} id="glossary_block">
              <li class="all">All</li>
              <li>
                <span>Topic-one</span>
              </li>
              <li>
                <span>Topic-Two</span>
              </li>
              <li>
                <span>Topic-Three</span>
              </li>
              <li>
                <span>Topic-Four</span>
              </li>
              <li>
                <span>Topic-Five</span>
              </li>
              <li>
                <span>Topic-Six</span>
              </li>
            </ul>
          </div>
          <div
            className={`inputWrapper ${styles.inputWrapper} relative max-w-[373px] w-full h-[43px] bg-transparent`}
          >
            <input
              className="search w-full outline-none pl-[20px] pr-[60px] h-[46px] bg-transparent text-white"
              type="text"
              placeholder="Search"
              name="search"
              aria-label="search"
            />
            <div className="search-btn absolute right-[5px] w-[18px] h-[18px] bottom-[11px] overflow-hidden">
              <Image
                src="/images/search-white.svg"
                alt="search icon"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
