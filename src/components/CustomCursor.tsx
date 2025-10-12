import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    if (!isBrowser) return;

    // Check if we're on a desktop device (screen width > 768px)
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, [isBrowser]);

  useEffect(() => {
    if (!isBrowser) return;

    if (isDesktop) {
      // Create cursor if it doesn't exist
      if (!cursorRef.current) {
        const cursor = document.createElement("div");
        cursor.id = "custom-cursor";
        cursorRef.current = cursor;
        document.body.appendChild(cursor);

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let cursorX = mouseX;
        let cursorY = mouseY;

        // Lerp function for smooth trailing
        function lerp(a: number, b: number, n: number) {
          return (1 - n) * a + n * b;
        }

        const render = () => {
          cursorX = lerp(cursorX, mouseX, 0.18);
          cursorY = lerp(cursorY, mouseY, 0.18);
          cursor.style.left = cursorX + "px";
          cursor.style.top = cursorY + "px";
          animationFrameRef.current = requestAnimationFrame(render);
        };

        const moveCursor = (e: MouseEvent) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
        };

        const handlePointerOver = (e: MouseEvent) => {
          document.body.classList.add("has-custom-cursor");
          const target = e.target as HTMLElement;
          if (
            target.closest(
              "button, a, input, textarea, select, [role=button], [tabindex]:not([tabindex='-1'])"
            )
          ) {
            cursor.classList.add("custom-cursor-hover");
          } else {
            cursor.classList.remove("custom-cursor-hover");
          }
        };

        const handleMouseEnter = (e: MouseEvent) => {
          const target = e.target as HTMLElement;
          if (
            target.closest(
              "button, a, input, textarea, select, [role=button], [tabindex]:not([tabindex='-1'])"
            )
          ) {
            cursor.classList.add("custom-cursor-hover");
          }
        };

        const handleMouseLeave = () => {
          cursor.classList.remove("custom-cursor-hover");
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handlePointerOver);
        window.addEventListener("mouseenter", handleMouseEnter, true);
        window.addEventListener("mouseleave", handleMouseLeave, true);

        document.body.classList.add("has-custom-cursor");
        animationFrameRef.current = requestAnimationFrame(render);

        // Cleanup function
        return () => {
          window.removeEventListener("mousemove", moveCursor);
          window.removeEventListener("mouseover", handlePointerOver);
          window.removeEventListener("mouseenter", handleMouseEnter, true);
          window.removeEventListener("mouseleave", handleMouseLeave, true);
          document.body.classList.remove("has-custom-cursor");
          if (cursor.parentNode) {
            document.body.removeChild(cursor);
          }
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
        };
      }
    } else {
      // Remove cursor if it exists
      if (cursorRef.current && cursorRef.current.parentNode) {
        document.body.removeChild(cursorRef.current);
        cursorRef.current = null;
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      document.body.classList.remove("has-custom-cursor");
    }

    return undefined;
  }, [isDesktop, isBrowser]);

  return null;
}
