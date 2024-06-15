import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { AboutSection } from "@/components/AboutSection";
import { ServiceSection } from "@/components/ServiceSection";
import { OfferingSection } from "@/components/OfferingSection";
import { TestimonialsSection } from "@/components/TestimonialSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <ServiceSection />
      <OfferingSection />
      <TestimonialsSection />
    </>
  );
}
