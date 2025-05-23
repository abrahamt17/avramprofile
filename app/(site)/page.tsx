import { Metadata } from "next";
import Hero from "../../components/Hero";
import Brands from "../../components/Brands";
import Feature from "../../components/Features";
import About from "../../components/About";
import FeaturesTab from "../../components/FeaturesTab";
import FunFact from "../../components/FunFact";
import Integration from "../../components/Integration";
import CTA from "../../components/CTA";
import FAQ from "../../components/FAQ";
import Pricing from "../../components/Pricing";
import Contact from "../../components/Contact";
import Blog from "../../components/Blog";
import Testimonial from "../../components/Testimonial";
import NewsletterCTA from "../../components/Newsletter";

export const metadata: Metadata = {
  title: "Personal Portfolio | Software Engineer & Developer",
  description: "Welcome to my personal portfolio showcasing my projects, skills, and professional aspirations.",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
       <Feature />
      <Integration />
      <Brands />
     
      <About />
      <FeaturesTab />
      <FunFact />
      {/* <CTA /> */}
      
      {/* <FAQ /> */}
      <Testimonial />
      {/* <Pricing /> */}
      <Contact />
      <NewsletterCTA />
      <Blog />
    </main>
  );
}
