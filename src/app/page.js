
import AboutSection from "@/components/AboutHarvest";
import { HeroBanner } from "@/components/banner";
import OfferSection from "@/components/OfferSection";
import TestimonialSlider from "@/components/Testimonial";


export default function Home() {
  return (
   <div>
    <HeroBanner></HeroBanner>
    <AboutSection></AboutSection>
    <OfferSection></OfferSection>
    <TestimonialSlider></TestimonialSlider>
   </div>
  );
}
