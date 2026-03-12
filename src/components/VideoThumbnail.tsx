import { useEffect, useRef } from "react";

interface VideoThumbnailProps {
  src: string;
  poster?: string;
  alt: string;
}

const VideoThumbnail = ({ src, poster, alt }: VideoThumbnailProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={alt}
        className="object-cover w-full h-full opacity-80"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoThumbnail;
