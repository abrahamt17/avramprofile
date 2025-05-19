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
          <SectionHeader
            headerInfo={{
              title: `PROJECTS & ARTICLES`,
              subtitle: `Latest Projects & Articles`,
              description: `Explore my portfolio to see real-world projects I've built, showcasing my skills and problem-solving abilities. Dive into my articles for insights on software development, where I share knowledge and experiences to help others grow.`,
            }}
          />
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
          type="button"
          aria-label="view more projects and articles"
          className="ml-[430px] mt-16 flex w-1/3 items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blue-600 dark:bg-btndark dark:hover:bg-blackho"
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default Blog;
