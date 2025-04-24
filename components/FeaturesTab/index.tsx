"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  const personalFeaturesTabData = [
    {
      id: "tabOne",
      title: "Planning",
      description: "Defining project goals, requirements, and timelines to ensure clear direction and expectations.",
    },
    {
      id: "tabTwo",
      title: "Development",
      description: "Building scalable and maintainable software solutions using modern technologies.",
    },
    {
      id: "tabThree",
      title: "Deployment & Maintenance",
      description: "Deploying applications and providing ongoing support and updates for optimal performance.",
    },
  ];

  return (
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="relative pb-20 mt-10 pt-18.5 lg:pb-22.5">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <SectionHeader
            headerInfo={{
              title: `PROJECT PHASES`,
              subtitle: `My Approach To Standardize Projects and Streamline Processes`,
              description: ``,
            }}
          />
        </div>
        <div className="relative mt-10 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mb-15 shadow-2xl flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
          >
            {personalFeaturesTabData.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                  currentTab === tab.id
                    ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                    : ""
                }`}
              >
                <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle3 font-medium text-black dark:text-white">
                    {tab.id === "tabOne" ? "01" : tab.id === "tabTwo" ? "02" : "03"}
                  </p>
                </div>
                <div className="md:w-3/5 lg:w-auto">
                  <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                    {tab.title}
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top mx-auto max-w-c-1154"
          >
            {personalFeaturesTabData.map((tab) => (
              <div key={tab.id} className={tab.id === currentTab ? "block" : "hidden"}>
                <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">{tab.title}</h3>
                <p className="text-black dark:text-white">{tab.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default FeaturesTab;
