import React, { useEffect } from 'react';

const InteractiveBackground: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const colors = ["#8E0D3C", "#1D1842", "#EF3B33", "#FDA1A2"];
    const cursor = document.createElement('div');
    cursor.style.position = 'fixed';
    cursor.style.top = '0';
    cursor.style.left = '0';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.pointerEvents = 'none';
    cursor.style.mixBlendMode = 'difference';
    cursor.style.zIndex = '9999';
    cursor.style.transition = 'transform 60ms linear';
    document.body.appendChild(cursor);

    let colorIndex = 0;
    const onMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };
    window.addEventListener('mousemove', onMouseMove);

    const intervalId = window.setInterval(() => {
      cursor.style.background = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    }, 600);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.clearInterval(intervalId);
      cursor.remove();
    };
  }, []);

  return null;
};

export default InteractiveBackground;


