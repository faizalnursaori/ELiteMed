"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TestimonialCard } from "./TestimonialCard";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay"
import { testimonialsList } from "@/utils/helper";


export const TestimonialsSection = () => {

    const plugin = useRef(
        Autoplay({ delay: 8000, stopOnInteraction: true })
    )

    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-5">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">What do they say about us?</h2>
                    <p className="text-gray-600 text-lg">Here are some <span className="font-bold">testimonials</span> from our clients</p>
                </div>
                <div className="mx-auto max-w-4xl relative">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[plugin.current]}
                    >
                        <CarouselContent>
                            {testimonialsList.map((testimonial, index) => (
                                <CarouselItem key={index}>
                                    <TestimonialCard
                                        clientImage={testimonial.clientImage}
                                        clientRating={testimonial.clientRating}
                                        clientTestimonial={testimonial.clientTestimonial}
                                        clientName={testimonial.clientName}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 hover:bg-gray-200 rounded-full p-2 shadow-md">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                ></path>
                            </svg>
                        </CarouselPrevious>
                        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 hover:bg-gray-200 rounded-full p-2 shadow-md">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg>
                        </CarouselNext>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};