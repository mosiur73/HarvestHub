
import AboutSection from "@/components/AboutHarvest";
import { HeroBanner } from "@/components/banner";
import OfferSection from "@/components/OfferSection";
import TestimonialSlider from "@/components/Testimonial";
import ProductsPage from "./products/page";
import BlogSection from "@/components/Blog";


export default function Home() {
  return (
   <div>
    <HeroBanner></HeroBanner>
    <ProductsPage></ProductsPage>
    <AboutSection></AboutSection>
    <OfferSection></OfferSection>
    <TestimonialSlider></TestimonialSlider>
    <BlogSection></BlogSection>
   </div>
  );
}
