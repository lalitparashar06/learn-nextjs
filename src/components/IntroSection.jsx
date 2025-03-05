import React from "react";

export default function IntroSection() {
  return (
    <section className="IntroSection relative  bg-blue-950 pt-[134px] pb-[110px] ">
      <div className="container">
        <div className="content-wrap text-center max-w-[1158px] m-auto">
          <ul className="icon-wrap mb-[15px] flex justify-center">
            <li className="max-w-[55px] max-h-[55px] list-none mx-[20px] my-[0]">
              <img src="/images/blue.png"></img>
            </li>
            <li className="max-w-[55px] max-h-[55px] list-none mx-[20px] my-[0]">
              <img src="/images/blue.png"></img>
            </li>
            <li className="max-w-[55px] max-h-[55px] list-none mx-[20px] my-[0]">
              <img src="/images/blue.png"></img>
            </li>
            <li className="max-w-[55px] max-h-[55px] list-none mx-[20px] my-[0]">
              <img src="/images/blue.png"></img>
            </li>
            <li className="max-w-[55px] max-h-[55px] list-none mx-[20px] my-[0]">
              <img src="/images/blue.png"></img>
            </li>
          </ul>
          <h3 className="text-white">WHITE-GLOVE SERVICE</h3>
          <p className="text-white">
            Veritone Licensing has had many names over the years, Thought Equity
            Motion, T3Media, and Wazee Digital, but our commitment to providing
            white-glove service has never changed.
          </p>
        </div>
      </div>
    </section>
  );
}
