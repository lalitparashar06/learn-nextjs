import React from "react";

export default function ContentWithImage() {
  return (
    <section className="relative">
      <div className="container">
        <div className="outer-wrap flex w-[calc(100%+50px)] ml-[-25px] lg:block lg:w-full">
          <div className="item w-[calc(50%-25px)]  my-[0] mx-[25px]  lg:w-full lg:pb-[50px]">
            <div className="img-wrap h-[auto] overflow-hidden ">
              <img src="/images/blue-red-overlay.png"></img>
            </div>
          </div>
          <div className="item w-[calc(50%-25px)]  my-[0] mx-[25px]  lg:w-full">
            <div className="inner-wrap">
              <h3 className="mb-[20px]">VERITONE IS THE FIRST CHOICE</h3>
              <p>
                Veritone is the first choice and often exclusive source to
                license heart-pounding national, international, and collegiate
                sports content from elite sports entities, including NCAA®, Big
                Ten, Pac-12, US Open and French Open Tennis, US Soccer, USA
                Swimming, professional golf, and many others. We are home to
                current and archival footage from the world’s leading news
                sources, including Bloomberg, CBS News, CNN, Imagn, The Los
                Angeles Times, The New York Times, and South China Morning Post.
                Finally, we have an ever-growing roster of user-generated
                content from networks like Brave Bison, Viral Vault and Collab
                and creative assets from MGM Studios, RetroFootage, and more.
              </p>
              <p>
                Our team of licensing experts has been an invaluable resource to
                the creative community for nearly two decades. From major
                advertising campaigns to documentaries, independent and feature
                films, or high-profile talent and intellectual property
                clearances, we’re here to help bring your project to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
