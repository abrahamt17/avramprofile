import NewsletterCTA from "@/components/Newsletter";
import React from "react";

type Props = {};

const PortfolioPage = (props: Props) => {
  return (
    <>
      <section className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55">
        <div className="animate_top mx-auto max-w-[518px] text-center">
          {/* <Image
          src="/images/shape/404.svg"
          alt="404"
          className="mx-auto mb-7.5"
          width={400}
          height={400}
        /> */}

          <h2 className=" text-2xl font-semibold text-black dark:text-white md:text-4xl">
            <div className="flex flex-col gap-y-4 items-center justify-center">
              <span className="text-5xl shadow-2xl hover:translate-y-2 hover:duration-500 rounded-full">😌</span> This Page Is Under
              Maintainance.
            </div>
          </h2>
          <p className="mb-7.5">
            We will notify you when we complet the monthly maintainance period
            for our website.
          </p>

          <a
            href="/"
            className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blue-500 dark:bg-btndark dark:hover:bg-blackho"
          >
            Return to Home
          </a>
        </div>
      </section>
      <NewsletterCTA />
    </>
  );
};

export default PortfolioPage;
