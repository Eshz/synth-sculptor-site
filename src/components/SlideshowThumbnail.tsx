import { useEffect, useRef, useState } from "react";

interface SlideshowThumbnailProps {
  images: string[];
  alt: string;
  interval?: number;
}

const SlideshowThumbnail = ({ images, alt, interval = 1800 }: SlideshowThumbnailProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && images.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, interval);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setCurrentIndex(0);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isVisible, images.length, interval]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {images.map((src, i) => (
        <img
          key={src}
          alt={`${alt} ${i + 1}`}
          src={src}
          loading="lazy"
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-700 ${
            i === currentIndex ? "opacity-80" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default SlideshowThumbnail;
