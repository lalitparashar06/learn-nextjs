// import React from "react";
// export default function Counter() {
//   return (
//     <section class="Counter bg-[#000000] ">
//       <div className="container">
//         <h3 className="heading text-center text-[#ffffff]">
//           Our Achievements in Numbers
//         </h3>
//         <div className="row-outer  mt-[30px] flex flex-wrap w-[calc(100%-20px)] text-center ">
//           <div className="counter-item  w-[calc(33.33%-20px)] mx-[10px] p-[20px] mb-[20px]">
//             <div className="counter-wrap text-[#fff]">
//               <span className="counter-module mb-[10px] text-[48px]">
//                 <span>75</span>+
//               </span>
//               <p className="pt-[10px]">Projects Completed</p>
//             </div>
//           </div>
//           <div className="counter-item  w-[calc(33.33%-20px)] mx-[10px] p-[20px] mb-[20px]">
//             <div className="counter-wrap text-[#fff]">
//               <span className="counter-module  mb-[10px] text-[48px]">
//                 <span>50</span>+
//               </span>
//               <p className="pt-[10px]">Happy Clients</p>
//             </div>
//           </div>
//           <div className="counter-item  w-[calc(33.33%-20px)] mx-[10px] p-[20px] mb-[20px]">
//             <div className="counter-wrap text-[#fff]">
//               <span className="counter-module  mb-[10px] text-[48px]">
//                 <span>10</span>+
//               </span>
//               <p className="pt-[10px]">Years of Experience</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect } from "react";

export default function Counter() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter-module span");

    counters.forEach((counter) => {
      const target = +counter.innerText;
      counter.innerText = "0";

      const updateCounter = () => {
        const current = +counter.innerText;
        const increment = Math.ceil(target / 100);

        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(updateCounter, 30);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }, []);

  return (
    <section className="Counter bg-[#000000]">
      <div className="container">
        <h3 className="heading text-center text-[#ffffff]">
          Our Achievements in Numbers
        </h3>

        <div className="row-outer mt-[30px] flex flex-wrap w-[calc(100%-20px)] text-center lg:justify-center">
          <div className="counter-item w-[calc(33.33%-20px)] mx-[10px] p-[20px] mb-[20px]   lg:w-[calc(100%-20px)]   sm:w-[calc(100%-20px)]">
            <div className="counter-wrap text-[#fff]">
              <span className="counter-module mb-[10px] text-[48px]">
                <span>75</span>+
              </span>
              <p className="pt-[10px]">Projects Completed</p>
            </div>
          </div>

          <div className="counter-item w-[calc(33.33%-20px)] mx-[10px] p-[20px] mb-[20px] lg:w-[calc(100%-20px)] sm:w-full">
            <div className="counter-wrap text-[#fff]">
              <span className="counter-module mb-[10px] text-[48px]">
                <span>50</span>+
              </span>
              <p className="pt-[10px]">Happy Clients</p>
            </div>
          </div>

          <div className="counter-item w-[calc(33.33%-20px)] mx-[10px] p-[20px] mb-[20px] lg:w-[calc(100%-20px)] sm:w-full">
            <div className="counter-wrap text-[#fff]">
              <span className="counter-module mb-[10px] text-[48px]">
                <span>10</span>+
              </span>
              <p className="pt-[10px]">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
