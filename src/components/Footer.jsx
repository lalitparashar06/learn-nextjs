import styles from "@/styles/Footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <section className="Footer bg-black">
      <div className="container">
        <div className="columWrap flex flex-wrap pb-[248px] ipad:pb-[70px] md:block md:pb-[70px]">
          <div
            className={`itemSmall ${styles.itemSmall} w-[34%] tabletlarge:w-[50%] tablet:w-[50%] md:w-[100%]`}
          >
            <div className="logoWrap  max-w-[111px] max-h-[35px] overflow-hidden">
              <a href="" data-cursor-expand="">
                <Image
                  width={100}
                  height={100}
                  src="/images/Clear Logo.svg"
                  alt="Clear logo"
                  style={{ objectFit: "contain" }}
                />
              </a>
            </div>
            <div className="locationWrap flex items-center mt-[40px]">
              <div className="logoIcon w-[20%] max-w-[24px] max-h-[24px] mr-[20px] overflow-hidden">
                <a
                  href="https://www.google.com/maps/place/1570+The+Alameda+%23330,+San+Jose,+CA+95126,+USA/@37.335805,-121.915187,17z/data=!3m1!4b1!4m6!3m5!1s0x808fcb68c56d2719:0xd3ee03e8b8d94a2c!8m2!3d37.335805!4d-121.915187!16s%2Fg%2F11qp4cqtsx?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                  data-cursor-expand=""
                >
                  <Image
                    width={100}
                    height={100}
                    src="/images/map-pin.svg"
                    alt="Clear logo"
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
              <div className="locationTitle w-[80%]">
                <p className="text-yellow-500 font-bold">
                  1570 The Alameda #330, San Jose, CA 95126
                </p>
              </div>
            </div>
            <div className="contactWrap flex items-center mt-[30px]">
              <div className="logoIcon w-[20%] max-w-[24px] max-h-[24px] mr-[20px] overflow-hidden">
                <a href="tel:408.246.0000" data-cursor-expand="">
                  <Image
                    width={100}
                    height={100}
                    src="/images/smartphone.svg"
                    alt="smartphone logo"
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
              <div className="locationTitle w-[80%]">
                <p>
                  <a class="contact-link text-white" href="tel:408.246.0000">
                    408.246.0000
                  </a>
                </p>
              </div>
            </div>
            <div className="socialIcon mt-[30px] w-full">
              <div className="socialWrpa">
                <ul className="flex">
                  <a
                    className="iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden"
                    href=""
                    data-cursor-expand=""
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 0C5.60753 0 0 5.60753 0 12.5C0 19.392 5.60753 25 12.5 25C19.392 25 25 19.392 25 12.5C25 5.60753 19.393 0 12.5 0ZM15.6086 12.9401H13.575V20.1885H10.5615C10.5615 20.1885 10.5615 16.2279 10.5615 12.9401H9.12904V10.3782H10.5615V8.7212C10.5615 7.53444 11.1254 5.68003 13.6027 5.68003L15.8357 5.68859V8.1754C15.8357 8.1754 14.4788 8.1754 14.2149 8.1754C13.9511 8.1754 13.576 8.30732 13.576 8.87326V10.3787H15.872L15.6086 12.9401Z"
                        fill="#989898"
                      />
                    </svg>
                  </a>
                  <a
                    className="iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden"
                    href=""
                    data-cursor-expand=""
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 0C5.60753 0 0 5.60753 0 12.5C0 19.392 5.60753 25 12.5 25C19.392 25 25 19.392 25 12.5C25 5.60753 19.393 0 12.5 0ZM15.6086 12.9401H13.575V20.1885H10.5615C10.5615 20.1885 10.5615 16.2279 10.5615 12.9401H9.12904V10.3782H10.5615V8.7212C10.5615 7.53444 11.1254 5.68003 13.6027 5.68003L15.8357 5.68859V8.1754C15.8357 8.1754 14.4788 8.1754 14.2149 8.1754C13.9511 8.1754 13.576 8.30732 13.576 8.87326V10.3787H15.872L15.6086 12.9401Z"
                        fill="#989898"
                      />
                    </svg>
                  </a>
                  <a
                    className="iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden"
                    href=""
                    data-cursor-expand=""
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 0C5.60753 0 0 5.60753 0 12.5C0 19.392 5.60753 25 12.5 25C19.392 25 25 19.392 25 12.5C25 5.60753 19.393 0 12.5 0ZM15.6086 12.9401H13.575V20.1885H10.5615C10.5615 20.1885 10.5615 16.2279 10.5615 12.9401H9.12904V10.3782H10.5615V8.7212C10.5615 7.53444 11.1254 5.68003 13.6027 5.68003L15.8357 5.68859V8.1754C15.8357 8.1754 14.4788 8.1754 14.2149 8.1754C13.9511 8.1754 13.576 8.30732 13.576 8.87326V10.3787H15.872L15.6086 12.9401Z"
                        fill="#989898"
                      />
                    </svg>
                  </a>
                  <a
                    className="iconWrap max-w-[24px] max-h-[24px] mr-[27px] overflow-hidden"
                    href=""
                    data-cursor-expand=""
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 0C5.60753 0 0 5.60753 0 12.5C0 19.392 5.60753 25 12.5 25C19.392 25 25 19.392 25 12.5C25 5.60753 19.393 0 12.5 0ZM15.6086 12.9401H13.575V20.1885H10.5615C10.5615 20.1885 10.5615 16.2279 10.5615 12.9401H9.12904V10.3782H10.5615V8.7212C10.5615 7.53444 11.1254 5.68003 13.6027 5.68003L15.8357 5.68859V8.1754C15.8357 8.1754 14.4788 8.1754 14.2149 8.1754C13.9511 8.1754 13.576 8.30732 13.576 8.87326V10.3787H15.872L15.6086 12.9401Z"
                        fill="#989898"
                      />
                    </svg>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`itemMedium ${styles.itemMedium} w-[17%] pl-[50px] tabletlarge:w-[50%] tablet:w-[50%] md:w-[100%] md:pl-[0] md:pt-[40px]`}
          >
            <div className="listItem">
              <ul>
                <li>
                  <a href="/">Work</a>
                </li>
                <li>
                  <a href="/">Approach</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="itemLarge w-[49%] ipad:w-[100%] ipad:pt-[50px] md:w-[100%] md:pt-[40px] ">
            <div className="innerWrap flex flex-wrap">
              <div className="imgItem w-[30%] md:w-[100%]">
                <div className="imgWrap h-full max-w-[215px] max-h-[253px] overflow-hidden">
                  <Image
                    width={100}
                    height={100}
                    src="/images/CTA-Image-1350.jpg"
                    alt="Clear logo"
                  />
                </div>
              </div>
              <div className="contentItem w-[70%] pl-[40px] md:w-[100%] md:pl-[0] md:pt-[40px]">
                <div className="innerContent">
                  <h4 className="text-white">
                    2023 Fortune 500 B2B Homepage Rankings Report
                  </h4>
                  <p className="text-white mt-[15px]">
                    Sed sollicitudin odio ac ornare consequat. Ut massa justo,
                    hendrerit vel nunc non, tempus blandit enim. Vivamus gravida
                    velit lorem ipsum dolor sit amet.
                  </p>
                  <div className="btnWrap mt-[20px]">
                    <a
                      href="#"
                      className="link-white text-white"
                      data-cursor-expand=""
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="outerWrap border-b-[2px] border-white pb-[51px]">
          <div className="innerContent">
            <h4 className="text-white ">
              Confidently navigating <span class="text-pink">change</span>.
            </h4>
          </div>
        </div>
        <div className="wrapper flex pt-[48px] md:block">
          <div className="companyLogo w-[8%] md:w-[100%]">
            <div className="logoWrap flex flex-wrap max-[115px] h-[75px] overflow-hidden">
              <a href="" data-cursor-expand="">
                <svg
                  width="115"
                  height="75"
                  viewBox="0 0 115 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_361_101)">
                    <path
                      d="M15.6324 58.0872L15.5838 48.5242L11.2093 56.3085H9.07096L4.7208 48.7817V58.0872H0.273926V40.0439H4.2352L10.2133 50.4575L16.0456 40.0439H20.0069L20.0555 58.0872H15.6329H15.6324Z"
                      fill="white"
                    />
                    <path
                      d="M31.4203 51.6173V58.0872H26.6089V51.5402L20.1204 40.0439H25.1992L29.2334 47.2099L33.2676 40.0439H37.9332L31.4203 51.6173Z"
                      fill="white"
                    />
                    <path
                      d="M45.362 53.2925H42.7375V58.0872H37.9255V40.0439H45.7017C50.3436 40.0439 53.2597 42.5956 53.2597 46.7202C53.2597 49.3753 52.0444 51.3344 49.9304 52.4166L53.1706 58.0872H48.0189L45.3615 53.2925H45.362ZM45.4106 44.0646H42.7375V49.3489H45.4106C47.4031 49.3489 48.3996 48.3696 48.3996 46.7197C48.3996 45.0698 47.4031 44.0646 45.4106 44.0646Z"
                      fill="white"
                    />
                    <path
                      d="M55.193 40.0439H60.005V58.0872H55.193V40.0439Z"
                      fill="white"
                    />
                    <path
                      d="M62.1428 49.0652C62.1428 43.6521 66.1522 39.6826 71.5961 39.6826C77.04 39.6826 81.0489 43.6521 81.0489 49.0652C81.0489 54.4782 77.0395 58.4477 71.5961 58.4477C66.1527 58.4477 62.1428 54.4782 62.1428 49.0652ZM76.1888 49.0652C76.1888 45.9463 74.172 43.9101 71.5961 43.9101C69.0202 43.9101 67.0029 45.9463 67.0029 49.0652C67.0029 52.1841 69.0197 54.2202 71.5961 54.2202C74.1725 54.2202 76.1888 52.1841 76.1888 49.0652Z"
                      fill="white"
                    />
                    <path
                      d="M82.965 50.0395V40.0386H87.7764V49.8849C87.7764 52.978 88.9917 54.2153 91.0085 54.2153C93.0254 54.2153 94.2163 52.978 94.2163 49.8849V40.0386H98.9549V50.0395C98.9549 55.4268 95.9901 58.4427 90.9599 58.4427C85.9297 58.4427 82.965 55.4268 82.965 50.0395Z"
                      fill="white"
                    />
                    <path
                      d="M100.298 56.4578L101.878 52.6947C103.385 53.7515 105.522 54.4734 107.491 54.4734C109.46 54.4734 110.261 53.8808 110.261 53.0039C110.261 50.1425 100.589 52.2309 100.589 45.5288C100.589 42.3065 103.068 39.6777 108.123 39.6777C110.334 39.6777 112.619 40.2191 114.295 41.2501L112.813 45.0391C111.185 44.1115 109.581 43.6472 108.099 43.6472C106.082 43.6472 105.353 44.369 105.353 45.2713C105.353 48.0293 115 45.9672 115 52.6176C115 55.7624 112.522 58.4433 107.467 58.4433C104.673 58.4433 101.902 57.644 100.298 56.4583L100.298 56.4578Z"
                      fill="white"
                    />
                    <path
                      d="M14.8004 69.8345V74.8563H13.6611V63.1826H17.6938C20.4337 63.1826 22.0961 63.9303 22.0961 66.4318C22.0961 68.2662 21.2034 69.1705 19.6332 69.721L22.2652 74.8563H21.0186L18.5561 69.8274M20.9573 66.4323C20.9573 64.5644 19.818 64.2506 17.6634 64.2506H14.8004V68.7843H17.6634C19.8185 68.7843 20.9573 68.2667 20.9573 66.4323Z"
                      fill="white"
                    />
                    <path
                      d="M23.1523 69.0202C23.1523 65.6179 25.671 63.0835 29.0935 63.0835C32.516 63.0835 35.0184 65.6017 35.0184 69.0202C35.0184 72.4387 32.4836 74.9569 29.0935 74.9569C25.7034 74.9569 23.1523 72.4219 23.1523 69.0202ZM33.8239 69.0202C33.8239 66.2353 31.8061 64.184 29.0935 64.184C26.3809 64.184 24.3306 66.2353 24.3306 69.0202C24.3306 71.805 26.3647 73.8564 29.0935 73.8564C31.8223 73.8564 33.8239 71.805 33.8239 69.0202Z"
                      fill="white"
                    />
                    <path
                      d="M55.9246 66.4318C55.9246 68.9166 54.2622 69.8513 51.5223 69.8513H48.6285V74.8563H47.4891V63.1826H51.5218C54.2617 63.1826 55.9241 63.9303 55.9241 66.4318H55.9246ZM54.7853 66.4318C54.7853 64.5639 53.646 64.2501 51.4914 64.2501H48.6285V68.767H51.4914C53.6465 68.767 54.7853 68.2662 54.7853 66.4318Z"
                      fill="white"
                    />
                    <path
                      d="M36.5705 69.5848V63.1641H37.7559V69.4855C37.7559 71.4715 38.2192 73.939 41.1597 73.8777C42.4387 73.8513 44.4966 73.4965 44.3614 69.4855V63.1641H45.4997V69.5848C45.4485 72.9247 44.3578 74.9797 41.1283 74.9797C37.8987 74.9797 36.5042 72.9253 36.5705 69.5848Z"
                      fill="white"
                    />
                    <path
                      d="M11.8559 69.3578C11.8402 69.9346 11.7997 70.2438 11.6888 70.6757C11.4812 71.4842 11.1207 72.2182 10.5946 72.8675C9.90338 73.7211 9.03143 74.3162 7.9949 74.671C7.51487 74.8353 7.02066 74.9351 6.5148 74.9762C5.58209 75.0512 4.67114 74.9493 3.78855 74.631C2.01274 73.9903 0.698218 72.5507 0.215149 70.7234C0.0414662 70.0674 -0.0238546 69.4014 0.00804622 68.7247C0.0500743 67.8346 0.25667 66.9856 0.672394 66.1958C1.4446 64.7289 2.64164 63.7835 4.2301 63.3299C4.89748 63.1393 5.58006 63.0749 6.27226 63.1078C7.23333 63.154 8.13972 63.3963 8.9813 63.8692C9.56412 64.1966 10.072 64.6158 10.5054 65.1248C10.5115 65.1319 10.5166 65.139 10.5242 65.1486C10.228 65.4025 9.93275 65.655 9.6345 65.9109C9.60514 65.876 9.57627 65.842 9.54741 65.8086C8.94231 65.107 8.19137 64.6366 7.30068 64.3867C6.78824 64.2428 6.26517 64.1901 5.73399 64.2118C4.96331 64.2433 4.23364 64.4308 3.56018 64.8115C2.52366 65.397 1.82589 66.2653 1.44612 67.3906C1.23598 68.0135 1.16103 68.6563 1.19091 69.3122C1.22281 70.0137 1.38231 70.6843 1.69322 71.3149C2.09223 72.1244 2.67759 72.7646 3.45283 73.2274C3.96021 73.5305 4.5086 73.7242 5.09041 73.822C5.52183 73.8945 5.95629 73.9127 6.39176 73.8747C7.35942 73.7911 8.23137 73.4611 8.98585 72.8417C9.66489 72.2841 10.1348 71.58 10.4178 70.7497C10.5303 70.4207 10.6255 70.1805 10.6477 69.921C9.21017 69.9346 7.77514 69.9478 6.33808 69.9615V68.857C8.17567 68.8398 10.0128 68.8225 11.8539 68.8053"
                      fill="white"
                    />
                    <path
                      d="M10.5642 0H0.273926V35.0165H10.5642V22.0442L16.6198 35.0165H26.9476L10.6017 0H10.5642Z"
                      fill="white"
                    />
                    <path
                      d="M55.0583 0H44.7696H44.7306L33.542 23.9683L22.3534 0H12.0256L28.3715 35.0165H28.3847H38.6993H38.7125L44.7696 22.0411V35.0165H55.0599V0H55.0583Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_361_101">
                      <rect width="115" height="75" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
          <div
            className={`titleWrap ${styles.titleWrap} w-[92%] pl-[30px] md:w-[100%] md:pl-[0] md:pt-[20px]`}
          >
            <h5 className="text-white">
              Clear Digital is a founding member of Myrious Group’s
              expertise-driven agencies.
            </h5>
            <p>
              Myrious Group is an independent holding company enabling
              forward-thinking brands to achieve breakthrough performance
              through power of orchestration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
