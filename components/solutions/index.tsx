"use client";
import React from "react";
import { featuresData } from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== About Me Start ===== --> */}
      <section id="about-me" className="mt-8 py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="w-full rounded-3xl bg-blue-100 p-10 shadow-2xl md:p-15 lg:p-20 xl:p-25">
            {/* <!-- Section Title Start --> */}
            <SectionHeader
              headerInfo={{
                title: "ABOUT ME",
                subtitle: "Discover My Journey and Expertise",
                description: `Dive into my portfolio to explore my skills, projects, and the passion I bring to every endeavor. Let's create something amazing together!`,
              }}
            />
          </div>
          <div className="flex flex-col gap-y-15">
            {/* <!-- Section Title End --> */}

            <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
              {/* <!-- Skills and Projects Start --> */}

              {featuresData.map((feature, key) => (
                <SingleFeature feature={feature} key={key} />
              ))}
              {/* <!-- Skills and Projects End --> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ===== About Me End ===== --> */}
    </>
  );
};

export default Feature;
