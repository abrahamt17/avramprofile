"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="border-t shadow-2xl border-stroke bg-slate-50 dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-20">
            <div className="flex flex-wrap gap-3 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/">
                  <span className="hidden text-4xl font-extrabold text-blue-500 dark:block">
                    Avram
                  </span>
                  <div className="flex flex-col">
                    <span className="text-4xl font-extrabold text-blue-500 dark:hidden">
                      Avram
                    </span>
                  </div>
                </a>
                <p className="mb-10 mt-5">
                  I am a passionate Software Engineer specializing in building
                  modern, scalable, and user-friendly web applications.
                </p>

                <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                  Contact
                </p>
                <a
                  href="mailto:tikuyeabraham@gmail.com"
                  className="text-itemtitle font-medium text-black dark:text-white"
                >
                  tikuyeabraham@gmail.com
                </a>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    About Me
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="#about"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Who I Am
                      </a>
                    </li>
                    <li>
                      <a
                        href="#skills"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        My Skills
                      </a>
                    </li>
                    <li>
                      <a
                        href="#projects"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Get in Touch
                      </a>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Services
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Mobile App Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        UI/UX Design
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        API Integration
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Socials
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="https://github.com/avram"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/avram"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/avram"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="#privacy" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-primary">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>&copy; {new Date().getFullYear()} Avram. All rights reserved.</p>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
