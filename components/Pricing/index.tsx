"use client";
import React from "react";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h2 className="mb-10 text-center text-3xl font-bold text-black dark:text-white">
            Services & Offerings
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-stroke bg-white p-6 shadow-md dark:border-strokedark dark:bg-blacksection">
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Freelance Development
              </h3>
              <p className="mb-6 text-black dark:text-white">
                Offering custom software development services tailored to your needs.
              </p>
              <p className="text-lg font-bold text-primary dark:text-primary">
                Pricing upon request
              </p>
            </div>
            <div className="rounded-lg border border-stroke bg-white p-6 shadow-md dark:border-strokedark dark:bg-blacksection">
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Consulting & Mentorship
              </h3>
              <p className="mb-6 text-black dark:text-white">
                Providing guidance on software architecture, project management, and best practices.
              </p>
              <p className="text-lg font-bold text-primary dark:text-primary">
                Pricing upon request
              </p>
            </div>
            <div className="rounded-lg border border-stroke bg-white p-6 shadow-md dark:border-strokedark dark:bg-blacksection">
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Training & Workshops
              </h3>
              <p className="mb-6 text-black dark:text-white">
                Conducting workshops on modern web development technologies and methodologies.
              </p>
              <p className="text-lg font-bold text-primary dark:text-primary">
                Pricing upon request
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing End ===== --> */}
    </>
  );
};

export default Pricing;
