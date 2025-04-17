import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import SectionHeader from "@/components/Common/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 mt-10 xl:py-30">
        <div className="w-full rounded-3xl bg-green-100/80 p-10 shadow-2xl md:p-15 lg:p-20 xl:p-25">
          <SectionHeader
            headerInfo={{
              title: `TRIVIUM BLOG`,
              subtitle: `The Latest News, Trends and Events In The Technology and Marketing world.`,
              description: `Discover The Latest and Hotest News from the tech and marketing world in the perspective of TRIVIUM`,
            }}
          />
        </div>
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
