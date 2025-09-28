import { useRef, useEffect } from 'react';
import './Squares.css';

/*
  This component creates an offscreen canvas tile of height 1000px (and viewport width)
  with the square grid pattern, turns it into a data URL, and applies it as a
  repeating vertical background via CSS. The visible element is a fixed, full-viewport
  div that repeats the tile every 1000px down the page. pointer-events are disabled
  so the background doesn't interfere with page interaction.
*/

const Squares = ({
  direction = 'right',
  speed = 1,
  borderColor = '#999',
  squareSize = 40,
  hoverFillColor = '#222',
  className = ''
}) => {
  const containerRef = useRef(null);
  const tileHeight = 1000; // tile repeats every 1000px vertically
  const animRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let mounted = true;

    const makeTile = (width) => {
      const c = document.createElement('canvas');
      c.width = Math.max(1, Math.floor(width));
      c.height = tileHeight;
      const ctx = c.getContext('2d');

      // draw grid once for the tile
      const startX = 0;
      const startY = 0;

      for (let x = startX; x < c.width + squareSize; x += squareSize) {
        for (let y = startY; y < c.height + squareSize; y += squareSize) {
          const squareX = x - (offset.current.x % squareSize);
          const squareY = y - (offset.current.y % squareSize);
          // no hover effect for the static tile
          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      // subtle radial gradient overlay like before
      const gradient = ctx.createRadialGradient(
        c.width / 2,
        c.height / 2,
        0,
        c.width / 2,
        c.height / 2,
        Math.sqrt(c.width ** 2 + c.height ** 2) / 2
      );
      gradient.addColorStop(0, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, c.width, c.height);

      return c.toDataURL();
    };

    const updateBackground = () => {
      if (!containerRef.current) return;
      const width = window.innerWidth || document.documentElement.clientWidth;
      const dataUrl = makeTile(width);
      // set background image and ensure it repeats vertically every tileHeight
      containerRef.current.style.backgroundImage = `url(${dataUrl})`;
      containerRef.current.style.backgroundRepeat = 'repeat-y';
      // ensure the tile covers full width and keeps its 1000px height
      containerRef.current.style.backgroundSize = `${width}px ${tileHeight}px`;
      containerRef.current.style.backgroundPosition = 'top left';
    };

    // animate offset so tile appears to move directionally by updating the tile periodically
    const step = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      switch (direction) {
        case 'right':
          offset.current.x = (offset.current.x - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'left':
          offset.current.x = (offset.current.x + effectiveSpeed + squareSize) % squareSize;
          break;
        case 'up':
          offset.current.y = (offset.current.y + effectiveSpeed + squareSize) % squareSize;
          break;
        case 'down':
          offset.current.y = (offset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'diagonal':
          offset.current.x = (offset.current.x - effectiveSpeed + squareSize) % squareSize;
          offset.current.y = (offset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        default:
          break;
      }
      // recreate tile to reflect new offset; inexpensive because tile height is bounded
      updateBackground();
      animRef.current = requestAnimationFrame(step);
    };

    updateBackground();
    animRef.current = requestAnimationFrame(step);

    const onResize = () => {
      updateBackground();
    };
    window.addEventListener('resize', onResize);

    return () => {
      mounted = false;
      window.removeEventListener('resize', onResize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [direction, speed, borderColor, squareSize]);

  return <div ref={containerRef} className={`squares-bg ${className}`} />;
};

export default Squares;
