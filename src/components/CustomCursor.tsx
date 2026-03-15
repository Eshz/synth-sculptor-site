import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const ringVel = useRef({ x: 0, y: 0 });

  // Spring physics constants
  const stiffness = 250;
  const damping = 25;
  const mass = 0.5;

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      // Dot follows with zero latency
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button, .cursor-pointer, [role='button'], [data-interactive]"));
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    let raf: number;
    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.064); // cap delta
      lastTime = now;

      const dx = mouse.current.x - ringPos.current.x;
      const dy = mouse.current.y - ringPos.current.y;

      // Spring force: F = -k * displacement - damping * velocity
      const ax = (stiffness * dx - damping * ringVel.current.x) / mass;
      const ay = (stiffness * dy - damping * ringVel.current.y) / mass;

      ringVel.current.x += ax * dt;
      ringVel.current.y += ay * dt;
      ringPos.current.x += ringVel.current.x * dt;
      ringPos.current.y += ringVel.current.y * dt;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
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
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Inner dot — zero latency */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000]"
        style={{
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "#141414",
        }}
      />
      {/* Outer glassmorphism ring — spring physics */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          borderRadius: "50%",
          background: isHovering
            ? "rgba(255, 255, 255, 0.25)"
            : "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: isHovering
            ? "1.5px solid rgba(255, 255, 255, 0.5)"
            : "1px solid rgba(255, 255, 255, 0.35)",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)",
          transition: "width 250ms ease-out, height 250ms ease-out, background 250ms ease-out, border 250ms ease-out",
          willChange: "transform",
        }}
      />
    </>
  );
};

export default CustomCursor;
