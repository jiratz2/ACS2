import React, { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ใช้ requestAnimationFrame เพื่อสร้างเอฟเฟกต์ damping
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setAnimatedProgress((prev) => {
        const stiffness = 0.1; // ค่าความแข็ง (ยิ่งต่ำ ยิ่งหน่วงเยอะ)
        const damping = 0.8; // ค่าหน่วง (ใกล้ 1 จะช้าลง)
        const newProgress = prev * damping + scrollProgress * (1 - damping);
        return Math.abs(newProgress - prev) < 0.01 ? scrollProgress : newProgress;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollProgress]);

  return (
    <>
      <div className="progress-bar" style={{ width: `${animatedProgress}%` }} />
      <h1>CSS + JS Scroll-Linked Animation</h1>
      <Content />
    </>
  );
}

export default App;
