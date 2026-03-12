import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const position = useRef({ x: -100, y: -100 });
  const rendered = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], [data-interactive]")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    let raf: number;
    const animate = () => {
      rendered.current.x += (position.current.x - rendered.current.x) * 0.15;
      rendered.current.y += (position.current.y - rendered.current.y) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${rendered.current.x}px, ${rendered.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Hide on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] transition-[width,height,opacity] duration-200 ease-out"
      style={{
        width: isHovering ? 48 : 20,
        height: isHovering ? 48 : 20,
        borderRadius: "50%",
        background: "hsla(220, 15%, 10%, 0.08)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "1px solid hsla(220, 15%, 10%, 0.12)",
        boxShadow: isHovering
          ? "0 0 24px 4px hsla(220, 15%, 10%, 0.06)"
          : "0 0 12px 2px hsla(220, 15%, 10%, 0.03)",
      }}
    />
  );
};

export default CustomCursor;
