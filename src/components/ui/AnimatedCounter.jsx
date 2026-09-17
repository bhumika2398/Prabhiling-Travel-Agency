import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000, formatCommas = true }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // Extract pure number from string target if needed
  const numericTarget = typeof target === 'number'
    ? target
    : parseInt(String(target).replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth Ease-Out Power 3 formula
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * numericTarget);

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(numericTarget);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, numericTarget, duration]);

  const displayString = formatCommas ? count.toLocaleString('en-IN') : count;

  return (
    <span ref={elementRef}>
      {prefix}{displayString}{suffix}
    </span>
  );
}
