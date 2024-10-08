import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div
        className="padding-container
      max-container w-full pb-24"
      >
        <Image src="camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          we are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="capitalize bold-40 lg:bold-64 xl:max-w-[390px]">
            guide you to easy path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            At HiCamp, we believe that every adventurer deserves a seamless
            journey into nature. Our curated resources and expert advice will
            help you navigate the trails with confidence, ensuring every step is
            filled with joy and discovery. Let us lead you to breathtaking
            destinations and unforgettable experiences in the great outdoors!
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={448}
          height={580}
          className="w-full object-cover object-center xl:rounded-5xl"
        />
        <div
          className="absolute flex bg-white py-8 pl-5 pr-7 gap-3
        rounded-3xl border shadow-md md:left-[5%] lg:top-20"
        >
          <Image src="/meter.svg" alt="meter" width={16} height={158} />
          <div className="flexBetween flex-col">
            <div className="flex flex-col w-full">
              <div className="flexBetween w-full gap-5">
                <p className="capitalize regular-16 text-gray-20">
                  destination
                </p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="capitalize bold-20 mt-2">aguas calientes</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="capitalize regular-16 text-gray-20">start track</p>
              <h4 className="capitalize bold-20 mt-2 whitespace-nowrap">
                wonorejo pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
