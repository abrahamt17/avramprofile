import Pricing from "@/components/marketing_Services/portfolio";
import Feature from "@/components/marketing_Services"
import { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "TRIVIUM STUDIOS™ | Digital Mrketinng | Software Development | Production",
  description: "A Leading Software Development, Digital Marketing and Content Production Provider Based In Ethiopia",
  // other metadata
};

const ServicesPage = () => {
    return(
        <div>
            <Feature />
            <Pricing />
            <CTA />
        </div>
    )
}
export default ServicesPage