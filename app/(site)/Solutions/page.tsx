import Pricing from "@/components/solutions/portfolio";
import Feature from "@/components/solutions";
import { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title:
    "TRIVIUM STUDIOS™ | Digital Mrketinng | Software Development | Production",
  description:
    "A Leading Software Development, Digital Marketing and Content Production Provider Based In Ethiopia",
  // other metadata
};

const SolutionsPage = () => {
  return (
    <>
      <div>
        <Feature />
        <CTA />
      </div>
    </>
  );
};
export default SolutionsPage;
