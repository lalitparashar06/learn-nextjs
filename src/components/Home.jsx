export default function Home() {
  return (
    <section className="Home bg-gradient-to-r from-green-300 to-blue-300">
      <div className="container">
        <div className="row-wrap relative flex flex-wrap w-[calc(100%+60px)] ml-[-30px] items-center">
          <div className="col-two w-[calc(50%-60px)] mx-[30px] lg:w-full">
            <div className="content">
              <h2 className=" pb-[30px]">
                The scale of a platform With storage that never stops you.
              </h2>
              <p className="text-[18px] ">
                Portworx is the gold standard for Kubernetes storage. More than
                capacity for stateful applications, Portworx is a critical part
                of an internal developer platform, enabling high-performance
                teams to leverage a secure cloud operating model that supports
                accelerated and continuous application development within
                virtual machines and containers.
              </p>
              <div className="btn inline-block bg-[black] text-gray-500 text-center border border-transparent px-3 py-1.5 text-base leading-6 rounded-md mt-[30px] ">
                <a href="#" className="text-[white]">
                  {" "}
                  Read Solution Brief
                </a>
              </div>
            </div>
          </div>
          <div className="col-two w-[calc(50%-60px)] mx-[30px] lg:w-full">
            <div className="img-wrap w-[100%]">
              <img src="/images/campaign-landing-hero-1.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
