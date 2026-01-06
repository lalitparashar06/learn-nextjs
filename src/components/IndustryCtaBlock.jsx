import styles from "@/styles/IndustryCtaBlock.module.css";
export default function IndustryCtaBlock() {
  return (
    <section className="IndustryCtaBLock">
      <div className="container">
        <div className={`outerWrap ${styles.outerWrap} relative mb-[30px]`}>
          <div className="bg-img absolute left-0 w-[100%] h-[100%] overflow-hidden ">
            <img
              src="/images/fingerprint.jpg"
              className="w-[100%] h-[100%]"
            ></img>
          </div>
          <div className="content-wrap max-w-full relative z-[1] py-[120px] px-[30px] phablet:pt-[97px] phablet:pr-[30px] phablet:pb-[100px] phablet:pl-[30px]">
            <h2 className="font-bold tracking-normal text-left text-white">
              Cybersecurity
            </h2>
            <div className="btn-wrap mt-[30px]">
              <a
                href="#"
                className="text-[#ff1f1f] cursor-pointer bg-[transparent]"
              >
                Let’s Work Together
              </a>
            </div>
          </div>
        </div>
        <div className={`outerWrap ${styles.outerWrap} relative `}>
          <div className="bg-img absolute left-0 w-[100%] h-[100%] overflow-hidden ">
            <img src="/images/healthcare-check-xray.jpg"></img>
          </div>
          <div className="content-wrap max-w-full relative z-[1] py-[120px] px-[30px] phablet:pt-[97px] phablet:pr-[30px] phablet:pb-[100px] phablet:pl-[30px]">
            <h2 className=" font-bold tracking-normal text-left text-white">
              Cybersecurity
            </h2>
            <div className="btn-wrap mt-[30px]">
              <a
                href="#"
                className="text-[#ff2020] cursor-pointer bg-[transparent]"
              >
                Let’s Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
