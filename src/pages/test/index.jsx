import React from "react";

export default function index() {
  return (
    <section className="content-with-img">
      <div className="container">
        <div className="intro flex flex-wrap w-full justify-center items-center">
          <div className="title-wrap ">
            <h3 className=" text-green-600 text-5xl   text-center">
              Choose among the three levels of Active Noise Cancellation based
              on your environment
            </h3>
          </div>
        </div>
        <div className="outer-wrap flex flex-wrap mt-[65px] w-[100%] bg-[#F7F7F7;]">
          <div className="col-two w-[50%]  tablet:w-full tablet:block phablet:w-full block  phone:w-full block ">
            <div className="inner-wrap p-[33px] h-full w-full tablet:p-[0] mb-[50px] phablet:p-[0] mb-[50px] phone:p-[0px] mb-[10px]">
              <h2 className="phone: mb-[20px]">
                The scale of a platform With storage that never stops you.
              </h2>
              <p className="mb-[20px]">
                Portworx is the gold standard for Kubernetes storage. More than
                capacity for stateful applications, Portworx is a critical part
                of an internal developer platform, enabling high-performance
                teams to leverage a secure cloud operating model that supports
                accelerated and continuous application development within
                virtual machines and containers.
              </p>
            </div>
          </div>
          <div className="col-two w-[50%] tablet:w-full block phablet:w-full block phone:w-full block ">
            <div className="icon-wrap w-full h-full p-[33px] tablet:p-[0px] phablet:p-[0px] phone:p-[0px]  ">
              <img src="/images/fingerprint (1).jpg" className=""></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
