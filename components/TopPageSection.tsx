'use client';

import { useEffect, useRef, useState } from 'react';

const TopPageSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="top-page-section" className="shopify-section section">
      <div className="color-background-1 gradient">
        <div
          ref={ref}
          className={`section-template-padding ${inView ? 'slash' : ''}`}
        >
          {/* Your content goes here */}
        </div>
      </div>
    </section>
  );
};

export default TopPageSection;