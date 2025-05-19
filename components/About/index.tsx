"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          {/* <SectionHeader
            headerInfo={{
              title: "🧑‍💻 Developer Profile",
              subtitle: "About Me",
              description: `I'm a dedicated Software Engineer and Junior Project Management student with a passion for crafting intuitive user experiences. Specializing in Front-End technologies like React, Next.js, Tailwind CSS, TypeScript, and Redux, I also have worked with Python REST APIs, MySQL, and PostgreSQL before. My adaptability allows me to quickly learn and implement new technologies to meet diverse business needs.`,
            }}
          /> */}
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
                src="/images/personal-profile.jpg"
                alt="Personal Profile"
                className="rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:hidden"
                fill
              />
              <Image
                src="/images/personal-profile-dark.jpg"
                alt="Personal Profile"
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
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta font-normal px-4.5 py-3 text-lg shadow-xl uppercase text-white ">
                  Most Important
                </span>{" "}
                Expertise and Experience
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                A Wealth Of Expertise and Years Of Experience
              </h2>
              <p>
                I bring a wealth of expertise and 3+ years of experience in
                software development and project management. I have successfully
                delivered numerous projects across various industries, specializing
                in front-end technologies and back-end integrations.
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
                    Experienced in building scalable and maintainable software solutions.
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
                    2+ Years in Project Management and Digital Marketing
                  </h3>
                  <p>
                    Skilled in managing projects and digital marketing campaigns effectively.
                  </p>
                </div>
              </div>
              <div>
                <a
                  href="#experience"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <button
                    aria-label="get started button"
                    className="ml-[450px] mt-10  items-center justify-center rounded-full  bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blue-600 dark:bg-btndark dark:hover:bg-blackho sm:m-auto"
                  >
                    Learn More
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== Projects Start ===== --> */}
      {/* <section className="mt-20 overflow-hidden pb-20 lg:pb-25 xl:pb-30 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-32.5">
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
          className="animate_left lg:w-1/2"
        >
          <h4 className="font-medium uppercase tracking-wider text-yellow-300">
            🚀 Featured Projects
          </h4>
          <h2 className="relative mb-6 text-4xl font-extrabold leading-tight">
            A Showcase of My Work
          </h2>
          <div className="space-y-8">
            <div className="p-6 bg-white text-black rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-2">National ID Help Page Redesign</h3>
          <p className="text-sm mb-4">
            Redesigned the official help page with a focus on responsive design and user-friendly forms.
          </p>
          <ul className="list-disc list-inside text-sm">
            <li>React, Next.js, Tailwind CSS</li>
            <li>Custom Next.js server for testing</li>
            <li>Legacy codebase integration</li>
          </ul>
            </div>
            <div className="p-6 bg-white text-black rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-2">Grievance Management System (GMS) Portal</h3>
          <p className="text-sm mb-4">
            Built a dynamic GRM table with advanced features and backend integration.
          </p>
          <ul className="list-disc list-inside text-sm">
            <li>React, TypeScript, Spring Boot</li>
            <li>REST API, PostgreSQL</li>
            <li>Mini-dashboard for insights</li>
          </ul>
            </div>
            <div className="p-6 bg-white text-black rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-2">Song Manager App</h3>
          <p className="text-sm mb-4">
            A responsive app for managing songs with CRUD functionalities.
          </p>
          <ul className="list-disc list-inside text-sm">
            <li>React, Tailwind CSS, Redux</li>
            <li>Emotion, Redux-Saga</li>
            <li>JSONPlaceholder REST API</li>
          </ul>
            </div>
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
            src="/images/projects-image.jpg"
            alt="Projects"
            className="rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:hidden"
            fill
          />
          <Image
            src="/images/projects-image-dark.jpg"
            alt="Projects"
            className="hidden rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:block"
            fill
          />
        </motion.div>
          </div>
        </div>
      </section> */}
      {/* <!-- ===== Projects End ===== --> */}

      {/* <!-- ===== Skills Start ===== --> */}
      {/* <section className="mt-20 overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="mt-10 flex items-center gap-8 lg:gap-32.5">
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
                src="/images/skills-image.jpg"
                alt="Skills"
                className="rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:hidden"
                fill
              />
              <Image
                src="/images/skills-image-dark.jpg"
                alt="Skills"
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
              <h4 className="font-medium uppercase text-black dark:text-white">
                🛠️ Skills & Technologies
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                My technical proficiency includes:
              </h2>
              <p>
                Front-End: React, Next.js, Tailwind CSS, TypeScript, Redux.
                <br />
                Back-End: Python, REST APIs, Spring Boot.
                <br />
                Databases: MySQL, PostgreSQL.
                <br />
                Others: Emotion, Redux-Saga, Git, Agile methodologies.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}
      {/* <!-- ===== Skills End ===== --> */}

      {/* <!-- ===== Aspirations Start ===== --> */}
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
                🎯 Professional Aspirations
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                I'm currently delving deeper into system design and project management to enhance my ability to deliver scalable and efficient solutions.
              </h2>
              <p>
                My passion for user experience drives me to create applications that are not only functional but also intuitive and engaging.
              </p>
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
                src="/images/aspirations-image.jpg"
                alt="Aspirations"
                className="rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:hidden"
                fill
              />
              <Image
                src="/images/aspirations-image-dark.jpg"
                alt="Aspirations"
                className="hidden rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Aspirations End ===== --> */}

      {/* <!-- ===== Hobbies Start ===== --> */}
      {/* <section className="mt-20 overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="mt-10 flex items-center gap-8 lg:gap-32.5">
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
                src="/images/hobbies-image.jpg"
                alt="Hobbies"
                className="rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:hidden"
                fill
              />
              <Image
                src="/images/hobbies-image-dark.jpg"
                alt="Hobbies"
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
              <h4 className="font-medium uppercase text-black dark:text-white">
                🎨 Hobbies & Interests
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Beyond coding, I enjoy crafting and exploring new technologies, which fuels my creativity and problem-solving skills in software development.
              </h2>
            </motion.div>
          </div>
        </div>
      </section> */}
      {/* <!-- ===== Hobbies End ===== --> */}
    </>
  );
};

export default About;


