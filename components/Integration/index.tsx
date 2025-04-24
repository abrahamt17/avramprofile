"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <SectionHeader
            headerInfo={{
              title: `TOOLS & TECHNOLOGIES`,
              subtitle: `Technologies I Use to Build Solutions`,
              description: `Leveraging modern tools and technologies to create efficient, scalable, and maintainable software applications.`,
            }}
          />
        </div>

        <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="flex flex-wrap justify-around gap-y-10">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="/images/brand/react.svg"
                  alt="React"
                  className="shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:hidden"
                />
                <Image
                  width={50}
                  height={50}
                  src="/images/brand/react-dark.svg"
                  alt="React"
                  className="hidden dark:block"
                />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="/images/brand/nextjs.svg"
                  alt="Next.js"
                  className="shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:hidden"
                />
                <Image
                  width={50}
                  height={50}
                  src="/images/brand/nextjs-dark.svg"
                  alt="Next.js"
                  className="hidden dark:block"
                />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="/images/brand/tailwind.svg"
                  alt="Tailwind CSS"
                  className="shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:hidden"
                />
                <Image
                  width={50}
                  height={50}
                  src="/images/brand/tailwind-dark.svg"
                  alt="Tailwind CSS"
                  className="hidden dark:block"
                />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="/images/brand/python.svg"
                  alt="Python"
                  className="shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:hidden"
                />
                <Image
                  width={50}
                  height={50}
                  src="/images/brand/python-dark.svg"
                  alt="Python"
                  className="hidden dark:block"
                />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="/images/brand/typescript.svg"
                  alt="typescript"
                  className="shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:hidden"
                />
                <Image
                  width={50}
                  height={50}
                  src="/images/brand/typescript-dark.svg"
                  alt="Type script"
                  className="hidden dark:block"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;
