"use client";
import React from "react";
import { featuresData } from "./featuresData";
import { DigitalMarketingData } from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="mt-9 py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className=" flex w-full rounded-3xl bg-blue-100 p-10 shadow-2xl md:p-15 lg:p-20 xl:p-25">
            {/* <Image 
              src="/Optimetrics.ai-logo-2.jpg"
              className=" w-full flex items-center justify-center h-10 rounded-full"
              fill
              alt="products_page_background_image"
            /> */}
            <SectionHeader
              headerInfo={{
                title: "TRIVIUM PRODUCTS",
                subtitle:
                  "Get Lifetime Access To Our Flagship Products For Free For Your Business",
                description: `I believe in providing our clients with the best tools to succeed. That's why we're excited to offer lifetime access to our powerful AI powered marketing  product that we use for internal operations in our team, Optimetrics.ai, and other helpful digital products for free to all our clients who choose to work with us.`,
              }}
            />
          </div>
          <div className="flex flex-col gap-y-15">
            <div className="mt-20  flex flex-col items-center justify-center gap-y-2">
              <span className="mr-4 inline-flex rounded-full bg-meta px-5 py-5 text-lg font-normal uppercase text-white shadow-xl ">
                FLAGSHIP SOFTWARES FREE FOR OUR CLIENTS
              </span>
              <h2 className="mt-3 flex flex-1 items-center justify-center px-30 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Work With Us And Take State-Of-The-Art <br /> &nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Software Products For Free
              </h2>
            </div>
            {/* <!-- Section Title End --> */}

            <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
              {/* <!-- Features item Start --> */}

              {featuresData.map((feature, key) => (
                <SingleFeature feature={feature} key={key} />
              ))}
              {/* <!-- Features item End --> */}
            </div>
            <div className="mt-10  flex flex-col items-center justify-center gap-y-2">
              <span className="mr-4 inline-flex rounded-full bg-meta px-5 py-5 text-lg font-normal uppercase text-white shadow-xl ">
                DIGITAL ASSETS FREE FOR OUR CLIENTS
              </span>
              <h2 className="mt-3 flex flex-1 items-center justify-center px-30 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Work With Us And Use Our Growing Gallery Of &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;Digital Assets For Free
              </h2>
            </div>
            <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
              {/* <!-- Features item Start --> */}

              {DigitalMarketingData.map((feature, key) => (
                <SingleFeature feature={feature} key={key} />
              ))}
              {/* <!-- Features item End --> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
