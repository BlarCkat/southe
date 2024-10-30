"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PiArrowCircleDownLeftDuotone, PiArrowCircleRightBold, PiArrowCircleRightDuotone } from 'react-icons/pi';

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
}

interface CarouselProps {
  autoPlayInterval?: number;
  className?: string;
}

const defaultItems: CarouselItem[] = [
  {
    id: 1,
    title: "Southe X24",
    subtitle: "Suit • Kala • 24",
    category: "Classic",
    image: "/img/image-1.jpeg"
  },
  {
    id: 2,
    title: "Southe G11",
    subtitle: "Category • Tag • Info",
    category: "Modern",
    image: "/img/image-1.jpeg"
  },
  {
    id: 3,
    title: "Third Item",
    subtitle: "More • Details • Here",
    category: "New",
    image: "/img/image-1.jpeg"
  },
  {
    id: 4,
    title: "Third Item",
    subtitle: "More • Details • Here",
    category: "New",
    image: "/img/image-1.jpeg"
  },
  {
    id: 5,
    title: "Third Item",
    subtitle: "More • Details • Here",
    category: "New",
    image: "/img/image-1.jpeg"
  },
  {
    id: 6,
    title: "Third Item",
    subtitle: "More • Details • Here",
    category: "New",
    image: "/img/image-1.jpeg"
  },
  {
    id: 7,
    title: "Third Item",
    subtitle: "More • Details • Here",
    category: "New",
    image: "/img/image-1.jpeg"
  },
];

const Carousel: React.FC<CarouselProps> = ({
  autoPlayInterval = 5000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<(() => void) | null>(null);
  const items = defaultItems;

  const nextSlide = useCallback(() => {
    if (!autoplayPaused) {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [items.length, autoplayPaused]);

  const prevSlide = useCallback(() => {
    if (!autoplayPaused) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    }
  }, [items.length, autoplayPaused]);

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  }, [nextSlide]);

  useEffect(() => {
    if (!autoplayPaused) {
      const play = () => {
        if (autoPlayRef.current) {
          autoPlayRef.current();
        }
      };

      const interval = setInterval(play, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlayInterval, autoplayPaused]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setAutoplayPaused(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setAutoplayPaused(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setAutoplayPaused(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setAutoplayPaused(false);
  };

  return (
    <>
    <div className="lg:p-[100px] px-[32px] py-[48px]">
        <h2 className="text-[48px] text-[#F44C4C] tracking-tighter">Shop</h2>
        <p>Clothes, shoes, and everything that says Southe.</p>
        <div className="my-4">
            <button className="w-fit px-8 py-4 rounded-full bg-[#212121] text-white flex justify-between gap-[16px] group/btn hover:bg-[#9DED69] hover:text-[#2C5D0B] transition-all">Go to Shop<PiArrowCircleRightDuotone size={24} className="hidden group-hover/btn:block transition-all"/></button>
        </div>
    </div>
    <div className={`relative w-full mx-auto p-4 bg-[#F44C4C] h-[70vh] overflow-hidden ${className}`}>
      <div 
        ref={carouselRef}
        className={`
          relative flex gap-4 transition-all duration-500 ease-in-out overflow-x-auto 
          scrollbar-hide cursor-grab active:cursor-grabbing
        `}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          scrollBehavior: isDragging ? 'auto' : 'smooth',
        }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`
              relative min-w-[280px] rounded-lg overflow-hidden transition-all duration-500
              flex-shrink-0
              ${index === currentIndex 
                ? 'h-[400px] bg-transparent scale-105' 
                : 'h-[300px] bg-gray-900 scale-95'
              }
              ${isDragging ? 'transition-none' : ''}
            `}
          >
            <img
              src={item.image}
              alt={item.title}
              className={`
                absolute inset-0 w-full h-full object-cover transition-opacity duration-500
                ${index === currentIndex ? 'opacity-100' : 'opacity-40'}
                ${isDragging ? 'transition-none' : ''}
              `}
              draggable="false"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-sm text-white">
                  {item.category}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50'}
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
        aria-label="Previous slide"
      >
        <PiArrowCircleDownLeftDuotone size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
        aria-label="Next slide"
      >
        <PiArrowCircleRightBold size={24} />
      </button>
    </div>
    </>
  );
};

export default Carousel;

{/* <section className="flex flex-col justify-center min-h-[50vh] p-[100px]">
            <h2 className="text-[48px] text-[#F44C4C] tracking-tighter">Shop</h2>
            <p>Clothes, shoes, and everything that says Southe.</p>
            <div className="my-4">
            <button className="w-fit px-8 py-4 rounded-full bg-[#212121] text-white flex justify-between gap-[16px] group/btn hover:bg-[#9DED69] hover:text-[#2C5D0B] transition-all">Go to Shop<PiArrowCircleRightDuotone size={24} className="hidden group-hover/btn:block transition-all"/></button>
            </div>

            <div className="carousel">
                <div className="carousel-bg bg-[#F44C4C] w-full h-[80vh] flex items-center">
                    <div className="mx-8 flex items-center gap-8">
                    <div className="w-[500px] h-[400px] bg-[#212121] rounded-lg"></div>
                    <div className="w-[500px] h-[400px] bg-[#212121] rounded-lg"></div>
                    <div className="w-[500px] h-[400px] bg-[#212121] rounded-lg"></div>
                    <div className="w-[500px] h-[400px] bg-[#212121] rounded-lg"></div>
                    <div className="w-[500px] h-[400px] bg-[#212121] rounded-lg"></div>
                    </div>
                </div>
            </div>
            </section> */}