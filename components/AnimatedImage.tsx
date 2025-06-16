"use client";

import { useEffect, useRef, useState } from "react";
import Image, { ImageProps } from "next/image";

interface AnimatedImageProps extends ImageProps {
  triggerClass?: string;
  animateClass?: string;
}

export default function AnimatedImage({
  triggerClass = "",
  animateClass = "slash",
  ...props
}: AnimatedImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Optional: only animate once
        }
      },
      { threshold: 0.1 }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => observer.disconnect();
  }, []);

  const className = `${triggerClass} ${isVisible ? animateClass : ""}`.trim();

  return (
    <div ref={ref} className={className}>
      <Image {...props} loading={props.loading ?? "lazy"} alt=""/>
    </div>
  );
}
