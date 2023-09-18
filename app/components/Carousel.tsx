'use client'

import React, { useState, useEffect } from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md'

const slides = [
  {
    img: '/images/hero1.jpg',
    label: 'hero1'
  },
  {
    img: '/images/hero2.jpg',
    label: 'hero2'
  },
  {
    img: '/images/hero3.jpg',
    label: 'hero3'
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Ganti gambar setiap 5 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full flex overflow-hidden">
      <div className="h-full flex">
        {slides.map((s, index) => (
          <div
            key={s.label}
            className={`h-screen w-screen ${index === currentSlide ? "opacity-100" : "opacity-0 absolute"
              } transition-opacity duration-1000`}>
            <div className="h-full w-full absolute inset-0 bg-black/70 "></div>
            <img src={s.img} alt={s.label} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="hidden sm:absolute left-0 top-1/2 m-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full focus:outline-none">
        <MdOutlineChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:absolute right-0 top-1/2 m-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full focus:outline-none">
        <MdOutlineChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Slider;
