import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const position = useRef({ x: -100, y: -100 });
  const rendered = useRef({ x: -100, y: -100 });
  const glowRendered = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button, [role='button'], [data-interactive]"));
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    let raf: number;
    const animate = () => {
      rendered.current.x += (position.current.x - rendered.current.x) * 0.18;
      rendered.current.y += (position.current.y - rendered.current.y) * 0.18;
      glowRendered.current.x += (position.current.x - glowRendered.current.x) * 0.08;
      glowRendered.current.y += (position.current.y - glowRendered.current.y) * 0.08;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${rendered.current.x}px, ${rendered.current.y}px) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowRendered.current.x}px, ${glowRendered.current.y}px) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px) translate(-50%, -50%)`;
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

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer glow trail */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] transition-[width,height,opacity] duration-300 ease-out"
        style={{
          width: isHovering ? 64 : 36,
          height: isHovering ? 64 : 36,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsla(220, 20%, 30%, 0.12) 0%, hsla(220, 20%, 30%, 0) 70%)",
          filter: "blur(2px)",
        }}
      />
      {/* Main glass cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] transition-[width,height,opacity,border-color] duration-200 ease-out"
        style={{
          width: isHovering ? 52 : 22,
          height: isHovering ? 52 : 22,
          borderRadius: "50%",
          background: isHovering
            ? "radial-gradient(ellipse at 30% 30%, hsla(220, 20%, 40%, 0.18) 0%, hsla(220, 15%, 50%, 0.08) 50%, hsla(220, 10%, 60%, 0.03) 100%)"
            : "radial-gradient(ellipse at 30% 30%, hsla(220, 20%, 40%, 0.14) 0%, hsla(220, 15%, 50%, 0.06) 50%, hsla(220, 10%, 60%, 0.02) 100%)",
          backdropFilter: "blur(12px) saturate(1.4)",
          WebkitBackdropFilter: "blur(12px) saturate(1.4)",
          border: isHovering
            ? "1.5px solid hsla(220, 20%, 30%, 0.3)"
            : "1px solid hsla(220, 15%, 30%, 0.2)",
          boxShadow: isHovering
            ? "0 0 30px 6px hsla(220, 20%, 30%, 0.08), inset 0 0 20px hsla(220, 20%, 50%, 0.06)"
            : "0 0 16px 3px hsla(220, 15%, 30%, 0.05), inset 0 0 12px hsla(220, 20%, 50%, 0.04)",
        }}
      />
    </>
  );
};

export default CustomCursor;
