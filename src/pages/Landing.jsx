import { useEffect, useRef, useState } from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Landing() {
  const containerRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getSections = () => Array.from(container.querySelectorAll('section'));
    const getPositions = () => getSections().map((s) => s.offsetTop - container.offsetTop);

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animateScrollTo = (targetTop, duration = 1400) => {
      const startTop = container.scrollTop;
      const distance = targetTop - startTop;
      if (Math.abs(distance) < 2) return;

      let startTime = null;
      setIsAnimating(true);

      const step = (timestamp) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutQuad(progress);
        container.scrollTop = startTop + distance * eased;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setIsAnimating(false);
        }
      };

      requestAnimationFrame(step);
    };

    const findCurrentIndex = () => {
      const positions = getPositions();
      const currentTop = container.scrollTop;
      let nearest = 0;
      let minDelta = Infinity;
      positions.forEach((pos, i) => {
        const d = Math.abs(pos - currentTop);
        if (d < minDelta) {
          minDelta = d;
          nearest = i;
        }
      });
      return { index: nearest, positions };
    };

    let wheelTimeout = null;
    const onWheel = (e) => {
      // Make scrolling controlled and slower
      e.preventDefault();
      if (isAnimating) return;
      if (wheelTimeout) return; // basic throttle to avoid rapid triggers

      const { index, positions } = findCurrentIndex();
      const dir = e.deltaY > 0 ? 1 : -1;
      const next = Math.max(0, Math.min(positions.length - 1, index + dir));
      animateScrollTo(positions[next]);

      wheelTimeout = setTimeout(() => {
        wheelTimeout = null;
      }, 400);
    };

    // Touch support
    let touchStartY = 0;
    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchEnd = (e) => {
      if (isAnimating) return;
      const delta = touchStartY - (e.changedTouches[0]?.clientY || touchStartY);
      if (Math.abs(delta) < 40) return; // ignore tiny swipes
      const { index, positions } = findCurrentIndex();
      const dir = delta > 0 ? 1 : -1;
      const next = Math.max(0, Math.min(positions.length - 1, index + dir));
      animateScrollTo(positions[next]);
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend', onTouchEnd);
      if (wheelTimeout) {
        clearTimeout(wheelTimeout);
        wheelTimeout = null;
      }
    };
  }, [isAnimating]);

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll overscroll-contain snap-y snap-proximity">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Landing;


