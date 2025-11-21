import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Sample banner images
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=1200&h=400&fit=crop',
      title: '신규 제휴 배 운영',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1552574605-5fefe8c9ef14?w=1200&h=400&fit=crop',
      title: '빠른 배 예약',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b1?w=1200&h=400&fit=crop',
      title: '편리한 서비스',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1574080566159-a0fdc0563b5c?w=1200&h=400&fit=crop',
      title: '전국 항구 서비스',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1570555886111-e80fcca6a029?w=1200&h=400&fit=crop',
      title: '24시간 운영',
    },
  ];

  // Auto-rolling
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Touch handling
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden bg-gray-200 rounded-lg"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center px-4">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-gray-800" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-gray-800" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
