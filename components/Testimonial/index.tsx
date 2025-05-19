"use client";
import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Yodahe Zemichael",
    role: "Project Manager",  
    feedback:
      "Abraham has been a great asset for Fayda. During his internship, he took on bigger responsibilities than were put on his desk and his immediate supervisors appreciated his stay with us.",
    image: "/images/testimonial/yodahe.jpg",
  },
  {
    name: "Selamawit Reta",
    role: "Software Project Management | Product Management | Digital ID | ",
    feedback:
      "as an intern at our company, Abraham has demonstrated outstanding skills in web development and a strong commitment to learning and growth. his dedication to mastering new concepts and applying them effiectively highlights his potential to excel as a project manager.",
    image: "/images/testimonial/selam.jpg",
  },
  {
    name: "client",
    role: "Client",
    feedback:
      "...",
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
