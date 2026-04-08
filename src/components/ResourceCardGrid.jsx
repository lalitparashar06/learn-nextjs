//////22////////

// import React from "react";
// export default function ResourceCardGrid() {
//   return (
//     <section class="ResourceCardGrid relative bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(113,197,232,0.15)_60.5%)]">
//       <div className="container">
//         <div className="outer-wrap flex flex-wrap w-[calc(100%+30px)] ml-[-15px] ">
//           <div className="item w-[calc(33.33%-30px)] mx-[15px] my-[15px] rounded-[30px] bg-[#fff] relative pb-[64px]">
//             <div className="inner-content">
//               <div className="img-wrap h-[200px]">
//                 <img
//                   src="/images/Downtown_BBVA Compass Stadium_Arial_2019_credit Bryan Malloch 2.png"
//                   className="h-full w-full object-cover rounded-t-[30px]"
//                 ></img>
//               </div>
//               <div className="content-wrap px-[30px] py-[20px]">
//                 <div className="text-wrap">
//                   <span className="text-[#0077C8] uppercase tracking-[4px]">
//                     Innovation | July 12, 2026
//                   </span>
//                   <p> 1,800 Expected</p>
//                   <h6 className="text-[black] pt-[10px]">
//                     Innovation & Startup Expo
//                   </h6>
//                   <p className="text-[black] pt-[10px]">
//                     Lorem ipsum dolor sit amet consectetur.
//                   </p>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Platinum</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Gold</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Silver</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="btn  absolute bottom-[20px] left-[30px]">
//                 <a href="#">View Packages</a>
//               </div>
//             </div>
//           </div>
//           <div className="item w-[calc(33.33%-30px)] mx-[15px] my-[15px] rounded-[30px] bg-[#fff] relative pb-[64px]">
//             <div className="inner-content">
//               <div className="img-wrap h-[200px]">
//                 <img
//                   src="/images/house-520x272.webp"
//                   className="h-full w-full object-cover rounded-t-[30px]"
//                 ></img>
//               </div>
//               <div className="content-wrap px-[30px] py-[20px]">
//                 <div className="text-wrap">
//                   <span className="text-[#0077C8] uppercase tracking-[4px]">
//                     Marathon | Aug 7, 2026
//                   </span>
//                   <p>2,500 Expected</p>
//                   <h6 className="text-[black] pt-[10px]">City Marathon 2026</h6>
//                   <p className="text-[black] pt-[10px]">
//                     Lorem ipsum dolor sit amet consectetur.
//                   </p>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Platinum</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Gold</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Silver</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Bronze</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="btn  absolute bottom-[20px] left-[30px]">
//                 <a href="#">View Packages</a>
//               </div>
//             </div>
//           </div>
//           <div className="item w-[calc(33.33%-30px)] mx-[15px] my-[15px] rounded-[30px] bg-[#fff] relative pb-[64px]">
//             <div className="inner-content">
//               <div className="img-wrap h-[200px]">
//                 <img
//                   src="/images/Construction Outlook-2026.jpeg"
//                   className="h-full w-full object-cover rounded-t-[30px]"
//                 ></img>
//               </div>
//               <div className="content-wrap px-[30px] py-[20px]">
//                 <div className="text-wrap">
//                   <span className="text-[#0077C8] uppercase tracking-[3px]">
//                     Sustainability | Sep 8, 2026
//                   </span>
//                   <p> 1,200 Expected</p>
//                   <h6 className="text-[black] pt-[10px]">
//                     Sustainability & Green Tech Forum
//                   </h6>
//                   <p className="text-[black] pt-[10px]">
//                     Lorem ipsum dolor sit amet consectetur.
//                   </p>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Platinum</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Gold</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Silver</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="btn  absolute bottom-[20px] left-[30px]">
//                 <a href="#">View Packages</a>
//               </div>
//             </div>
//           </div>
//           <div className="item w-[calc(33.33%-30px)] mx-[15px] my-[15px] rounded-[30px] bg-[#fff] relative pb-[64px]">
//             <div className="inner-content">
//               <div className="img-wrap h-[200px]">
//                 <img
//                   src="/images/091116_dabfoto_ghp_Sm_round_1018 1.png"
//                   className="h-full w-full object-cover rounded-t-[30px]"
//                 ></img>
//               </div>
//               <div className="content-wrap px-[30px] py-[20px]">
//                 <div className="text-wrap">
//                   <span className="text-[#0077C8] uppercase tracking-[4px]">
//                     Finance | Oct 3, 2026
//                   </span>
//                   <p> 2,000 Expected</p>
//                   <h6 className="text-[black] pt-[10px]">
//                     Financial Services Conference
//                   </h6>
//                   <p className="text-[black] pt-[10px]">
//                     Lorem ipsum dolor sit amet consectetur.
//                   </p>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Platinum</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Gold</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Silver</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="btn  absolute bottom-[20px] left-[30px]">
//                 <a href="#">View Packages</a>
//               </div>
//             </div>
//           </div>
//           <div className="item w-[calc(33.33%-30px)] mx-[15px] my-[15px] rounded-[30px] bg-[#fff] relative pb-[64px]">
//             <div className="inner-content">
//               <div className="img-wrap h-[200px]">
//                 <img
//                   src="/images/boy-market.webp"
//                   className="h-full w-full object-cover rounded-t-[30px]"
//                 ></img>
//               </div>
//               <div className="content-wrap px-[30px] py-[20px]">
//                 <div className="text-wrap">
//                   <span className="text-[#0077C8] uppercase tracking-[3px]">
//                     Creative Arts | Nov 20, 2026
//                   </span>
//                   <p> 1,000 Expected</p>
//                   <h6 className="text-[black] pt-[10px]">
//                     Creative Arts & Design Summit
//                   </h6>
//                   <p className="text-[black] pt-[10px]">
//                     Lorem ipsum dolor sit amet consectetur.
//                   </p>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Platinum</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Gold</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Silver</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="btn  absolute bottom-[20px] left-[30px]">
//                 <a href="#">View Packages</a>
//               </div>
//             </div>
//           </div>
//           <div className="item w-[calc(33.33%-30px)] mx-[15px] my-[15px] rounded-[30px] bg-[#fff] relative pb-[64px]">
//             <div className="inner-content">
//               <div className="img-wrap h-[200px]">
//                 <img
//                   src="/images/Construction Outlook-2026.jpeg"
//                   className="h-full w-full object-cover rounded-t-[30px]"
//                 ></img>
//               </div>
//               <div className="content-wrap px-[30px] py-[20px]">
//                 <div className="text-wrap">
//                   <span className="text-[#0077C8] uppercase tracking-[3px]">
//                     Networking | Dec 14, 2026
//                   </span>
//                   <p> 8000 Expected</p>
//                   <h6 className="text-[black] pt-[10px]">
//                     Annual Networking Gala
//                   </h6>
//                   <p className="text-[black] pt-[10px]">
//                     Lorem ipsum dolor sit amet consectetur.
//                   </p>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Platinum</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Gold</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                   <div className="cateogry-wrap flex justify-between mt-[10px]">
//                     <h6 className="text-[black]">Silver</h6>
//                     <span className="rounded-[4px] bg-[rgba(113,197,232,0.15)] flex flex-col items-start px-[8px] py-[4px] hover:bg-[#003B5C] hover:text-[#fff]">
//                       <a href="#">Available</a>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="btn  absolute bottom-[20px] left-[30px]">
//                 <a href="#">View Packages</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//////22////////

// import React, { useEffect, useState } from "react";

// // 🔥 Mock API
// const fetchEvents = async () => {
//   return [
//     {
//       id: 1,
//       category: "Innovation | July 12, 2026",
//       title: "Innovation & Startup Expo",
//       expected: 1800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Sold Out"],
//       img: "/images/Downtown_BBVA Compass Stadium_Arial_2019_credit Bryan Malloch 2.png",
//     },
//     {
//       id: 2,
//       category: "Marathon | Aug 7, 2026",
//       title: "City Marathon 2026",
//       expected: 2500,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available", "Available"],
//       img: "/images/house-520x272.webp",
//     },
//     {
//       id: 3,
//       category: "Sustainability | Sep 8, 2026",
//       title: "Sustainability & Green Tech Forum",
//       expected: 1200,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       img: "/images/Construction Outlook-2026.jpeg",
//     },
//     {
//       id: 4,
//       category: "Finance | Oct 3, 2026",
//       title: "Financial Services Conference",
//       expected: 2000,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       img: "/images/Creator-Image-tab-grid.jpg",
//     },
//     {
//       id: 5,
//       category: "Creative Arts | Nov 20, 2024",
//       title: "Creative Arts & Design Summit",
//       expected: 1500,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       img: "/images/DudleyDash-collage 1.png",
//     },
//     {
//       id: 6,
//       category: "Networking | Dec 14, 2025",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       img: "/images/DSC00314-2.jpg",
//     },
//   ];
// };

// export default function ResourceCardGrid() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [topic, setTopic] = useState("All Topics");
//   const [statusFilter, setStatusFilter] = useState("All Status");

//   useEffect(() => {
//     fetchEvents().then(setData);
//   }, []);

//   // 🔄 Status toggle
//   const toggleStatus = (cardIndex, pkgIndex) => {
//     const updated = [...data];
//     updated[cardIndex].status[pkgIndex] =
//       updated[cardIndex].status[pkgIndex] === "Available"
//         ? "Sold Out"
//         : "Available";
//     setData(updated);
//   };

//   // 🔍 Filter
//   const filteredData = data.filter((item) => {
//     const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

//     const matchTopic = topic === "All Topics" || item.category.includes(topic);

//     const matchStatus =
//       statusFilter === "All Status" || item.status.includes(statusFilter);

//     return matchSearch && matchTopic && matchStatus;
//   });

//   return (
//     <section className="ResourceCardGrid relative bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(113,197,232,0.15)_60.5%)]">
//       <div className="container">
//         {/* 🔍 Filters */}
//         <div className="flex flex-wrap gap-[20px] mb-[30px] pt-[20px]">
//           <input
//             type="text"
//             placeholder="Search"
//             onChange={(e) => setSearch(e.target.value)}
//             className="border px-[15px] py-[8px] rounded-full"
//           />

//           <select onChange={(e) => setTopic(e.target.value)}>
//             <option>All Topics</option>
//             <option>Innovation</option>
//             <option>Marathon</option>
//             <option>Sustainability</option>
//           </select>

//           <select onChange={(e) => setStatusFilter(e.target.value)}>
//             <option>All Status</option>
//             <option>Available</option>
//             <option>Sold Out</option>
//           </select>
//         </div>

//         {/* 🧩 Cards Grid */}
//         <div className="outer-wrap flex flex-wrap w-[calc(100%+30px)] ml-[-15px]">
//           {filteredData.map((item, cardIndex) => (
//             <div
//               key={item.id}
//               className="item w-[calc(33.33%-30px)] mx-[15px] my-[15px] rounded-[30px] bg-white relative pb-[64px]"
//             >
//               <div className="inner-content">
//                 {/* Image */}
//                 <div className="img-wrap h-[200px]">
//                   <img
//                     src={item.img}
//                     className="h-full w-full object-cover rounded-t-[30px]"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="content-wrap px-[30px] py-[20px]">
//                   <div className="text-wrap">
//                     <span className="text-[#0077C8] uppercase tracking-[3px]">
//                       {item.category}
//                     </span>

//                     <p>{item.expected} Expected</p>

//                     <h6 className="text-black pt-[10px]">{item.title}</h6>

//                     <p className="text-black pt-[10px]">{item.paragraph}</p>

//                     {/* Packages */}
//                     {item.status.map((stat, i) => (
//                       <div key={i} className="flex justify-between mt-[10px]">
//                         <h6 className="text-black">
//                           {["Platinum", "Gold", "Silver", "Bronze"][i]}
//                         </h6>

//                         <span
//                           onClick={() => toggleStatus(cardIndex, i)}
//                           className={`rounded-[4px] px-[8px] py-[4px] cursor-pointer transition-all
//                           ${
//                             stat === "Sold Out"
//                               ? "bg-[#003B5C] text-white hover:bg-red-500"
//                               : "bg-[rgba(113,197,232,0.15)] hover:bg-[#003B5C] hover:text-white"
//                           }`}
//                         >
//                           {stat}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Button */}
//                 <div className="btn absolute bottom-[20px] left-[30px]">
//                   <a href="#">View Packages</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/////333333/////////

// import React, { useEffect, useState } from "react";

// // 🔥 Mock API
// const fetchEvents = async () => {
//   return [
//     {
//       id: 1,
//       category: "Innovation | July 12, 2026",
//       title: "Innovation & Startup Expo",
//       expected: 1800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Sold Out"],
//       img: "/images/Downtown_BBVA Compass Stadium_Arial_2019_credit Bryan Malloch 2.png",
//     },
//     {
//       id: 2,
//       category: "Marathon | Aug 7, 2026",
//       title: "City Marathon 2026",
//       expected: 2500,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available", "Available"],
//       img: "/images/house-520x272.webp",
//     },
//     {
//       id: 3,
//       category: "Sustainability | Sep 8, 2026",
//       title: "Sustainability & Green Tech Forum",
//       expected: 1200,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       img: "/images/Construction Outlook-2026.jpeg",
//     },
//     {
//       id: 4,
//       category: "Finance | Oct 3, 2026",
//       title: "Financial Services Conference",
//       expected: 2000,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       img: "/images/Creator-Image-tab-grid.jpg",
//     },
//     {
//       id: 5,
//       category: "Creative Arts | Nov 20, 2024",
//       title: "Creative Arts & Design Summit",
//       expected: 1500,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       img: "/images/DudleyDash-collage 1.png",
//     },
//     {
//       id: 6,
//       category: "Networking | Dec 14, 2025",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       img: "/images/DSC00314-2.jpg",
//     },
//   ];
// };

// export default function ResourceCardGrid() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [topic, setTopic] = useState("All Topics");
//   const [statusFilter, setStatusFilter] = useState("All Status");
//   const [dateRange, setDateRange] = useState("All Range");

//   useEffect(() => {
//     fetchEvents().then(setData);
//   }, []);

//   // 🔄 Status toggle
//   const toggleStatus = (cardIndex, pkgIndex) => {
//     const updated = [...data];
//     updated[cardIndex].status[pkgIndex] =
//       updated[cardIndex].status[pkgIndex] === "Available"
//         ? "Sold Out"
//         : "Available";
//     setData(updated);
//   };

//   // 📅 Date filter logic
//   const checkDateRange = (categoryText) => {
//     if (dateRange === "All Range") return true;

//     const today = new Date();
//     const datePart = categoryText.split("|")[1]?.trim();
//     if (!datePart) return true;

//     const eventDate = new Date(datePart);

//     if (dateRange === "This Month") {
//       return (
//         eventDate.getMonth() === today.getMonth() &&
//         eventDate.getFullYear() === today.getFullYear()
//       );
//     }

//     if (dateRange === "Next Month") {
//       const nextMonth = new Date();
//       nextMonth.setMonth(today.getMonth() + 1);
//       return eventDate.getMonth() === nextMonth.getMonth();
//     }

//     if (dateRange === "This Year") {
//       return eventDate.getFullYear() === today.getFullYear();
//     }

//     return true;
//   };

//   // 🔍 Filter logic
//   const filteredData = data.filter((item) => {
//     const matchSearch =
//       item.title.toLowerCase().includes(search.toLowerCase()) ||
//       item.category.toLowerCase().includes(search.toLowerCase());

//     const matchTopic = topic === "All Topics" || item.category.includes(topic);

//     const matchStatus =
//       statusFilter === "All Status" || item.status.includes(statusFilter);

//     const matchDate = checkDateRange(item.category);

//     return matchSearch && matchTopic && matchStatus && matchDate;
//   });

//   return (
//     <section className="ResourceCardGrid relative bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(113,197,232,0.15)_60.5%)]">
//       <div className="container">
//         {/* 🔍 Filters */}
//         <div className="flex flex-wrap gap-[20px] mb-[30px] pt-[20px]">
//           <input
//             type="text"
//             placeholder="Search (title, month, year...)"
//             onChange={(e) => setSearch(e.target.value)}
//             className="border px-[15px] py-[8px] rounded-full"
//           />

//           <select onChange={(e) => setTopic(e.target.value)}>
//             <option>All Topics</option>
//             <option>Innovation</option>
//             <option>Marathon</option>
//             <option>Sustainability</option>
//             <option>Finance</option>
//             <option>Creative Arts</option>
//             <option>Networking</option>
//           </select>

//           <select onChange={(e) => setStatusFilter(e.target.value)}>
//             <option>All Status</option>
//             <option>Available</option>
//             <option>Sold Out</option>
//           </select>

//           <select onChange={(e) => setDateRange(e.target.value)}>
//             <option>All Range</option>
//             <option>This Month</option>
//             <option>Next Month</option>
//             <option>This Year</option>
//           </select>
//         </div>

//         {/* 🧩 Cards */}
//         <div className="flex flex-wrap w-[calc(100%+30px)] ml-[-15px]">
//           {filteredData.map((item, cardIndex) => (
//             <div
//               key={item.id}
//               className="w-[calc(33.33%-30px)] mx-[15px] my-[15px] rounded-[30px] bg-white relative pb-[64px]"
//             >
//               <div className="inner-content">
//                 {/* Image */}
//                 <div className="h-[200px]">
//                   <img
//                     src={item.img}
//                     className="h-full w-full object-cover rounded-t-[30px]"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="px-[30px] py-[20px]">
//                   <span className="text-[#0077C8] uppercase tracking-[3px]">
//                     {item.category}
//                   </span>

//                   <p>{item.expected} Expected</p>

//                   <h6 className="pt-[10px] font-semibold">{item.title}</h6>

//                   <p className="pt-[10px]">{item.paragraph}</p>

//                   {/* Packages */}
//                   {item.status.map((stat, i) => (
//                     <div key={i} className="flex justify-between mt-[10px]">
//                       <span>{["Platinum", "Gold", "Silver", "Bronze"][i]}</span>

//                       <span
//                         onClick={() => toggleStatus(cardIndex, i)}
//                         className={`px-[8px] py-[4px] rounded cursor-pointer transition-all
//                         ${
//                           stat === "Sold Out"
//                             ? "bg-[#003B5C] text-white hover:bg-red-500"
//                             : "bg-[rgba(113,197,232,0.15)] hover:bg-[#003B5C] hover:text-white"
//                         }`}
//                       >
//                         {stat}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Button */}
//                 <div className="absolute bottom-[20px] left-[30px]">
//                   <a href="#">View Packages</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/////******** 4 *********/////////

// import React, { useEffect, useState } from "react";

// // 🔥 Mock API
// const fetchEvents = async () => {
//   return [
//     {
//       id: 1,
//       category: "Innovation | July 12, 2026",
//       title: "Innovation & Startup Expo",
//       expected: 1800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [25000, 15000, 10000],
//       img: "/images/Downtown_BBVA Compass Stadium_Arial_2019_credit Bryan Malloch 2.png",
//     },
//     {
//       id: 2,
//       category: "Marathon | Aug 7, 2026",
//       title: "City Marathon 2026",
//       expected: 2500,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available", "Available"],
//       prices: [20000, 10000, 5000, 2500],
//       img: "/images/house-520x272.webp",
//     },
//     {
//       id: 3,
//       category: "Sustainability | Sep 8, 2026",
//       title: "Sustainability & Green Tech Forum",
//       expected: 1200,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [18000, 12000, 7000],
//       img: "/images/Construction Outlook-2026.jpeg",
//     },
//     {
//       id: 4,
//       category: "Finance | Oct 3, 2026",
//       title: "Financial Services Conference",
//       expected: 2000,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [22000, 14000, 8000],
//       img: "/images/Creator-Image-tab-grid.jpg",
//     },
//     {
//       id: 5,
//       category: "Creative Arts | Nov 20, 2026",
//       title: "Creative Arts & Design Summit",
//       expected: 1500,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [16000, 9000, 4500],
//       img: "/images/DudleyDash-collage 1.png",
//     },
//     {
//       id: 6,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 7,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 8,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 9,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 10,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 11,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 12,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 13,
//       category: "Innovation | July 12, 2026",
//       title: "Innovation & Startup Expo",
//       expected: 1800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [25000, 15000, 10000],
//       img: "/images/Downtown_BBVA Compass Stadium_Arial_2019_credit Bryan Malloch 2.png",
//     },
//     {
//       id: 14,
//       category: "Marathon | Aug 7, 2026",
//       title: "City Marathon 2026",
//       expected: 2500,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available", "Available"],
//       prices: [20000, 10000, 5000, 2500],
//       img: "/images/house-520x272.webp",
//     },
//     {
//       id: 15,
//       category: "Sustainability | Sep 8, 2026",
//       title: "Sustainability & Green Tech Forum",
//       expected: 1200,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [18000, 12000, 7000],
//       img: "/images/Construction Outlook-2026.jpeg",
//     },
//     {
//       id: 16,
//       category: "Finance | Oct 3, 2026",
//       title: "Financial Services Conference",
//       expected: 2000,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [22000, 14000, 8000],
//       img: "/images/Creator-Image-tab-grid.jpg",
//     },
//     {
//       id: 17,
//       category: "Creative Arts | Nov 20, 2026",
//       title: "Creative Arts & Design Summit",
//       expected: 1500,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [16000, 9000, 4500],
//       img: "/images/DudleyDash-collage 1.png",
//     },
//     {
//       id: 18,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 19,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 20,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 21,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 22,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 23,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 24,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 25,
//       category: "Innovation | July 12, 2026",
//       title: "Innovation & Startup Expo",
//       expected: 1800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [25000, 15000, 10000],
//       img: "/images/Downtown_BBVA Compass Stadium_Arial_2019_credit Bryan Malloch 2.png",
//     },
//     {
//       id: 26,
//       category: "Marathon | Aug 7, 2026",
//       title: "City Marathon 2026",
//       expected: 2500,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available", "Available"],
//       prices: [20000, 10000, 5000, 2500],
//       img: "/images/house-520x272.webp",
//     },
//     {
//       id: 27,
//       category: "Sustainability | Sep 8, 2026",
//       title: "Sustainability & Green Tech Forum",
//       expected: 1200,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [18000, 12000, 7000],
//       img: "/images/Construction Outlook-2026.jpeg",
//     },
//     {
//       id: 28,
//       category: "Finance | Oct 3, 2026",
//       title: "Financial Services Conference",
//       expected: 2000,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [22000, 14000, 8000],
//       img: "/images/Creator-Image-tab-grid.jpg",
//     },
//     {
//       id: 29,
//       category: "Creative Arts | Nov 20, 2026",
//       title: "Creative Arts & Design Summit",
//       expected: 1500,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [16000, 9000, 4500],
//       img: "/images/DudleyDash-collage 1.png",
//     },
//     {
//       id: 30,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 31,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 32,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 33,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 34,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 35,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 36,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 37,
//       category: "Innovation | July 12, 2026",
//       title: "Innovation & Startup Expo",
//       expected: 1800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [25000, 15000, 10000],
//       img: "/images/Downtown_BBVA Compass Stadium_Arial_2019_credit Bryan Malloch 2.png",
//     },
//     {
//       id: 38,
//       category: "Marathon | Aug 7, 2026",
//       title: "City Marathon 2026",
//       expected: 2500,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available", "Available"],
//       prices: [20000, 10000, 5000, 2500],
//       img: "/images/house-520x272.webp",
//     },
//     {
//       id: 39,
//       category: "Sustainability | Sep 8, 2026",
//       title: "Sustainability & Green Tech Forum",
//       expected: 1200,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [18000, 12000, 7000],
//       img: "/images/Construction Outlook-2026.jpeg",
//     },
//     {
//       id: 40,
//       category: "Finance | Oct 3, 2026",
//       title: "Financial Services Conference",
//       expected: 2000,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [22000, 14000, 8000],
//       img: "/images/Creator-Image-tab-grid.jpg",
//     },
//     {
//       id: 41,
//       category: "Creative Arts | Nov 20, 2026",
//       title: "Creative Arts & Design Summit",
//       expected: 1500,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [16000, 9000, 4500],
//       img: "/images/DudleyDash-collage 1.png",
//     },
//     {
//       id: 42,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 43,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 44,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 45,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 46,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 47,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//     {
//       id: 48,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: 800,
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       prices: [15000, 8500, 3500],
//       img: "/images/DSC00314-2.jpg",
//     },
//   ];
// };

// export default function ResourceCardGrid() {
//   const [data, setData] = useState([]);
//   const [originalData, setOriginalData] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   const [search, setSearch] = useState("");
//   const [topic, setTopic] = useState("All Topics");
//   const [statusFilter, setStatusFilter] = useState("All Status");

//   // ✅ PAGINATION STATE
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   useEffect(() => {
//     fetchEvents().then((res) => {
//       setData(res);
//       setOriginalData(res);
//     });
//   }, []);

//   // ✅ RESET PAGE ON FILTER
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [search, topic, statusFilter]);

//   // ✅ CLICK
//   const handleClick = (cardIndex, pkgIndex) => {
//     const updated = [...data];

//     if (updated[cardIndex].status[pkgIndex] === "Available") {
//       updated[cardIndex].status[pkgIndex] = "Sold Out";

//       const packageNames = ["Platinum", "Gold", "Silver", "Bronze"];

//       setFavorites((prev) => [
//         ...prev,
//         {
//           id: Date.now(),
//           title: updated[cardIndex].title,
//           level: packageNames[pkgIndex],
//           price: updated[cardIndex].prices[pkgIndex],
//         },
//       ]);
//     }

//     setData(updated);
//   };

//   const removeFavorite = (id) => {
//     setFavorites(favorites.filter((f) => f.id !== id));
//   };

//   const clearFavorites = () => {
//     setFavorites([]);

//     const resetData = originalData.map((item) => ({
//       ...item,
//       status: [...item.status],
//     }));

//     setData(resetData);
//   };

//   const totalAmount = favorites.reduce((sum, f) => sum + f.price, 0);

//   // 🔍 FILTER
//   const filteredData = data.filter((item) => {
//     return (
//       item.title.toLowerCase().includes(search.toLowerCase()) &&
//       (topic === "All Topics" || item.category.includes(topic)) &&
//       (statusFilter === "All Status" || item.status.includes(statusFilter))
//     );
//   });

//   // ✅ PAGINATION LOGIC
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   return (
//     <section className="ResourceCardGrid relative bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(113,197,232,0.15)_60.5%)]">
//       <div className="container">
//         <h2 className="text-4xl font-bold mb-6">
//           ALL SPONSORSHIP OPPORTUNITIES
//         </h2>

//         {/* 🔍 FILTERS */}
//         <div className="flex gap-4 mb-6">
//           <input
//             placeholder="Search"
//             onChange={(e) => setSearch(e.target.value)}
//             className="border px-4 py-2"
//           />

//           <select onChange={(e) => setTopic(e.target.value)}>
//             <option>All Topics</option>
//             <option>Innovation</option>
//             <option>Marathon</option>
//             <option>Sustainability</option>
//           </select>

//           <select onChange={(e) => setStatusFilter(e.target.value)}>
//             <option>All Status</option>
//             <option>Available</option>
//             <option>Sold Out</option>
//           </select>
//         </div>

//         {/* ❤️ FAVORITES */}
//         {favorites.length > 0 && (
//           <div className="bg-white mb-6">
//             {favorites.map((f) => (
//               <div key={f.id} className="flex justify-between p-2 border-b">
//                 {f.title} | {f.level} | ${f.price}
//                 <button onClick={() => removeFavorite(f.id)}>✕</button>
//               </div>
//             ))}

//             <div className="flex justify-between p-2">
//               Total: ${totalAmount}
//               <div>
//                 <button onClick={clearFavorites}>CLEAR</button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* 🧩 CARDS */}
//         <div className="outer-wrap flex flex-wrap w-[calc(100%+30px)] ml-[-15px] ">
//           {currentItems.map((item, cardIndex) => (
//             <div key={item.id} className="w-1/3 p-4">
//               <div className="bg-white p-4 rounded">
//                 <img src={item.img} className="h-40 w-full object-cover" />

//                 <h4>{item.title}</h4>

//                 {item.status.map((stat, i) => (
//                   <div key={i} className="flex justify-between mt-2">
//                     <span>{["Platinum", "Gold", "Silver", "Bronze"][i]}</span>

//                     <span
//                       onClick={() =>
//                         handleClick(indexOfFirstItem + cardIndex, i)
//                       }
//                       className={
//                         stat === "Sold Out"
//                           ? "bg-black text-white"
//                           : "bg-gray-200"
//                       }
//                     >
//                       {stat}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* 🔢 PAGINATION */}
//         <div className="flex justify-center items-center gap-3 mt-10">
//           {/* ⬅️ PREV */}
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//             className="w-[10px] h-[10px] px-2 disabled:opacity-30 pb-[37px]"
//           >
//             ←
//           </button>

//           {/* 🔢 PAGE NUMBERS */}
//           {(() => {
//             const pages = [];

//             for (let i = 1; i <= totalPages; i++) {
//               // show first 4 pages
//               if (i <= 8) {
//                 pages.push(i);
//               }

//               // show last page
//               else if (i === totalPages) {
//                 pages.push("...");
//                 pages.push(i);
//               }
//             }

//             return pages.map((page, index) =>
//               page === "..." ? (
//                 <span key={index} className="px-2">
//                   ...
//                 </span>
//               ) : (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentPage(page)}
//                   className={`w-10 h-10  flex items-center justify-center rounded-md border
//           ${
//             currentPage === page
//               ? "border-green-500 text-green-600 font-semibold"
//               : "border-transparent"
//           }`}
//                 >
//                   {page}
//                 </button>
//               ),
//             );
//           })()}

//           {/* ➡️ NEXT */}
//           <button
//             onClick={() =>
//               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//             }
//             disabled={currentPage === totalPages}
//             className=" px-2 disabled:opacity-30 text-green-500 w-[10px] h-[10px] pb-[37px]"
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

///////******** 5 *********/////////

// import React, { useEffect, useState } from "react";

// // 🔥 Mock API (same as yours)
// const fetchEvents = async () => {
//   return [...Array(48)].map((_, i) => ({
//     id: i + 1,
//     category: "Networking | Dec 14, 2026",
//     title: "Annual Networking Gala",
//     expected: 800,
//     paragraph: "Lorem ipsum dolor sit amet consectetur.",
//     status: ["Available", "Available", "Available"],
//     prices: [15000, 8500, 3500],
//     img: "/images/DSC00314-2.jpg",
//   }));
// };

// export default function ResourceCardGrid() {
//   const [data, setData] = useState([]);
//   const [originalData, setOriginalData] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   const [search, setSearch] = useState("");
//   const [topic, setTopic] = useState("All Topics");
//   const [statusFilter, setStatusFilter] = useState("All Status");

//   // ✅ PAGINATION
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   useEffect(() => {
//     fetchEvents().then((res) => {
//       setData(res);
//       setOriginalData(res);
//     });
//   }, []);

//   // ✅ RESET PAGE
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [search, topic, statusFilter]);

//   // 🔍 FILTER
//   const filteredData = data.filter((item) => {
//     return (
//       item.title.toLowerCase().includes(search.toLowerCase()) &&
//       (topic === "All Topics" || item.category.includes(topic)) &&
//       (statusFilter === "All Status" || item.status.includes(statusFilter))
//     );
//   });

//   // ✅ PAGINATION LOGIC
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   // ✅ CLICK
//   const handleClick = (cardIndex, pkgIndex) => {
//     const updated = [...data];

//     if (updated[cardIndex].status[pkgIndex] === "Available") {
//       updated[cardIndex].status[pkgIndex] = "Sold Out";

//       const packageNames = ["Platinum", "Gold", "Silver", "Bronze"];

//       setFavorites((prev) => [
//         ...prev,
//         {
//           id: Date.now(),
//           title: updated[cardIndex].title,
//           level: packageNames[pkgIndex],
//           price: updated[cardIndex].prices[pkgIndex],
//         },
//       ]);
//     }

//     setData(updated);
//   };

//   return (
//     <section className="ResourceCardGrid relative bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(113,197,232,0.15)_60.5%)]">
//       <div className="container">
//         {/* 🔍 FILTERS (same) */}
//         <h2 className=" text-center mb-[20px]">
//           All Sponsorship Opportunities
//         </h2>
//         <div className="flex gap-4 mb-6">
//           <input
//             placeholder="Search"
//             onChange={(e) => setSearch(e.target.value)}
//             className="border px-4 py-2"
//           />

//           <select onChange={(e) => setTopic(e.target.value)}>
//             <option>All Topics</option>
//             <option>Innovation</option>
//             <option>Marathon</option>
//             <option>Sustainability</option>
//           </select>

//           <select onChange={(e) => setStatusFilter(e.target.value)}>
//             <option>All Status</option>
//             <option>Available</option>
//             <option>Sold Out</option>
//           </select>
//         </div>

//         {/* 🧩 CARDS (YOUR SAME UI) */}
//         <div className="outer-wrap flex flex-wrap w-[calc(100%+30px)] ml-[-15px] ">
//           {currentItems.map((item, cardIndex) => (
//             <div
//               key={item.id}
//               className="item w-[calc(33.33%-30px)] mx-[15px] my-[15px] rounded-[30px] bg-[#fff] relative pb-[64px]"
//             >
//               <div className="inner-content">
//                 <div className="img-wrap h-[200px]">
//                   <img
//                     src={item.img}
//                     className="h-full w-full object-cover rounded-t-[30px]"
//                   />
//                 </div>

//                 <div className="content-wrap px-[30px] py-[20px]">
//                   <span className="text-[#0077C8] uppercase tracking-[3px]">
//                     {item.category}
//                   </span>

//                   <p>{item.expected} Expected</p>

//                   <h6 className="pt-[10px]">{item.title}</h6>

//                   <p className="pt-[10px]">{item.paragraph}</p>

//                   {item.status.map((stat, i) => (
//                     <div key={i} className="flex justify-between mt-[10px]">
//                       <span>{["Platinum", "Gold", "Silver"][i]}</span>

//                       <span
//                         onClick={() =>
//                           handleClick(indexOfFirstItem + cardIndex, i)
//                         }
//                         className={`px-[8px] py-[4px] cursor-pointer rounded ${
//                           stat === "Sold Out"
//                             ? "bg-[#003B5C] text-white"
//                             : "bg-gray-200"
//                         }`}
//                       >
//                         {stat}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="btn absolute bottom-[20px] left-[30px]">
//                   <a href="#">View Packages</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* 🔢 PAGINATION (LIKE YOUR IMAGE) */}
//         <div className="flex justify-center items-center gap-3 mt-10">
//           {/* ⬅️ PREV */}
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//             className="text-2xl px-2 disabled:opacity-30"
//           >
//             ←
//           </button>

//           {/* 🔢 NUMBERS */}
//           {(() => {
//             const pages = [];

//             for (let i = 1; i <= totalPages; i++) {
//               if (i <= 8) {
//                 pages.push(i);
//               } else if (i === totalPages) {
//                 pages.push("...");
//                 pages.push(i);
//               }
//             }

//             return pages.map((page, index) =>
//               page === "..." ? (
//                 <span key={index}>...</span>
//               ) : (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentPage(page)}
//                   className={`w-10 h-10 flex items-center justify-center rounded-md border ${
//                     currentPage === page
//                       ? "border-green-500 text-green-600 font-semibold"
//                       : "border-transparent"
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ),
//             );
//           })()}

//           {/* ➡️ NEXT */}
//           <button
//             onClick={() =>
//               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//             }
//             disabled={currentPage === totalPages}
//             className="text-2xl px-2 disabled:opacity-30 text-green-500"
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

/////////// 7 //////////////////////////////

// import React, { useEffect, useState } from "react";

// // 🔥 SAME DATA
// const fetchEvents = async () => {
//   return [
//     {
//       id: 1,
//       category: "Innovation | July 12, 2026",
//       title: "Innovation & Startup Expo",
//       expected: "1,800",
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       img: "/images/Downtown_BBVA Compass Stadium_Arial_2019_credit Bryan Malloch 2.png",
//     },
//     {
//       id: 2,
//       category: "Marathon | Aug 7, 2026",
//       title: "City Marathon 2026",
//       expected: "2,500",
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available", "Available"],
//       img: "/images/house-520x272.webp",
//     },
//     {
//       id: 3,
//       category: "Sustainability | Sep 8, 2026",
//       title: "Sustainability & Green Tech Forum",
//       expected: "1,200",
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       img: "/images/Construction Outlook-2026.jpeg",
//     },
//     {
//       id: 4,
//       category: "Finance | Oct 3, 2026",
//       title: "Financial Services Conference",
//       expected: "2,000",
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       img: "/images/091116_dabfoto_ghp_Sm_round_1018 1.png",
//     },
//     {
//       id: 5,
//       category: "Creative Arts | Nov 20, 2026",
//       title: "Creative Arts & Design Summit",
//       expected: "1,000",
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       img: "/images/boy-market.webp",
//     },
//     {
//       id: 6,
//       category: "Networking | Dec 14, 2026",
//       title: "Annual Networking Gala",
//       expected: "800",
//       paragraph: "Lorem ipsum dolor sit amet consectetur.",
//       status: ["Available", "Available", "Available"],
//       img: "/images/Construction Outlook-2026.jpeg",
//     },

//     ...Array(30)
//       .fill(0)
//       .map((_, i) => ({
//         id: i + 7,
//         category: "Networking | Dec 14, 2026",
//         title: "Annual Networking Gala",
//         expected: "800",
//         paragraph: "Lorem ipsum dolor sit amet consectetur.",
//         status: ["Available", "Available", "Available"],
//         img: "/images/DSC00314-2.jpg",
//       })),
//   ];
// };

// export default function ResourceCardGrid() {
//   const [data, setData] = useState([]);

//   // ✅ FILTER STATES
//   const [search, setSearch] = useState("");
//   const [topic, setTopic] = useState("All Topics");
//   const [statusFilter, setStatusFilter] = useState("All Status");
//   const [dateRange, setDateRange] = useState("All Range");

//   // ✅ PAGINATION
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   useEffect(() => {
//     fetchEvents().then((res) => setData(res));
//   }, []);

//   // 🔁 STATUS TOGGLE
//   const handleStatusToggle = (itemIndex, statusIndex) => {
//     const updatedData = [...data];

//     const currentStatus = updatedData[itemIndex].status[statusIndex];

//     updatedData[itemIndex].status[statusIndex] =
//       currentStatus === "Available" ? "Sold Out" : "Available";

//     setData(updatedData);
//   };

//   // 📅 Extract Date
//   const extractDate = (category) => {
//     const parts = category.split("|");
//     if (parts.length < 2) return null;
//     return new Date(parts[1].trim());
//   };

//   // 📅 Date Range Logic
//   const checkDateInRange = (itemDate) => {
//     const today = new Date();

//     if (dateRange === "This Month") {
//       return (
//         itemDate.getMonth() === today.getMonth() &&
//         itemDate.getFullYear() === today.getFullYear()
//       );
//     }

//     if (dateRange === "Next Month") {
//       const nextMonth = new Date(today);
//       nextMonth.setMonth(today.getMonth() + 1);

//       return (
//         itemDate.getMonth() === nextMonth.getMonth() &&
//         itemDate.getFullYear() === nextMonth.getFullYear()
//       );
//     }

//     return true;
//   };

//   // ✅ FILTER LOGIC
//   const filteredData = data.filter((item) => {
//     const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

//     const matchTopic = topic === "All Topics" || item.category.includes(topic);

//     const matchStatus =
//       statusFilter === "All Status" || item.status.includes(statusFilter);

//     const itemDate = extractDate(item.category);
//     const matchDate = itemDate ? checkDateInRange(itemDate) : true;

//     return matchSearch && matchTopic && matchStatus && matchDate;
//   });

//   // ✅ PAGINATION
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;

//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   return (
//     <section className="ResourceCardGrid relative bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(113,197,232,0.15)_60.5%)]">
//       <div className="container">
//         {/* 🔍 FILTERS */}
//         <div className="flex gap-4 mb-6 px-[15px]">
//           <input
//             placeholder="Search"
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="border px-4 py-2"
//           />

//           <select
//             value={topic}
//             onChange={(e) => {
//               setTopic(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="border px-4 py-2"
//           >
//             <option>All Topics</option>
//             <option>Innovation</option>
//             <option>Marathon</option>
//             <option>Sustainability</option>
//             <option>Finance</option>
//             <option>Creative Arts</option>
//             <option>Networking</option>
//           </select>

//           <select
//             value={statusFilter}
//             onChange={(e) => {
//               setStatusFilter(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="border px-4 py-2"
//           >
//             <option>All Status</option>
//             <option>Available</option>
//             <option>Sold Out</option>
//           </select>

//           {/* 📅 DATE RANGE */}
//           <select
//             value={dateRange}
//             onChange={(e) => {
//               setDateRange(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="border px-4 py-2"
//           >
//             <option>All Range</option>
//             <option>This Month</option>
//             <option>Next Month</option>
//           </select>
//         </div>

//         {/* 🧩 CARDS */}
//         <div className="outer-wrap flex flex-wrap w-[calc(100%+30px)] ml-[-15px] ">
//           {currentItems.map((item, index) => {
//             const realIndex = indexOfFirstItem + index;

//             return (
//               <div
//                 key={item.id}
//                 className="item w-[calc(33.33%-30px)] mx-[15px] my-[15px] rounded-[30px] bg-[#fff] relative pb-[64px]"
//               >
//                 <div className="inner-content">
//                   <div className="img-wrap h-[200px]">
//                     <img
//                       src={item.img}
//                       className="h-full w-full object-cover rounded-t-[30px]"
//                     />
//                   </div>

//                   <div className="content-wrap px-[30px] py-[20px]">
//                     <div className="text-wrap">
//                       <span className="text-[#0077C8] uppercase tracking-[4px]">
//                         {item.category}
//                       </span>

//                       <p>{item.expected} Expected</p>

//                       <h6 className="text-[black] pt-[10px]">{item.title}</h6>

//                       <p className="text-[black] pt-[10px]">{item.paragraph}</p>

//                       {item.status.map((stat, i) => (
//                         <div
//                           key={i}
//                           className="cateogry-wrap flex justify-between mt-[10px]"
//                         >
//                           <h6 className="text-[black]">
//                             {["Platinum", "Gold", "Silver", "Bronze"][i]}
//                           </h6>

//                           <span
//                             onClick={() => handleStatusToggle(realIndex, i)}
//                             className={`rounded-[4px] px-[8px] py-[4px] cursor-pointer ${
//                               stat === "Sold Out"
//                                 ? "bg-black text-white"
//                                 : "bg-[rgba(113,197,232,0.15)] hover:bg-[#003B5C] hover:text-[#fff]"
//                             }`}
//                           >
//                             {stat}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="btn absolute bottom-[20px] left-[30px]">
//                     <a href="#">View Packages</a>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* 🔢 PAGINATION */}
//         <div className="flex justify-center items-center gap-3 mt-10">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//             className="text-2xl px-2"
//           >
//             ←
//           </button>

//           {(() => {
//             const pages = [];

//             for (let i = 1; i <= totalPages; i++) {
//               if (i <= 6) pages.push(i);
//               else if (i === totalPages) {
//                 pages.push("...");
//                 pages.push(i);
//               }
//             }

//             return pages.map((p, i) =>
//               p === "..." ? (
//                 <span key={i}>...</span>
//               ) : (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentPage(p)}
//                   className={`w-10 h-10 flex items-center justify-center rounded-md border ${
//                     currentPage === p
//                       ? "border-green-500 text-green-600"
//                       : "border-transparent"
//                   }`}
//                 >
//                   {p}
//                 </button>
//               ),
//             );
//           })()}

//           <button
//             onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//             className="text-2xl px-2 text-green-500"
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";

// 🔥 SAME DATA
const fetchEvents = async () => {
  return [
    {
      id: 1,
      category: "Innovation | July 12, 2026",
      title: "Innovation & Startup Expo",
      expected: "1,800",
      paragraph: "Lorem ipsum dolor sit amet consectetur.",
      status: ["Available", "Available", "Available"],
      img: "/images/Downtown_BBVA Compass Stadium_Arial_2019_credit Bryan Malloch 2.png",
    },
    {
      id: 2,
      category: "Marathon | Aug 7, 2026",
      title: "City Marathon 2026",
      expected: "2,500",
      paragraph: "Lorem ipsum dolor sit amet consectetur.",
      status: ["Available", "Available", "Available", "Available"],
      img: "/images/house-520x272.webp",
    },
    {
      id: 3,
      category: "Sustainability | Sep 8, 2026",
      title: "Sustainability & Green Tech Forum",
      expected: "1,200",
      paragraph: "Lorem ipsum dolor sit amet consectetur.",
      status: ["Available", "Available", "Available"],
      img: "/images/Construction Outlook-2026.jpeg",
    },
    {
      id: 4,
      category: "Finance | Oct 3, 2026",
      title: "Financial Services Conference",
      expected: "2,000",
      paragraph: "Lorem ipsum dolor sit amet consectetur.",
      status: ["Available", "Available", "Available"],
      img: "/images/091116_dabfoto_ghp_Sm_round_1018 1.png",
    },
    {
      id: 5,
      category: "Creative Arts | Nov 20, 2026",
      title: "Creative Arts & Design Summit",
      expected: "1,000",
      paragraph: "Lorem ipsum dolor sit amet consectetur.",
      status: ["Available", "Available", "Available"],
      img: "/images/boy-market.webp",
    },
    {
      id: 6,
      category: "Networking | Dec 14, 2026",
      title: "Annual Networking Gala",
      expected: "800",
      paragraph: "Lorem ipsum dolor sit amet consectetur.",
      status: ["Available", "Available", "Available"],
      img: "/images/Construction Outlook-2026.jpeg",
    },

    ...Array(30)
      .fill(0)
      .map((_, i) => ({
        id: i + 7,
        category: "Networking | Dec 14, 2026",
        title: "Annual Networking Gala",
        expected: "800",
        paragraph: "Lorem ipsum dolor sit amet consectetur.",
        status: ["Available", "Available", "Available"],
        img: "/images/DSC00314-2.jpg",
      })),
  ];
};

export default function ResourceCardGrid() {
  const [data, setData] = useState([]);

  // FILTER STATES
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("All Topics");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [dateRange, setDateRange] = useState("All Range");

  // FAVORITES
  const [favorites, setFavorites] = useState([]);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetchEvents().then((res) => setData(res));
  }, []);

  // STATUS TOGGLE
  const handleStatusToggle = (itemIndex, statusIndex) => {
    const updatedData = [...data];

    const currentStatus = updatedData[itemIndex].status[statusIndex];
    const newStatus = currentStatus === "Available" ? "Sold Out" : "Available";

    updatedData[itemIndex].status[statusIndex] = newStatus;

    const levels = ["Platinum", "Gold", "Silver", "Bronze"];
    const prices = [50000, 25000, 10000, 5000];
    const item = updatedData[itemIndex];

    if (newStatus === "Sold Out") {
      const favItem = {
        id: `${item.id}-${statusIndex}`,
        title: item.title,
        level: levels[statusIndex],
        price: prices[statusIndex],
      };

      setFavorites((prev) => {
        const exists = prev.find((f) => f.id === favItem.id);
        return exists ? prev : [...prev, favItem];
      });
    } else {
      setFavorites((prev) =>
        prev.filter((f) => f.id !== `${item.id}-${statusIndex}`),
      );
    }

    setData(updatedData);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  const clearFavorites = () => setFavorites([]);

  const totalAmount = favorites.reduce((sum, f) => sum + f.price, 0);

  // DATE FILTER
  const extractDate = (category) => {
    const parts = category.split("|");
    return parts[1] ? new Date(parts[1].trim()) : null;
  };

  const checkDateInRange = (itemDate) => {
    const today = new Date();

    if (dateRange === "This Month") {
      return itemDate.getMonth() === today.getMonth();
    }

    if (dateRange === "Next Month") {
      const next = new Date();
      next.setMonth(today.getMonth() + 1);
      return itemDate.getMonth() === next.getMonth();
    }

    return true;
  };

  // FILTER
  const filteredData = data.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchTopic = topic === "All Topics" || item.category.includes(topic);
    const matchStatus =
      statusFilter === "All Status" || item.status.includes(statusFilter);

    const itemDate = extractDate(item.category);
    const matchDate = itemDate ? checkDateInRange(itemDate) : true;

    return matchSearch && matchTopic && matchStatus && matchDate;
  });

  // PAGINATION
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <section className="ResourceCardGrid relative bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(113,197,232,0.15)_60.5%)]">
      <div className="container">
        {/* FILTERS */}
        <div className="flex gap-4 mb-6 px-[15px]">
          <input
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-4 py-2 border-[2px] border-black rounded-[30px]"
          />

          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="border-b border-[#E3E3E3] px-4 py-2"
          >
            <option>All Topics</option>
            <option>Innovation</option>
            <option>Marathon</option>
            <option>Sustainability</option>
            <option>Finance</option>
            <option>Creative Arts</option>
            <option>Networking</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className=" px-4 py-2 border-b border-[#E3E3E3]"
          >
            <option>All Status</option>
            <option>Available</option>
            <option>Sold Out</option>
          </select>

          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="border-b border-[#E3E3E3] px-4 py-2"
          >
            <option>All Range</option>
            <option>This Month</option>
            <option>Next Month</option>
          </select>
        </div>

        {/* FAVORITES */}
        {favorites.length > 0 && (
          <div className="px-[15px] mb-6">
            <h3 className="text-2xl font-bold mb-3">Your Favorites</h3>

            {favorites.map((f) => (
              <div key={f.id} className="flex justify-between border-b py-2">
                <span>
                  {f.title} | {f.level} | ${f.price}
                </span>
                <button onClick={() => removeFavorite(f.id)}>✕</button>
              </div>
            ))}

            <div className="mt-3 p-2 bg-gray-200">
              Total | {favorites.length} items | ${totalAmount}
            </div>

            <div className="mt-3 flex gap-3">
              <button className="bg-green-400 px-4 py-2">
                REQUEST SPONSORSHIP
              </button>

              <button onClick={clearFavorites}>CLEAR ✕</button>
            </div>
          </div>
        )}

        {/* CARDS */}
        <div className="outer-wrap flex flex-wrap w-[calc(100%+30px)] ml-[-15px] ">
          {currentItems.map((item, index) => {
            const realIndex = indexOfFirstItem + index;

            return (
              <div
                key={item.id}
                className="item w-[calc(33.33%-30px)] mx-[15px] my-[15px] rounded-[30px] bg-[#fff] relative pb-[64px]"
              >
                <div className="inner-content">
                  <div className="img-wrap h-[200px]">
                    <img
                      src={item.img}
                      className="h-full w-full object-cover rounded-t-[30px]"
                    />
                  </div>

                  <div className="content-wrap px-[30px] py-[20px]">
                    <span className="text-[#0077C8] uppercase tracking-[4px]">
                      {item.category}
                    </span>

                    <p>{item.expected} Expected</p>
                    <h6 className="pt-[10px]">{item.title}</h6>
                    <p className="pt-[10px]">{item.paragraph}</p>

                    {item.status.map((stat, i) => (
                      <div key={i} className="flex justify-between mt-[10px]">
                        <h6>{["Platinum", "Gold", "Silver", "Bronze"][i]}</h6>

                        <span
                          onClick={() => handleStatusToggle(realIndex, i)}
                          className={`px-[8px] py-[4px] cursor-pointer ${
                            stat === "Sold Out"
                              ? "bg-black text-white"
                              : "bg-gray-200"
                          }`}
                        >
                          {stat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-3 mt-10">
          <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
            ←
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button key={p} onClick={() => setCurrentPage(p)}>
              {p}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
