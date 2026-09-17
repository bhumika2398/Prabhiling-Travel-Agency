import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SlowmoScrollObserver() {
  const location = useLocation();

  useEffect(() => {
    const attachObserver = () => {
      // Select sections, headers, cards, grid items, and components across the website
      const selector = [
        'section',
        '.section-header',
        '.section-tag',
        '.section-title',
        '.section-desc',
        '.card',
        '.paper-card',
        '.slowmo-reveal',
        'main > div > section > div > div',
        '.grid > *',
        '[style*="display: grid"] > *',
        '[style*="display:grid"] > *',
        '.hero-about-text',
        '.hero-about-image',
        '.btn-primary',
        '.btn-secondary'
      ].join(', ');

      const targets = document.querySelectorAll(selector);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('slowmo-visible');
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px'
        }
      );

      targets.forEach((target) => {
        if (!target.classList.contains('slowmo-init')) {
          target.classList.add('slowmo-init');

          // Stagger sibling components so they appear one by one in slowmo sequence
          if (target.parentElement) {
            const siblings = Array.from(target.parentElement.children);
            const index = siblings.indexOf(target);
            if (index >= 0) {
              target.style.transitionDelay = `${(index % 6) * 0.15}s`;
            }
          }

          observer.observe(target);
        }
      });
    };

    attachObserver();

    // Periodically re-check for dynamically rendered elements or page navigations
    const interval = setInterval(attachObserver, 500);

    return () => clearInterval(interval);
  }, [location.pathname]);

  return null;
}
