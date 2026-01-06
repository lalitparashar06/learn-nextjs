// import styles from "@/styles/TabsWithAccordion.module.css";
// import React from "react";
// export default function TabsWithAccordion() {
//   return (
//     <section className="TabsWithAccordion bg-[#756666]">
//       <div className="container">
//         <div className="intro text-center">
//           <h3 className="text-[#fff] pb-[50px]">Frequently Asked Questions</h3>
//         </div>
//         <div className="nestedaccordion">
//           <h3
//             className={` ${styles.h3} relative mb-[25px] pl-[55px] cursor-pointer capitalize`}
//           >
//             Content A
//           </h3>
//           <div className="row-outer">
//             <div className="accordion-item">
//               <h4>Content 1</h4>
//               <div className="panel">
//                 <div className="body-wrap">
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import styles from "@/styles/TabsWithAccordion.module.css";

export default function TabsWithAccordion() {
  const [isH3Active, setIsH3Active] = useState(false);
  const [isH4Active, setIsH4Active] = useState(false);
  const [isH3BActive, setIsH3BActive] = useState(false);
  const [isH4BActive, setIsH4BActive] = useState(false);

  //************** Content C ****************/
  const [isH3CActive, setIsH3CActive] = useState(false);
  const [isH4CActive, setIsH4CActive] = useState(false);

  //************** Content C ****************/
  const [isH3DActive, setIsH3DActive] = useState(false);
  const [isH4DActive, setIsH4DActive] = useState(false);

  return (
    <section className="TabsWithAccordion bg-[#000000]">
      <div className="container">
        <div className="intro text-center">
          <h3 className="text-[#fff] pb-[50px]">Frequently Asked Questions</h3>
        </div>
        <div className="nestedaccordion">
          <h3
            className={`${styles.h3} ${
              isH3Active ? styles.active : ""
            } relative mb-[25px] pl-[55px] cursor-pointer capitalize text-[#fff]`}
            onClick={() => {
              setIsH3Active(!isH3Active);
              setIsH4Active(false); // parent बंद हो तो child भी बंद
            }}
          >
            Content A
          </h3>

          {isH3Active && (
            <div className="row-outer max-w-[900px] ml-[300px]  mt-[50px] mb-[30px] sm:ml-[90px]">
              <div className="accordion-item ">
                <h4
                  className={`${styles.h4} ${
                    isH4Active ? styles.active : ""
                  } relative mb-[25px] pl-[55px]  cursor-pointer capitalize text-[#fff]`}
                  onClick={() => setIsH4Active(!isH4Active)}
                >
                  Content 1
                </h4>
                {isH4Active && (
                  <div className="panel">
                    <div className="body-wrap mt-[20px] ml-[50px]">
                      <p className="text-[#fff]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="nestedaccordion">
          <h3
            className={`${styles.h3} ${
              isH3BActive ? styles.active : ""
            } relative mb-[25px] pl-[55px] cursor-pointer capitalize text-[#fff]`}
            onClick={() => {
              setIsH3BActive(!isH3BActive);
              setIsH4BActive(false);
            }}
          >
            Content B
          </h3>

          {isH3BActive && (
            <div className="row-outer max-w-[900px] ml-[300px] mt-[50px]  mb-[30px] sm:ml-[90px]">
              <div className="accordion-item">
                <h4
                  className={`${styles.h4} ${
                    isH4BActive ? styles.active : ""
                  } relative mb-[25px] pl-[55px] cursor-pointer capitalize text-[#fff]`}
                  onClick={() => setIsH4BActive(!isH4BActive)}
                >
                  Content 2
                </h4>

                {isH4BActive && (
                  <div className="panel">
                    <div className="body-wrap mt-[20px] ml-[50px]">
                      <li className="text-[#fff] text-[18px]">
                        This is Content B description.
                      </li>
                      <li className="text-[#fff] text-[18px]">
                        This is Content B description.
                      </li>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="nestedaccordion">
          <h3
            className={`${styles.h3} ${
              isH3CActive ? styles.active : ""
            } relative mb-[25px] pl-[55px] cursor-pointer capitalize text-[#fff]`}
            onClick={() => {
              setIsH3CActive(!isH3CActive);
              setIsH4CActive(false); // parent बंद हो तो child भी बंद
            }}
          >
            Content C
          </h3>

          {isH3CActive && (
            <div className="row-outer max-w-[900px] ml-[300px] mt-[50px]  mb-[30px] sm:ml-[90px]">
              <div className="accordion-item">
                <h4
                  className={`${styles.h4} ${
                    isH4CActive ? styles.active : ""
                  } relative mb-[25px] pl-[55px] cursor-pointer capitalize text-[#fff]`}
                  onClick={() => setIsH4CActive(!isH4CActive)}
                >
                  Content 3
                </h4>

                {isH4CActive && (
                  <div className="panel">
                    <div className="body-wrap mt-[20px] ml-[50px]">
                      <p className="text-[#fff]">
                        This is Content C description.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="nestedaccordion">
          {/* ===== CONTENT D ===== */}
          <h3
            className={`${styles.h3} ${
              isH3DActive ? styles.active : ""
            } relative mb-[25px] pl-[55px] cursor-pointer capitalize text-[#fff]`}
            onClick={() => {
              setIsH3DActive(!isH3DActive);
              setIsH4DActive(false); // parent बंद हो तो child भी बंद
            }}
          >
            Content D
          </h3>

          {isH3DActive && (
            <div className="row-outer max-w-[900px] ml-[300px] mt-[50px  mb-[30px] sm:ml-[90px]">
              <div className="accordion-item">
                <h4
                  className={`${styles.h4} ${
                    isH4DActive ? styles.active : ""
                  } relative mb-[25px] pl-[55px] cursor-pointer capitalize text-[#fff]`}
                  onClick={() => setIsH4DActive(!isH4DActive)}
                >
                  Content 4
                </h4>

                {isH4DActive && (
                  <div className="panel">
                    <div className="body-wrap mt-[20px] ml-[50px]">
                      <p className="text-[#fff]">
                        This is Content D description.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
