"use client";
import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Project Manager",
    feedback:
      "Working with [Your Name] was a fantastic experience. Their technical skills and dedication helped us deliver the project on time.",
    image: "/images/testimonial/avram.jpg",
  },
  {
    name: "John Smith",
    role: "Team Lead",
    feedback:
      "[Your Name] consistently demonstrated excellent problem-solving skills and a strong work ethic.",
    image: "/images/testimonial/testimonial1.png",
  },
  {
    name: "Emily Johnson",
    role: "Client",
    feedback:
      "The application developed exceeded our expectations. Highly recommend [Your Name] for any software development needs.",
    image: "/images/testimonial/avram.jpg",
  },
];

const Testimonial = () => {
  return (
    <>
      {/* <!-- ===== Testimonial Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h2 className="mb-10 text-center text-3xl font-bold text-black dark:text-white">
            Testimonials
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg border border-stroke bg-white p-6 shadow-md dark:border-strokedark dark:bg-blacksection flex flex-col items-center text-center"
              >
                <div className="mb-4 h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} profile`}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <p className="mb-4 text-black dark:text-white">"{testimonial.feedback}"</p>
                <h4 className="font-semibold text-black dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-meta dark:text-metadark">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Testimonial End ===== --> */}
    </>
  );
};

export default Testimonial;
