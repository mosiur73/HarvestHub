
import AboutSection from "@/components/AboutHarvest";
import { HeroBanner } from "@/components/banner";
import OfferSection from "@/components/OfferSection";
import TestimonialSlider from "@/components/Testimonial";
import ProductsPage from "./products/page";


export default function Home() {
  return (
   <div>
    <HeroBanner></HeroBanner>
    <ProductsPage></ProductsPage>
    <AboutSection></AboutSection>
    <OfferSection></OfferSection>
    <TestimonialSlider></TestimonialSlider>
   </div>
  );
}
