import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";

const Blog = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <div className=" mt-10 w-full rounded-3xl bg-orange-100 p-10 shadow-2xl md:p-15 lg:p-20 xl:p-25">
            <SectionHeader
              headerInfo={{
                title: `CASE STUDIES & REPORTS`,
                subtitle: `Latest Case Studies & Market Reports of The Digital Space`,
                description: `Check out real-life examples of how our custom solutions have helped our clients achieve their specific goals and Explore the Market Reports on the marketing and software industry, where we discuss complex topics to improve our readers' understanding.`,
              }}
            />
          </div>
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 gap-y-7 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {BlogData.slice(0, 3).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
        <button
          aria-label="get started button"
          className="ml-[430px] mt-16 flex w-1/3 items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blue-600 dark:bg-btndark dark:hover:bg-blackho"
        >
          Read More
        </button>
      </div>
    </section>
  );
};

export default Blog;
