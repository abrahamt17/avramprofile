"use client";
import React from "react";
import { featuresData } from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="mt-20 py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="bg-blue-200/80 shadow-2xl w-full rounded-3xl p-10 md:p-15 lg:p-20 xl:p-25">
            {/* <!-- Section Title Start --> */}
            <SectionHeader
              headerInfo={{
                title: "TRIVIUM SOFTWARE SERVICES",
                subtitle: "Our Software Development Services",
                description: `We offer a comprehensive
range of Software development services designed to meet the diverse
needs of our clients with holistic solutions to
drive their business forward.`,
              }}
            />
          </div>
          <div className="flex flex-col gap-y-15">
            {/* <!-- Section Title End --> */}

            <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
              {/* <!-- Features item Start --> */}

              {featuresData.map((feature, key) => (
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
