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
                title: "WHO ARE WE?",
                subtitle: "About Us",
                description: `Fouded in March, 2012,
Our mission is to empower businesses
through technology and data-driven
digital marketing, driving growth and
success in the digital age. We aspire to
change how the African market is
operating via the power of technology
and creative minds.
`,
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
                src="/images/about/about-light-01.png"
                alt="About"
                className="rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
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
                  Most Important
                </span>{" "}
                Expertise and Experience
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                A Wealth Of Expertise and Years Of Experience
              </h2>
              <p>
                we bring a wealth of expertise and 10+ years of experience in
                both software development and digital marketing. Our team is
                consisted of highly skilled professionals who have successfully
                delivered numerous projects across various industries. Our deep
                understanding of the latest technologies and marketing trends
                ensures that we provide solutions that are not only innovative
                but also effective in meeting your business goals.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    10+ Years In Software Development
                  </h3>
                  <p>
                    We have been in the software industry for over 10 years.
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
                    8+ Years in Digital Marketing and Production
                  </h3>
                  <p>
                    Leverage our years of experience in digital marketing and
                    Production.
                  </p>
                </div>
              </div>
              <div>
                <a
                  href="/About-us/#experience"
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
                <span className="mb-4 mr-4 inline-flex rounded-full bg-blue-500 px-4.5 py-4 text-lg font-normal uppercase text-white shadow-xl ">
                  65M+ ETB Generated
                </span>{" "}
                OUR SALES REPORTS
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Data and Result-Driven Approach
              </h2>
              <p>
                Our primary focus is on delivering measurable results. We set
                clear objectives for every project and use key performance
                indicators (KPIs) to track progress and success. With this
                Approach alone we have generated Our Clients Over 65M+ ETB
              </p>
              <div>
                <a
                  href="/About-us/#approach"
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
                src="./images/about/about-light-02.svg"
                alt="About"
                className="rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}

      {/* <!-- ===== About Start ===== --> */}
      <section className="mt-20 overflow-hidden pb-20 lg:pb-25 xl:pb-30">
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
                src="/Optimetrics.ai-logo-2.jpg"
                alt="About"
                className="rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:hidden"
                fill
              />
              <Image
                src="/Optimetrics.ai-logo-2.jpg"
                alt="About"
                className="hidden rounded-2xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:block"
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
                free benefits and access
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Get Life-time Access for All Of Our Products
              </h2>
              <p>
                we believe in providing our clients with the best tools to
                succeed. That's why we're excited to offer lifetime access to
                our powerful AI powered marketing product that we use for
                internal operations in our team, Optimetrics.ai, and other
                helpful digital products for free to all our clients who choose
                to work with us.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Our Flagship Software Products For Free
                  </h3>
                  <p>
                    Secure Cutting edge internal softwares for your business.
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
                    Our Done-For-You Digital Products For Free
                  </h3>
                  <p>Get your hands on the best digital products for free.</p>
                </div>
              </div>
              <div>
                <a
                  href="/About-us/#previlages"
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
                ✨ data-driven business decisions
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Get Realtime Market Analytics and Insights For Free
              </h2>
              <p>
                we also offer complimentary real-time market data analytics.
                This service provides you with the latest market trends, case
                studies competitor analysis, and industry insights, helping you
                stay ahead of the curve and make informed strategic business
                decisions.
              </p>
              <div>
                <a
                  href="#"
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
