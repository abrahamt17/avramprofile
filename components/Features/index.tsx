"use client";
import React from "react";
import { featuresData } from "./featuresData";
import { DigitalMarketingData } from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "TRIVIUM SERVICES",
              subtitle: "Our Core Services",
              description: `We offer a comprehensive
range of services designed to meet the diverse
needs of our clients. Our expertise spans both
software development and digital marketing,
ensuring we can provide holistic solutions to
drive your business forward.`,
            }}
          />
          <div className="flex flex-col gap-y-15">
            {/* <!-- Section Title End --> */}

            <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
              {/* <!-- Features item Start --> */}

              {featuresData.map((feature, key) => (
                <SingleFeature feature={feature} key={key} />
              ))}
              {/* <!-- Features item End --> */}
            </div>
            <a href="/Services/software-development">
              <button
                aria-label="get started button"
                className="ml-[450px] mt-10 flex w-1/3 items-center justify-center rounded-full  bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blue-600 dark:bg-btndark dark:hover:bg-blackho sm:m-auto"
              >
                Discover All Software Solutions
              </button>
            </a>
            <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
              {/* <!-- Features item Start --> */}

              {DigitalMarketingData.map((feature, key) => (
                <SingleFeature feature={feature} key={key} />
              ))}
              {/* <!-- Features item End --> */}
            </div>
            <a href="/Services/digital-marketing">
              <button
                aria-label="get started button"
                className="ml-[450px] mt-10 flex w-1/3 items-center justify-center rounded-full  bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blue-600 dark:bg-btndark dark:hover:bg-blackho sm:m-auto"
              >
                Discover All Digital Marketing Solutions
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
