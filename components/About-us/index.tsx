"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="mt-40 overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="w-full rounded-3xl bg-green-100 p-10 shadow-2xl md:p-15 lg:p-20 xl:p-25">
            <SectionHeader
              headerInfo={{
                title: "WHO AM I?",
                subtitle: "About Me",
                description: `I am a passionate software engineer and junior project management student with a focus on front-end technologies and a growing backend skillset. I strive to create intuitive and efficient user experiences while continuously learning and adapting to new technologies.`,
              }}
            />
          </div>
          <div className="mt-19 flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/profile-photo.jpg"
                alt="About"
                className="rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:hidden"
                fill
              />
              <Image
                src="/images/profile-photo.jpg"
                alt="About"
                className="hidden rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-3 text-lg font-normal uppercase text-white shadow-xl ">
                  Key Expertise
                </span>{" "}
                Skills and Experience
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                A Passionate Developer with Growing Experience
              </h2>
              <p>
                I have over 3 years of experience in software development, focusing on front-end technologies such as React, Next.js, and Tailwind CSS. I am also gaining experience in backend development with Python and Spring Boot. I am committed to continuous learning and delivering high-quality solutions.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    3+ Years In Software Development
                  </h3>
                  <p>
                    Experienced in building responsive and user-friendly web applications.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Front-End & Back-End Skills
                  </h3>
                  <p>
                    Proficient in React, Next.js, Tailwind CSS, Python, and Spring Boot.
                  </p>
                </div>
              </div>
              <div>
                <a
                  href="#contact"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <button
                    aria-label="contact button"
                    className="ml-[450px] mt-10 items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blue-600 dark:bg-btndark dark:hover:bg-blackho sm:m-auto"
                  >
                    Contact Me
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Data-Driven Insights
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Market Analytics and Strategic Decisions
              </h2>
              <p>
                I leverage real-time market data analytics and industry insights to make informed strategic decisions and deliver impactful solutions.
              </p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <button
                    aria-label="learn more button"
                    className="ml-[450px] mt-10 items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blue-600 dark:bg-btndark dark:hover:bg-blackho sm:m-auto"
                  >
                    Learn More
                  </button>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/data_analytics.jpg"
                alt="About"
                className="rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:hidden"
                fill
              />
              <Image
                src="/data_analytics.jpg"
                alt="About"
                className="hidden rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
