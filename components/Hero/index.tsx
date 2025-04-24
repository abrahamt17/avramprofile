"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-xl font-semibold text-black dark:text-white">
                <span className="text-4xl">🧑‍💻</span>{" "}
                <span className="text-blue-700">Welcome to My Portfolio</span>
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-extrabold text-black dark:text-white xl:text-hero ">
                I'm a Software Engineer passionate about building intuitive and scalable web applications.
              </h1>
              <p className="text-ellipsis text-base font-light text-black dark:text-white xl:text-lg">
                Specializing in Front-End technologies like React, Next.js, Tailwind CSS, TypeScript, and Redux, with experience in Python REST APIs and databases.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 hover:border-blue-300   focus:border-primary focus:outline-none hover:focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />

                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blue-600 dark:bg-btndark dark:hover:bg-blackho"
                    >
                      <a
                        href="mailto:your.email@example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contact Me
                      </a>
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  🌟 Feel free to reach out for collaborations or inquiries.
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/personal-hero.jpg"
                  alt="Personal Hero"
                  className="transform rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg  dark:hidden"
                  width={700}
                  height={444}
                />
                <Image
                  src="/images/personal-hero-dark.jpg"
                  alt="Personal Hero"
                  className="hidden rounded-xl shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg dark:block"
                  width={700}
                  height={444}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
