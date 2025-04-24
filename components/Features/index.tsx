"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  const personalFeatures = [
    {
      title: "Front-End Development",
      description: "Expertise in React, Next.js, Tailwind CSS, TypeScript, and Redux for building responsive and dynamic user interfaces.",
    },
    {
      title: "Back-End Development",
      description: "Experience with Python REST APIs, Spring Boot, and database management using MySQL and PostgreSQL.",
    },
    {
      title: "Project Management",
      description: "Skilled in Agile methodologies and project coordination to ensure timely and quality delivery.",
    },
  ];

  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "MY CORE SKILLS",
              subtitle: "Technical Expertise",
              description: "A summary of my key skills and areas of expertise in software development and project management.",
            }}
          />
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
            {personalFeatures.map((feature, index) => (
              <div key={index} className="rounded-lg border border-stroke bg-white p-6 shadow-md dark:border-strokedark dark:bg-blacksection">
                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">{feature.title}</h3>
                <p className="text-black dark:text-white">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
