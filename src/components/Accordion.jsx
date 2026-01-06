// import React from "react";
// import styles from "@/styles/Accordion.module.css";
// export default function Accordion() {
//   return (
//     <section className="Accordion bg-[#756666]">
//       <div className="container">
//         <div className="intro text-center">
//           <h2 className="text-[#fff] pb-[50px]">Frequently Asked Questions</h2>
//         </div>

//         <div className="row-outer mb-[20px]">
//           <h3
//             className={`${styles.h3} relative mb-[25px]  cursor-pointer capitalize `}
//           >
//             Can I change my plan later on?
//             <span className="arrow Accordian-module__yg_AxW__arrow absolute top-[50%] right-[0] w-[15px] h-[15px] border-[4px] border-[solid] border-#fff border-t-0 border-l-0 transition-transform duration-300 ease-in-out rotate-45"></span>
//           </h3>
//           <div className="accordion-item">
//             <p>
//               Absolutely! You can upgrade or downgrade your plan anytime. The
//               money paid for the previous subscription will be recalculated to
//               the new plan.
//             </p>
//           </div>
//         </div>
//         <div className="row-outer mb-[20px]">
//           <h3 className="relative mb-[25px]  cursor-pointer capitalize ">
//             Will you renew my subscription automatically?
//           </h3>
//           <div className="accordion-item">
//             <p>
//               Yes, your subscription will be automatically renewed according to
//               your pay period.
//             </p>
//           </div>
//         </div>
//         <div className="row-outer mb-[20px]">
//           <h3 className="relative mb-[25px]  cursor-pointer capitalize ">
//             Do you offer any discounts?
//           </h3>
//           <div className="accordion-item">
//             <p>
//               Yes! We offer 17% discount for payment per year. There may be
//               other temporary discounts, check for this inside the service.
//             </p>
//           </div>
//         </div>
//         <div className="row-outer mb-[20px]">
//           <h3 className="relative mb-[25px]  cursor-pointer capitalize ">
//             Can I request a refund?
//           </h3>
//           <div className="accordion-item">
//             <p>
//               Sure, you will be welcome to request your refund within 14 days of
//               subscribing to any paid plan.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import styles from "@/styles/Accordion.module.css";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="Accordion bg-[#000000]">
      <div className="container">
        <div className="intro text-center">
          <h2 className="text-[#fff] pb-[50px]">Frequently Asked Questions</h2>
        </div>

        <div className="wrapper bg-[#cad6ed] p-[30px] rounded-[20px]">
          {/* 1 */}
          <div className="row-outer mb-[20px]">
            <h3
              onClick={() => toggleAccordion(0)}
              className={`${
                styles.h3
              } relative mb-[25px] cursor-pointer capitalize md:pl-[30px] ${
                activeIndex === 0 ? styles.active : ""
              }`}
            >
              Can I change my plan later on?
            </h3>

            {activeIndex === 0 && (
              <div className="accordion-item">
                <p>
                  Absolutely! You can upgrade or downgrade your plan anytime.
                </p>
              </div>
            )}
          </div>

          {/* 2 */}
          <div className="row-outer mb-[20px]">
            <h3
              onClick={() => toggleAccordion(1)}
              className={`${
                styles.h3
              } relative mb-[25px] cursor-pointer capitalize md:pl-[30px] ${
                activeIndex === 1 ? styles.active : ""
              }`}
            >
              Will you renew my subscription automatically?
            </h3>

            {activeIndex === 1 && (
              <div className="accordion-item">
                <p>Yes, your subscription will be automatically renewed.</p>
              </div>
            )}
          </div>

          {/* 3 */}
          <div className="row-outer mb-[20px]">
            <h3
              onClick={() => toggleAccordion(2)}
              className={`${
                styles.h3
              } relative mb-[25px] cursor-pointer capitalize md:pl-[30px] ${
                activeIndex === 2 ? styles.active : ""
              }`}
            >
              Do you offer any discounts?
            </h3>

            {activeIndex === 2 && (
              <div className="accordion-item">
                <p>Yes! We offer 17% discount for yearly payment.</p>
              </div>
            )}
          </div>

          {/* 4 */}
          <div className="row-outer mb-[20px]">
            <h3
              onClick={() => toggleAccordion(3)}
              className={`${
                styles.h3
              } relative mb-[25px] cursor-pointer capitalize md:pl-[30px] ${
                activeIndex === 3 ? styles.active : ""
              }`}
            >
              Can I request a refund?
            </h3>

            {activeIndex === 3 && (
              <div className="accordion-item">
                <p>Refund can be requested within 14 days.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
