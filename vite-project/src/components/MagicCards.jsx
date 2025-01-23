import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#06201b", // Deep green background
  gradientOpacity = 0.5, // Background opacity
  gradientFrom = "#cd7f32", // Start color for border (metallic gold)
  gradientTo = "#e5b873", // End color for border (lighter gold)
}) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }
    },
    [mouseX, mouseY]
  );

  const handleMouseOut = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  const handleMouseEnter = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseOut, handleMouseEnter]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative flex size-full rounded-xl overflow-hidden",
        className
      )}
    >
      {/* Gradient border on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientFrom}, 
              ${gradientTo})
          `,
          zIndex: 20, // Ensure this is above the gray background
        }}
      />

      {/* Gray background with slight hover effect */}
      <motion.div
        className="pointer-events-none absolute inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, 
              ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
          zIndex: 10, // Ensure this is below the gradient border
        }}
      />

      {/* Children content */}
      <div className="relative z-30">{children}</div>
    </div>
  );
}