"use client";
import React from "react";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="bg-primary py-20 text-center text-white">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h2 className="mb-6 text-4xl font-bold">
            Interested in collaborating or hiring me?
          </h2>
          <p className="mb-8 text-lg">
            I'm open to exciting projects and opportunities. Let's build something great together!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block rounded-full bg-white px-10 py-3 font-semibold text-primary hover:bg-gray-200"
          >
            Contact Me
          </a>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
