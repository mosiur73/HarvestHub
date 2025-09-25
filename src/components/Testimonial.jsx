"use client"

import { useState } from "react";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Professional chef",
    image: "/testimonial1.jpeg",
    text: `"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs."`
  },
  {
    name: "John Smith",
    role: "Home Cook",
    image: "/testimonial1.jpeg",
    text: `"Fresh Harvest makes my life so easy. Their produce is always fresh and the delivery is super fast. I can rely on them for weekly groceries without any hassle."`
  },
  {
    name: "Emily Johnson",
    role: "Nutritionist",
    image: "/testimonial1.jpeg",
    text: `"I recommend Fresh Harvest to all my clients. The quality and freshness of fruits and vegetables are unmatched. It’s very convenient for healthy eating."`
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-center relative">
       <span className="bg-gray-200 text-green-600 text-sm px-3 py-1 rounded-full font-medium inline-block">
            Testimonial
          </span>
      <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
      <p className="text-gray-500 mb-8">
        Don't just take our word for it—here’s what some of our customers have to <br /> say about their experience with Fresh Harvest:
      </p>

      {/* Testimonial Content */}
      <div className="flex flex-col lg:flex-row items-center  rounded-xl p-8 gap-12">
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
          className="w-100 h-100 rounded-b-full rounded-t-full object-cover mx-auto lg:mx-0"
        />
        <div className="text-left bg-gray-200 p-8 px-12 rounded-2xl">
          <p className="text-gray-700 mb-4">{testimonials[current].text}</p>
          <p className="font-semibold">{testimonials[current].name} - <span className="font-normal">{testimonials[current].role}</span></p>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-green-600" : "bg-gray-300"}`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-600"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-600"
      >
        &#10095;
      </button>
    </div>
  );
}
