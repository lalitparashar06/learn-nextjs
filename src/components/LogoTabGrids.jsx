// import React from "react";
// export default function LogoTabGrids() {
//   return (
//     <section className="logo-tab-grids bg-[rgb(245,92,92)] overflow-visible lg:pt-[60px]">
//       <div className="container mx-auto max-w-[834px]">
//         <div className="item-wrap relative z-[2] flex bg-[#2D3748] p-[80px_62px_80px_50px] md:p-[50px] sm:p-[40px] xs:p-[25px] rounded-lg">
//           <div className="list-wrap w-[30%] pr-[30px] lg:flex lg:flex-wrap lg:float-left md:pr-[10px] md:w-full sm:w-full">
//             <div className="list-item w-full relative mb-[70px] last:mb-0 md:mb-[15px] lg:cursor-pointer md:cursor-pointer md:p-0 md:opacity-100">
//               <div className="tab-item relative flex items-center pl-[31px] xs:pl-5 md:pb-5 md:cursor-pointer after:content-[''] after:absolute after:top-5 after:right-0 after:w-4 after:h-[23px] after:bg-[url('/wp-content/themes/veritoneone/dist/images/right-arrow.svg')] after:bg-no-repeat after:bg-[length:100%] after:rotate-90 after:opacity-0 after:transition-all after:duration-400 md:after:opacity-100 xs:after:top-[6px]">
//                 <div className="img-wrap max-w-10 max-h-10 overflow-hidden xs:max-w-[30px] xs:max-h-[30px]">
//                   <svg
//                     width="40"
//                     height="40"
//                     viewBox="0 0 40 40"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-full h-full object-cover"
//                   >
//                     <g clip-path="url(#clip0_105_6842)">
//                       <path
//                         d="M31.6668 16.6666H28.8335C28.8335 21.6666 24.6002 25.1666 20.0002 25.1666C15.4002 25.1666 11.1668 21.6666 11.1668 16.6666H8.3335C8.3335 22.35 12.8668 27.05 18.3335 27.8666V33.3333H21.6668V27.8666C27.1335 27.05 31.6668 22.35 31.6668 16.6666ZM25.0002 40H28.3335V36.6666H25.0002M18.3335 40H21.6668V36.6666H18.3335M20.0002 21.6666C21.3262 21.6666 22.598 21.1398 23.5357 20.2022C24.4734 19.2645 25.0002 17.9927 25.0002 16.6666V6.66663C25.0002 5.34054 24.4734 4.06877 23.5357 3.13109C22.598 2.19341 21.3262 1.66663 20.0002 1.66663C18.6741 1.66663 17.4023 2.19341 16.4646 3.13109C15.5269 4.06877 15.0002 5.34054 15.0002 6.66663V16.6666C15.0002 17.9927 15.5269 19.2645 16.4646 20.2022C17.4023 21.1398 18.6741 21.6666 20.0002 21.6666ZM11.6668 40H15.0002V36.6666H11.6668V40Z"
//                         fill="#fff"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_105_6842">
//                         <rect width="40" height="40" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </div>
//                 <h4 className="text-[32px] text-white font-medium ml-[23px] mb-0 md:text-[22px] sm:text-[20px]">
//                   Podcast
//                 </h4>
//               </div>
//             </div>
//             <div className="list-item w-full relative mb-[70px] last:mb-0 md:mb-[15px] lg:cursor-pointer md:cursor-pointer md:p-0 md:opacity-100">
//               <div className="tab-item relative flex items-center pl-[31px] xs:pl-5 md:pb-5 md:cursor-pointer after:content-[''] after:absolute after:top-5 after:right-0 after:w-4 after:h-[23px] after:bg-[url('/wp-content/themes/veritoneone/dist/images/right-arrow.svg')] after:bg-no-repeat after:bg-[length:100%] after:rotate-90 after:opacity-0 after:transition-all after:duration-400 md:after:opacity-100 xs:after:top-[6px]">
//                 <div className="img-wrap max-w-10 max-h-10 overflow-hidden xs:max-w-[30px] xs:max-h-[30px]">
//                   <svg
//                     width="40"
//                     height="40"
//                     viewBox="0 0 40 40"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-full h-full object-cover"
//                   >
//                     <path
//                       d="M16.6668 25L25.3168 20L16.6668 15V25ZM35.9335 11.95C36.1502 12.7334 36.3002 13.7834 36.4002 15.1167C36.5168 16.45 36.5668 17.6 36.5668 18.6L36.6668 20C36.6668 23.65 36.4002 26.3334 35.9335 28.05C35.5168 29.55 34.5502 30.5167 33.0502 30.9334C32.2668 31.15 30.8335 31.3 28.6335 31.4C26.4668 31.5167 24.4835 31.5667 22.6502 31.5667L20.0002 31.6667C13.0168 31.6667 8.66683 31.4 6.95016 30.9334C5.45016 30.5167 4.4835 29.55 4.06683 28.05C3.85016 27.2667 3.70016 26.2167 3.60016 24.8834C3.4835 23.55 3.4335 22.4 3.4335 21.4L3.3335 20C3.3335 16.35 3.60016 13.6667 4.06683 11.95C4.4835 10.45 5.45016 9.48337 6.95016 9.06671C7.7335 8.85004 9.16683 8.70004 11.3668 8.60004C13.5335 8.48337 15.5168 8.43337 17.3502 8.43337L20.0002 8.33337C26.9835 8.33337 31.3335 8.60004 33.0502 9.06671C34.5502 9.48337 35.5168 10.45 35.9335 11.95Z"
//                       fill="#ECF0F7"
//                     />
//                   </svg>
//                 </div>
//                 <h4 className="text-[32px] text-white font-medium ml-[23px] mb-0 md:text-[22px] sm:text-[20px]">
//                   youtube
//                 </h4>
//               </div>
//             </div>
//             <div className="list-item w-full relative mb-[70px] last:mb-0 md:mb-[15px] lg:cursor-pointer md:cursor-pointer md:p-0 md:opacity-100">
//               <div className="tab-item relative flex items-center pl-[31px] xs:pl-5 md:pb-5 md:cursor-pointer after:content-[''] after:absolute after:top-5 after:right-0 after:w-4 after:h-[23px] after:bg-[url('/wp-content/themes/veritoneone/dist/images/right-arrow.svg')] after:bg-no-repeat after:bg-[length:100%] after:rotate-90 after:opacity-0 after:transition-all after:duration-400 md:after:opacity-100 xs:after:top-[6px]">
//                 <div className="img-wrap max-w-10 max-h-10 overflow-hidden xs:max-w-[30px] xs:max-h-[30px]">
//                   <svg
//                     width="40"
//                     height="40"
//                     viewBox="0 0 40 40"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-full h-full object-cover"
//                   >
//                     <path
//                       d="M33.3335 10C34.2176 10 35.0654 10.3512 35.6905 10.9763C36.3156 11.6015 36.6668 12.4493 36.6668 13.3334V33.3334C36.6668 34.2174 36.3156 35.0653 35.6905 35.6904C35.0654 36.3155 34.2176 36.6667 33.3335 36.6667H6.66683C5.78277 36.6667 4.93493 36.3155 4.30981 35.6904C3.68469 35.0653 3.3335 34.2174 3.3335 33.3334V13.3334C3.3335 11.9167 4.21683 10.7 5.46683 10.2167L26.1835 1.66669L27.4502 4.71669L14.7168 10H33.3335ZM33.3335 13.3334H6.66683V20H26.6668V16.6667H30.0002V20H33.3335V13.3334ZM11.6668 23.3334C10.3407 23.3334 9.06898 23.8601 8.1313 24.7978C7.19361 25.7355 6.66683 27.0073 6.66683 28.3334C6.66683 29.6594 7.19361 30.9312 8.1313 31.8689C9.06898 32.8066 10.3407 33.3334 11.6668 33.3334C12.9929 33.3334 14.2647 32.8066 15.2024 31.8689C16.14 30.9312 16.6668 29.6594 16.6668 28.3334C16.6668 27.0073 16.14 25.7355 15.2024 24.7978C14.2647 23.8601 12.9929 23.3334 11.6668 23.3334Z"
//                       fill="#ECF0F7"
//                     />
//                   </svg>
//                 </div>
//                 <h4 className="text-[32px] text-white font-medium ml-[23px] mb-0 md:text-[22px] sm:text-[20px]">
//                   Radio
//                 </h4>
//               </div>
//             </div>
//             <div className="list-item w-full relative mb-[70px] last:mb-0 md:mb-[15px] lg:cursor-pointer md:cursor-pointer md:p-0 md:opacity-100">
//               <div className="tab-item relative flex items-center pl-[31px] xs:pl-5 md:pb-5 md:cursor-pointer after:content-[''] after:absolute after:top-5 after:right-0 after:w-4 after:h-[23px] after:bg-[url('/wp-content/themes/veritoneone/dist/images/right-arrow.svg')] after:bg-no-repeat after:bg-[length:100%] after:rotate-90 after:opacity-0 after:transition-all after:duration-400 md:after:opacity-100 xs:after:top-[6px]">
//                 <div className="img-wrap max-w-10 max-h-10 overflow-hidden xs:max-w-[30px] xs:max-h-[30px]">
//                   <svg
//                     width="40"
//                     height="40"
//                     viewBox="0 0 40 40"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-full h-full object-cover"
//                   >
//                     <path
//                       d="M34.9998 28.3333H4.99984V8.33333H34.9998M34.9998 5H4.99984C4.11578 5 3.26794 5.35119 2.64281 5.97631C2.01769 6.60143 1.6665 7.44928 1.6665 8.33333V28.3333C1.6665 29.2174 2.01769 30.0652 2.64281 30.6904C3.26794 31.3155 4.11578 31.6667 4.99984 31.6667H13.3332V35H26.6665V31.6667H34.9998C35.8839 31.6667 36.7317 31.3155 37.3569 30.6904C37.982 30.0652 38.3332 29.2174 38.3332 28.3333V8.33333C38.3332 7.44928 37.982 6.60143 37.3569 5.97631C36.7317 5.35119 35.8839 5 34.9998 5Z"
//                       fill="#ECF0F7"
//                     />
//                   </svg>
//                 </div>
//                 <h4 className="text-[32px] text-white font-medium ml-[23px] mb-0 md:text-[22px] sm:text-[20px]">
//                   Streaming
//                 </h4>
//               </div>
//             </div>
//             <div className="list-item w-full relative mb-[70px] last:mb-0 md:mb-[15px] lg:cursor-pointer md:cursor-pointer md:p-0 md:opacity-100">
//               <div className="tab-item relative flex items-center pl-[31px] xs:pl-5 md:pb-5 md:cursor-pointer after:content-[''] after:absolute after:top-5 after:right-0 after:w-4 after:h-[23px] after:bg-[url('/wp-content/themes/veritoneone/dist/images/right-arrow.svg')] after:bg-no-repeat after:bg-[length:100%] after:rotate-90 after:opacity-0 after:transition-all after:duration-400 md:after:opacity-100 xs:after:top-[6px]">
//                 <div className="img-wrap max-w-10 max-h-10 overflow-hidden xs:max-w-[30px] xs:max-h-[30px]">
//                   <svg
//                     width="40"
//                     height="40"
//                     viewBox="0 0 40 40"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-full h-full object-cover"
//                   >
//                     <path
//                       d="M27.0502 30L20.0002 25.75L12.9502 30L14.8168 21.9833L8.60016 16.6L16.8002 15.9L20.0002 8.33331L23.2002 15.8833L31.4002 16.5833L25.1835 21.9666L27.0502 30ZM20.0002 3.33331C10.7835 3.33331 3.3335 10.8333 3.3335 20C3.3335 24.4203 5.08944 28.6595 8.21505 31.7851C9.76269 33.3327 11.6 34.5604 13.6221 35.398C15.6442 36.2356 17.8115 36.6666 20.0002 36.6666C24.4204 36.6666 28.6597 34.9107 31.7853 31.7851C34.9109 28.6595 36.6668 24.4203 36.6668 20C36.6668 17.8113 36.2357 15.644 35.3982 13.6219C34.5606 11.5998 33.3329 9.76251 31.7853 8.21487C30.2376 6.66722 28.4003 5.43957 26.3782 4.60199C24.3561 3.76441 22.1889 3.33331 20.0002 3.33331Z"
//                       fill="#ECF0F7"
//                     />
//                   </svg>
//                 </div>
//                 <h4 className="text-[32px] text-white font-medium ml-[23px] mb-0 md:text-[22px] sm:text-[20px]">
//                   Influencer
//                 </h4>
//               </div>
//             </div>
//             <div className="list-item w-full relative mb-[70px] last:mb-0 md:mb-[15px] lg:cursor-pointer md:cursor-pointer md:p-0 md:opacity-100">
//               <div className="tab-item relative flex items-center pl-[31px] xs:pl-5 md:pb-5 md:cursor-pointer after:content-[''] after:absolute after:top-5 after:right-0 after:w-4 after:h-[23px] after:bg-[url('/wp-content/themes/veritoneone/dist/images/right-arrow.svg')] after:bg-no-repeat after:bg-[length:100%] after:rotate-90 after:opacity-0 after:transition-all after:duration-400 md:after:opacity-100 xs:after:top-[6px]">
//                 <div className="img-wrap max-w-10 max-h-10 overflow-hidden xs:max-w-[30px] xs:max-h-[30px]">
//                   <svg
//                     width="40"
//                     height="40"
//                     viewBox="0 0 40 40"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-full h-full object-cover"
//                   >
//                     <path
//                       d="M15 21.6667V18.3333H18.3333V21.6667M18.3333 25V21.6667H21.6667V25M18.3333 18.3333V15H21.6667V18.3333M15 15V11.6667H18.3333V15M15 28.3333V25H18.3333V28.3333M5 8.33333V31.6667C5 33.5 6.5 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V8.33333C35 6.5 33.5 5 31.6667 5H8.33333C6.5 5 5 6.5 5 8.33333ZM30 25V28.3333H26.6667V25M30 18.3333V21.6667H26.6667V18.3333M30 11.6667V15H26.6667V11.6667M18.3333 8.33333V11.6667H21.6667V8.33333H25V11.6667H21.6667V15H25V18.3333H21.6667V21.6667H25V25H21.6667V28.3333H25V31.6667H21.6667V28.3333H18.3333V31.6667H8.33333V8.33333H18.3333Z"
//                       fill="#ECF0F7"
//                     />
//                   </svg>
//                 </div>
//                 <h4 className="text-[32px] text-white font-medium ml-[23px] mb-0 md:text-[22px] sm:text-[20px]">
//                   Digital
//                 </h4>
//               </div>
//             </div>
//           </div>
//           <div className="column-wrap w-[70%] pl-[7px] rounded-lg min-h-[553px] h-full lg:h-auto md:h-auto md:block">
//             <div className="column-item hidden h-full mt-5 md:block active:flex">
//               <div className="text-wrap relative w-[51%] bg-white p-[58px_30px_94px_31px] lg:w-[45%] md:w-full md:mt-0 md:p-[30px_20px]">
//                 <div className="icon-wrap relative max-w-[75px] h-[75px] overflow-hidden inline-block md:max-w-[60px] md:max-h-[60px] sm:max-w-[50px] sm:max-h-[50px] xs:max-w-[40px] xs:h-[40px] z-[2] w-full">
//                   <img
//                     src="/anshuma/templates/assets/images/microphone-icon.svg"
//                     alt="Microphone settings"
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <div className="inner-text w-full my-[30px]">
//                   <p className="text-[18px] font-light text-[#2D3748] leading-[1.6] md:p-0">
//                     There are over 2.5 million podcasts, in __ countries and in
//                     more than 100 languages. With our proprietary podcast
//                     performance data and aiWARE-enabled actionable intelligence,
//                     Veritone One has the knowledge, experience, technology, and
//                     leverage to help brands navigate this bustling landscape.
//                   </p>
//                 </div>
//                 <div className="btn-wrap absolute bottom-[59px] left-[30px] md:relative md:left-0 md:bottom-0 md:mt-[30px]">
//                   <a href="#" className="link-common inline-block">
//                     <span>Learn More</span>
//                   </a>
//                 </div>
//               </div>
//               <div className="img-item w-[70%] overflow-hidden h-[553px] min-h-full lg:w-[55%] lg:h-full md:h-[300px] md:mb-10 md:w-full md:min-h-auto sm:h-[300px] sm:mb-10 sm:w-full sm:min-h-auto xs:h-[250px] xs:mb-10 xs:w-full xs:min-h-auto">
//                 <img
//                   src="/images/card-1.webp"
//                   alt="Car"
//                   className="w-full h-full object-cover block"
//                 />
//               </div>
//             </div>
//             <div className="column-item hidden h-full mt-5 md:block active:flex">
//               <div className="text-wrap relative w-[51%] bg-white p-[58px_30px_94px_31px] lg:w-[45%] md:w-full md:mt-0 md:p-[30px_20px]">
//                 <div className="icon-wrap relative max-w-[75px] h-[75px] overflow-hidden inline-block md:max-w-[60px] md:max-h-[60px] sm:max-w-[50px] sm:max-h-[50px] xs:max-w-[40px] xs:h-[40px] z-[2] w-full">
//                   <img
//                     src="/images/microphone-icon.svg"
//                     alt="Microphone settings"
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <div className="inner-text w-full my-[30px]">
//                   <p className="text-[18px] font-light text-[#2D3748] leading-[1.6] md:p-0">
//                     There are over 2.5 million podcasts, in __ countries and in
//                     more
//                   </p>
//                 </div>
//                 <div className="btn-wrap absolute bottom-[59px] left-[30px] md:relative md:left-0 md:bottom-0 md:mt-[30px]">
//                   <a href="#" className="link-common inline-block">
//                     <span>Learn More</span>
//                   </a>
//                 </div>
//               </div>
//               <div className="img-item w-[70%] overflow-hidden h-[553px] min-h-full lg:w-[55%] lg:h-full md:h-[300px] md:mb-10 md:w-full md:min-h-auto sm:h-[300px] sm:mb-10 sm:w-full sm:min-h-auto xs:h-[250px] xs:mb-10 xs:w-full xs:min-h-auto">
//                 <img
//                   src="/images/car-back.png"
//                   alt="Manage banner"
//                   className="w-full h-full object-cover block"
//                 />
//               </div>
//             </div>
//             <div className="column-item hidden h-full mt-5 md:block active:flex">
//               <div className="text-wrap relative w-[51%] bg-white p-[58px_30px_94px_31px] lg:w-[45%] md:w-full md:mt-0 md:p-[30px_20px]">
//                 <div className="icon-wrap relative max-w-[75px] h-[75px] overflow-hidden inline-block md:max-w-[60px] md:max-h-[60px] sm:max-w-[50px] sm:max-h-[50px] xs:max-w-[40px] xs:h-[40px] z-[2] w-full">
//                   <img
//                     src="/images/microphone-icon.svg"
//                     alt="Microphone settings"
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <div className="inner-text w-full my-[30px]">
//                   <p className="text-[18px] font-light text-[#2D3748] leading-[1.6] md:p-0">
//                     There are over 2.5 million podcasts, in __ countries and in
//                     more than 100 languages. With our proprietary podcast
//                     performance data and aiWARE-enabled actionable intelligence,
//                     Veritone One has the knowledge, experience, technology, and
//                     leverage to help brands navigate this bustling landscape.
//                   </p>
//                 </div>
//                 <div className="btn-wrap absolute bottom-[59px] left-[30px] md:relative md:left-0 md:bottom-0 md:mt-[30px]">
//                   <a href="#" className="link-common inline-block">
//                     <span>Learn More</span>
//                   </a>
//                 </div>
//               </div>
//               <div className="img-item w-[70%] overflow-hidden h-[553px] min-h-full lg:w-[55%] lg:h-full md:h-[300px] md:mb-10 md:w-full md:min-h-auto sm:h-[300px] sm:mb-10 sm:w-full sm:min-h-auto xs:h-[250px] xs:mb-10 xs:w-full xs:min-h-auto">
//                 <img
//                   src="/images/car-pink-banner.png"
//                   alt="Manage banner"
//                   className="w-full h-full object-cover block"
//                 />
//               </div>
//             </div>
//             <div className="column-item hidden h-full mt-5 md:block active:flex">
//               <div className="text-wrap relative w-[51%] bg-white p-[58px_30px_94px_31px] lg:w-[45%] md:w-full md:mt-0 md:p-[30px_20px]">
//                 <div className="icon-wrap relative max-w-[75px] h-[75px] overflow-hidden inline-block md:max-w-[60px] md:max-h-[60px] sm:max-w-[50px] sm:max-h-[50px] xs:max-w-[40px] xs:h-[40px] z-[2] w-full">
//                   <img
//                     src="/images/microphone-icon.svg"
//                     alt="Microphone settings"
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <div className="inner-text w-full my-[30px]">
//                   <p className="text-[18px] font-light text-[#2D3748] leading-[1.6] md:p-0">
//                     There are over 2.5 million podcasts, in __ countries and in
//                     more than 100 languages. With our proprietary podcast
//                     performance data and aiWARE-enabled actionable intelligence,
//                     Veritone One has the knowledge, experience, technology, and
//                     leverage to help brands navigate this bustling landscape.
//                   </p>
//                 </div>
//                 <div className="btn-wrap absolute bottom-[59px] left-[30px] md:relative md:left-0 md:bottom-0 md:mt-[30px]">
//                   <a href="#" className="link-common inline-block">
//                     <span>Learn More</span>
//                   </a>
//                 </div>
//               </div>
//               <div className="img-item w-[70%] overflow-hidden h-[553px] min-h-full lg:w-[55%] lg:h-full md:h-[300px] md:mb-10 md:w-full md:min-h-auto sm:h-[300px] sm:mb-10 sm:w-full sm:min-h-auto xs:h-[250px] xs:mb-10 xs:w-full xs:min-h-auto">
//                 <img
//                   src="/images/pink-black-car.png"
//                   alt="Manage banner"
//                   className="w-full h-full object-cover block"
//                 />
//               </div>
//             </div>
//             <div className="column-item hidden h-full mt-5 md:block active:flex">
//               <div className="text-wrap relative w-[51%] bg-white p-[58px_30px_94px_31px] lg:w-[45%] md:w-full md:mt-0 md:p-[30px_20px]">
//                 <div className="icon-wrap relative max-w-[75px] h-[75px] overflow-hidden inline-block md:max-w-[60px] md:max-h-[60px] sm:max-w-[50px] sm:max-h-[50px] xs:max-w-[40px] xs:h-[40px] z-[2] w-full">
//                   <img
//                     src="/images/microphone-icon.svg"
//                     alt="Microphone settings"
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <div className="inner-text w-full my-[30px]">
//                   <p className="text-[18px] font-light text-[#2D3748] leading-[1.6] md:p-0">
//                     There are over 2.5 million podcasts, in __ countries and in
//                     more than 100 languages. With our proprietary podcast
//                     performance data and aiWARE-enabled actionable intelligence,
//                     Veritone One has the knowledge, experience, technology, and
//                     leverage to help brands navigate this bustling landscape.
//                   </p>
//                 </div>
//                 <div className="btn-wrap absolute bottom-[59px] left-[30px] md:relative md:left-0 md:bottom-0 md:mt-[30px]">
//                   <a href="#" className="link-common inline-block">
//                     <span>Learn More</span>
//                   </a>
//                 </div>
//               </div>
//               <div className="img-item w-[70%] overflow-hidden h-[553px] min-h-full lg:w-[55%] lg:h-full md:h-[300px] md:mb-10 md:w-full md:min-h-auto sm:h-[300px] sm:mb-10 sm:w-full sm:min-h-auto xs:h-[250px] xs:mb-10 xs:w-full xs:min-h-auto">
//                 <img
//                   src="/images/pink-black-car.png"
//                   alt="Manage banner"
//                   className="w-full h-full object-cover block"
//                 />
//               </div>
//             </div>
//             <div className="column-item hidden h-full mt-5 md:block active:flex">
//               <div className="text-wrap relative w-[51%] bg-white p-[58px_30px_94px_31px] lg:w-[45%] md:w-full md:mt-0 md:p-[30px_20px]">
//                 <div className="icon-wrap relative max-w-[75px] h-[75px] overflow-hidden inline-block md:max-w-[60px] md:max-h-[60px] sm:max-w-[50px] sm:max-h-[50px] xs:max-w-[40px] xs:h-[40px] z-[2] w-full">
//                   <img
//                     src="/images/microphone-icon.svg"
//                     alt="Microphone settings"
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <div className="inner-text w-full my-[30px]">
//                   <p className="text-[18px] font-light text-[#2D3748] leading-[1.6] md:p-0">
//                     There are over 2.5 million podcasts, in __ countries and in
//                     more than 100 languages. With our proprietary podcast
//                     performance data and aiWARE-enabled actionable intelligence,
//                     Veritone One has the knowledge, experience, technology, and
//                     leverage to help brands navigate this bustling landscape.
//                   </p>
//                 </div>
//                 <div className="btn-wrap absolute bottom-[59px] left-[30px] md:relative md:left-0 md:bottom-0 md:mt-[30px]">
//                   <a href="#" className="link-common inline-block">
//                     <span>Learn More</span>
//                   </a>
//                 </div>
//               </div>
//               <div className="img-item w-[70%] overflow-hidden h-[553px] min-h-full lg:w-[55%] lg:h-full md:h-[300px] md:mb-10 md:w-full md:min-h-auto sm:h-[300px] sm:mb-10 sm:w-full sm:min-h-auto xs:h-[250px] xs:mb-10 xs:w-full xs:min-h-auto">
//                 <img
//                   src="/images/technology.png"
//                   alt="Technology"
//                   className="w-full h-full object-cover block"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";

export default function LogoTabGrids() {
  const [activeTab, setActiveTab] = useState(0);

  // Tab data with icons, content, and images
  const tabs = [
    {
      name: "Podcast",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_105_6842)">
            <path
              d="M31.6668 16.6666H28.8335C28.8335 21.6666 24.6002 25.1666 20.0002 25.1666C15.4002 25.1666 11.1668 21.6666 11.1668 16.6666H8.3335C8.3335 22.35 12.8668 27.05 18.3335 27.8666V33.3333H21.6668V27.8666C27.1335 27.05 31.6668 22.35 31.6668 16.6666ZM25.0002 40H28.3335V36.6666H25.0002M18.3335 40H21.6668V36.6666H18.3335M20.0002 21.6666C21.3262 21.6666 22.598 21.1398 23.5357 20.2022C24.4734 19.2645 25.0002 17.9927 25.0002 16.6666V6.66663C25.0002 5.34054 24.4734 4.06877 23.5357 3.13109C22.598 2.19341 21.3262 1.66663 20.0002 1.66663C18.6741 1.66663 17.4023 2.19341 16.4646 3.13109C15.5269 4.06877 15.0002 5.34054 15.0002 6.66663V16.6666C15.0002 17.9927 15.5269 19.2645 16.4646 20.2022C17.4023 21.1398 18.6741 21.6666 20.0002 21.6666ZM11.6668 40H15.0002V36.6666H11.6668V40Z"
              fill="#fff"
            />
          </g>
          <defs>
            <clipPath id="clip0_105_6842">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      desc: "There are over 2.5 million podcasts, in __ countries and in more than 100 languages. With our proprietary podcast performance data and aiWARE-enabled actionable intelligence, Veritone One has the knowledge, experience, technology, and leverage to help brands navigate this bustling landscape.",
      img: "/images/card-1.webp",
      alt: "Car",
    },
    {
      name: "YouTube",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6668 25L25.3168 20L16.6668 15V25ZM35.9335 11.95C36.1502 12.7334 36.3002 13.7834 36.4002 15.1167C36.5168 16.45 36.5668 17.6 36.5668 18.6L36.6668 20C36.6668 23.65 36.4002 26.3334 35.9335 28.05C35.5168 29.55 34.5502 30.5167 33.0502 30.9334C32.2668 31.15 30.8335 31.3 28.6335 31.4C26.4668 31.5167 24.4835 31.5667 22.6502 31.5667L20.0002 31.6667C13.0168 31.6667 8.66683 31.4 6.95016 30.9334C5.45016 30.5167 4.4835 29.55 4.06683 28.05C3.85016 27.2667 3.70016 26.2167 3.60016 24.8834C3.4835 23.55 3.4335 22.4 3.4335 21.4L3.3335 20C3.3335 16.35 3.60016 13.6667 4.06683 11.95C4.4835 10.45 5.45016 9.48337 6.95016 9.06671C7.7335 8.85004 9.16683 8.70004 11.3668 8.60004C13.5335 8.48337 15.5168 8.43337 17.3502 8.43337L20.0002 8.33337C26.9835 8.33337 31.3335 8.60004 33.0502 9.06671C34.5502 9.48337 35.5168 10.45 35.9335 11.95Z"
            fill="#ECF0F7"
          />
        </svg>
      ),
      desc: "There are over 2.5 million podcasts, in __ countries and in more",
      img: "/images/car-back.png",
      alt: "Manage banner",
    },
    {
      name: "Radio",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.3335 10C34.2176 10 35.0654 10.3512 35.6905 10.9763C36.3156 11.6015 36.6668 12.4493 36.6668 13.3334V33.3334C36.6668 34.2174 36.3156 35.0653 35.6905 35.6904C35.0654 36.3155 34.2176 36.6667 33.3335 36.6667H6.66683C5.78277 36.6667 4.93493 36.3155 4.30981 35.6904C3.68469 35.0653 3.3335 34.2174 3.3335 33.3334V13.3334C3.3335 11.9167 4.21683 10.7 5.46683 10.2167L26.1835 1.66669L27.4502 4.71669L14.7168 10H33.3335ZM33.3335 13.3334H6.66683V20H26.6668V16.6667H30.0002V20H33.3335V13.3334ZM11.6668 23.3334C10.3407 23.3334 9.06898 23.8601 8.1313 24.7978C7.19361 25.7355 6.66683 27.0073 6.66683 28.3334C6.66683 29.6594 7.19361 30.9312 8.1313 31.8689C9.06898 32.8066 10.3407 33.3334 11.6668 33.3334C12.9929 33.3334 14.2647 32.8066 15.2024 31.8689C16.14 30.9312 16.6668 29.6594 16.6668 28.3334C16.6668 27.0073 16.14 25.7355 15.2024 24.7978C14.2647 23.8601 12.9929 23.3334 11.6668 23.3334Z"
            fill="#ECF0F7"
          />
        </svg>
      ),
      desc: "There are over 2.5 million podcasts, in __ countries and in more than 100 languages. With our proprietary podcast performance data and aiWARE-enabled actionable intelligence, Veritone One has the knowledge, experience, technology, and leverage to help brands navigate this bustling landscape.",
      img: "/images/car-pink-banner.png",
      alt: "Manage banner",
    },
    {
      name: "Streaming",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.9998 28.3333H4.99984V8.33333H34.9998M34.9998 5H4.99984C4.11578 5 3.26794 5.35119 2.64281 5.97631C2.01769 6.60143 1.6665 7.44928 1.6665 8.33333V28.3333C1.6665 29.2174 2.01769 30.0652 2.64281 30.6904C3.26794 31.3155 4.11578 31.6667 4.99984 31.6667H13.3332V35H26.6665V31.6667H34.9998C35.8839 31.6667 36.7317 31.3155 37.3569 30.6904C37.982 30.0652 38.3332 29.2174 38.3332 28.3333V8.33333C38.3332 7.44928 37.982 6.60143 37.3569 5.97631C36.7317 5.35119 35.8839 5 34.9998 5Z"
            fill="#ECF0F7"
          />
        </svg>
      ),
      desc: "There are over 2.5 million podcasts, in __ countries and in more than 100 languages. With our proprietary podcast performance data and aiWARE-enabled actionable intelligence, Veritone One has the knowledge, experience, technology, and leverage to help brands navigate this bustling landscape.",
      img: "/images/pink-black-car.png",
      alt: "Manage banner",
    },
    {
      name: "Influencer",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.0502 30L20.0002 25.75L12.9502 30L14.8168 21.9833L8.60016 16.6L16.8002 15.9L20.0002 8.33331L23.2002 15.8833L31.4002 16.5833L25.1835 21.9666L27.0502 30ZM20.0002 3.33331C10.7835 3.33331 3.3335 10.8333 3.3335 20C3.3335 24.4203 5.08944 28.6595 8.21505 31.7851C9.76269 33.3327 11.6 34.5604 13.6221 35.398C15.6442 36.2356 17.8115 36.6666 20.0002 36.6666C24.4204 36.6666 28.6597 34.9107 31.7853 31.7851C34.9109 28.6595 36.6668 24.4203 36.6668 20C36.6668 17.8113 36.2357 15.644 35.3982 13.6219C34.5606 11.5998 33.3329 9.76251 31.7853 8.21487C30.2376 6.66722 28.4003 5.43957 26.3782 4.60199C24.3561 3.76441 22.1889 3.33331 20.0002 3.33331Z"
            fill="#ECF0F7"
          />
        </svg>
      ),
      desc: "There are over 2.5 million podcasts, in __ countries and in more than 100 languages. With our proprietary podcast performance data and aiWARE-enabled actionable intelligence, Veritone One has the knowledge, experience, technology, and leverage to help brands navigate this bustling landscape.",
      img: "/images/pink-black-car.png",
      alt: "Manage banner",
    },
    {
      name: "Digital",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 21.6667V18.3333H18.3333V21.6667M18.3333 25V21.6667H21.6667V25M18.3333 18.3333V15H21.6667V18.3333M15 15V11.6667H18.3333V15M15 28.3333V25H18.3333V28.3333M5 8.33333V31.6667C5 33.5 6.5 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V8.33333C35 6.5 33.5 5 31.6667 5H8.33333C6.5 5 5 6.5 5 8.33333ZM30 25V28.3333H26.6667V25M30 18.3333V21.6667H26.6667V18.3333M30 11.6667V15H26.6667V11.6667M18.3333 8.33333V11.6667H21.6667V8.33333H25V11.6667H21.6667V15H25V18.3333H21.6667V21.6667H25V25H21.6667V28.3333H25V31.6667H21.6667V28.3333H18.3333V31.6667H8.33333V8.33333H18.3333Z"
            fill="#ECF0F7"
          />
        </svg>
      ),
      desc: "There are over 2.5 million podcasts, in __ countries and in more than 100 languages. With our proprietary podcast performance data and aiWARE-enabled actionable intelligence, Veritone One has the knowledge, experience, technology, and leverage to help brands navigate this bustling landscape.",
      img: "/images/technology.png",
      alt: "Technology",
    },
  ];

  // Auto-cycle tabs every 50 seconds
  useEffect(() => {
    const tabCycle = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 50000);
    return () => clearInterval(tabCycle);
  }, []);

  return (
    <section className="logo-tab-grids bg-[#315a67] overflow-visible lg:pt-15">
      <div className="container mx-auto max-w-[834px]">
        <div className="item-wrap relative z-[2] flex bg-[#333333] py-20 pr-[62px] pl-[50px] rounded-lg md:p-12 sm:p-10 xs:p-6">
          <div className="list-wrap w-[30%] pr-7 lg:flex lg:flex-wrap lg:float-left md:pr-2.5 md:w-full">
            {tabs.map((tab, index) => (
              <div
                key={tab.name}
                className={`w-full relative mb-[70px] last:mb-0 last:border-b-0 last:pb-0 md:mb-3.75 lg:cursor-pointer md:p-0 md:opacity-100 ${
                  activeTab === index ? "active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div
                  className={`tab-item relative  cursor-pointer flex items-center pl-[31px] md:pb-5 md:cursor-pointer xs:pl-5 after:content-[''] after:absolute after:top-5 after:right-0 after:w-4 after:h-[23px] after:bg-[url('/images/right-arrow.svg')] after:bg-no-repeat after:bg-contain after:opacity-0 after:transition-all after:duration-400 md:after:opacity-100 xs:after:top-[6px] ${
                    activeTab === index ? "mobile-active" : ""
                  } ${
                    activeTab === index
                      ? "after:rotate-[270deg]"
                      : "after:rotate-90"
                  }`}
                >
                  <div className="img-wrap max-w-10 max-h-10 overflow-hidden xs:max-w-[30px] xs:max-h-[30px]">
                    {React.cloneElement(tab.icon, {
                      className: `w-full h-full object-cover ${
                        activeTab === index
                          ? "[&>path]:fill-[#FF0000] [&>g>path]:fill-[#FF0000]"
                          : ""
                      }`,
                    })}
                  </div>
                  <h4
                    className={`text-[32px] font-medium ml-[23px] mb-0 md:text-[22px] sm:text-[20px] ${
                      activeTab === index ? "text-[#FF0000]" : "text-white"
                    }`}
                  >
                    {tab.name}
                  </h4>
                </div>
                {activeTab === index && (
                  <div className="absolute border-l-[10px] border-[#FF0000] top-[-20px] left-3 bottom-0 h-[79px] md:top-[-6px] md:h-[50px] md:left-0 xs:h-[46px] xs:left-0" />
                )}
              </div>
            ))}
          </div>
          <div className="column-wrap w-[70%] pl-[7px] rounded-lg min-h-[553px] h-full md:h-auto md:block">
            {tabs.map((tab, index) => (
              <div
                key={tab.name}
                className={`column-item ${
                  activeTab === index ? "flex" : "hidden"
                } h-full mt-5 md:block`}
              >
                <div className="text-wrap relative w-[51%] bg-white p-[58px_30px_94px_31px] lg:w-[45%] md:w-full md:p-[30px_20px]">
                  <div className="icon-wrap relative max-w-[75px] h-[75px] overflow-hidden z-[2] w-full inline-block md:max-w-[60px] md:max-h-[60px] sm:max-w-[50px] sm:max-h-[50px] xs:max-w-10 xs:h-10">
                    <img
                      src="/images/microphone-icon.svg"
                      alt="Microphone settings"
                      className="w-full h-full object-contain"
                      onError={() =>
                        console.error("Failed to load microphone icon")
                      }
                      onLoad={() => console.log("Loaded microphone icon")}
                    />
                  </div>
                  <div className="inner-text w-full my-[30px]">
                    <p className="text-lg font-light text-[#333333] leading-[1.6] md:p-0">
                      {tab.desc}
                    </p>
                  </div>
                  <div className="btn-wrap absolute bottom-[59px] left-[30px] md:static md:mt-[30px]">
                    <a href="#" className="link-common">
                      <span className="hover:text-[red]">Learn More</span>
                    </a>
                  </div>
                </div>
                <div className="img-item w-[70%] overflow-hidden  min-h-full lg:w-[55%] lg:h-full md:h-[300px] md:mb-10 md:w-full sm:h-[300px] sm:mb-10 sm:w-full xs:h-[250px] xs:mb-10 xs:w-full">
                  <img
                    src={tab.img}
                    alt={tab.alt}
                    className="w-full h-full object-cover"
                    onError={() =>
                      console.error(`Failed to load image: ${tab.img}`)
                    }
                    onLoad={() => console.log(`Loaded image: ${tab.img}`)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
