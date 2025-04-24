"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in Front-End technologies like React, Next.js, Tailwind CSS, TypeScript, and Redux, along with experience in Python REST APIs and databases.",
    },
    {
      question: "What kind of projects have you worked on?",
      answer:
        "I have worked on various projects including web applications, dashboards, and API integrations across different industries.",
    },
    {
      question: "Are you open to freelance or full-time opportunities?",
      answer:
        "Yes, I am open to both freelance projects and full-time positions that align with my skills and career goals.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* <!-- ===== FAQ Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h2 className="mb-10 text-center text-3xl font-bold text-black dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 border-b border-stroke dark:border-strokedark">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 text-left text-lg font-semibold text-black dark:text-white"
                >
                  {faq.question}
                </button>
                {activeIndex === index && (
                  <p className="pt-2 text-black dark:text-white">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== FAQ End ===== --> */}
    </>
  );
};

export default FAQ;
