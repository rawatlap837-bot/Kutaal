import { useEffect, useRef, useState } from "react";

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal-section${visible ? " is-visible" : ""}`}>{children}</div>;
};

export default Reveal;
