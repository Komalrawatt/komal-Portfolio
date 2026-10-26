import React, { useEffect, useRef } from 'react';

const MatrixRain = ({ colorMode = 'dark' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters: Katakana, Cyrillic, Greek, Numbers & Symbols
    const chars = 'ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ9876543210ABCDEF<>[]{}*+=~!@#$%^&/\\';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Drops store the Y position of each column
    const drops = [];
    const speeds = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
      speeds[i] = Math.random() * 0.8 + 0.6;
    }

    const draw = () => {
      // Create trailing opacity effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright lead character, darker tail
        if (Math.random() > 0.95) {
          ctx.fillStyle = '#ffffff';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#ffffff';
        } else if (colorMode === 'matrix') {
          ctx.fillStyle = '#10b981'; // Matrix Emerald
          ctx.shadowBlur = 3;
          ctx.shadowColor = '#059669';
        } else if (colorMode === 'cyan') {
          ctx.fillStyle = '#06b6d4'; // Cyan
          ctx.shadowBlur = 3;
          ctx.shadowColor = '#0891b2';
        } else {
          // Default subtle matrix monochrome grey as seen in Mihir's website
          ctx.fillStyle = '#404040';
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);

        // Reset drop to top randomly after reaching bottom
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += speeds[i];
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [colorMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-40 md:opacity-50"
    />
  );
};

export default MatrixRain;
