"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here, e.g., send email or API call
    alert("Thank you for reaching out! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h2 className="mb-10 text-center text-3xl font-bold text-black dark:text-white">
            Get In Touch
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-3xl space-y-6 rounded-lg border border-stroke bg-white p-8 shadow-md dark:border-strokedark dark:bg-blacksection"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-black dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded border border-stroke bg-transparent px-4 py-2 text-black placeholder:text-meta dark:border-strokedark dark:text-white dark:placeholder:text-metadark"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-black dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded border border-stroke bg-transparent px-4 py-2 text-black placeholder:text-meta dark:border-strokedark dark:text-white dark:placeholder:text-metadark"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-black dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded border border-stroke bg-transparent px-4 py-2 text-black placeholder:text-meta dark:border-strokedark dark:text-white dark:placeholder:text-metadark"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded bg-primary px-6 py-3 text-white hover:bg-blue-600 dark:bg-btndark dark:hover:bg-blackho"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
