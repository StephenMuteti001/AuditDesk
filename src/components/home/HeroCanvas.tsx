import { useEffect, useRef } from 'react';

type Node = {x: number;y: number;vx: number;vy: number;r: number;};
type Stream = {x: number;y: number;len: number;speed: number;alpha: number;};

/**
 * Self-contained "footage" layer for the hero.
 *
 * Renders a continuously moving telemetry field — drifting event streams, a
 * sparse node mesh and a slow light sweep — so the hero reads like live video
 * without shipping a multi-megabyte MP4. Honours prefers-reduced-motion by
 * painting a single static frame.
 */
export function HeroCanvas({ className }: {className?: string;}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let streams: Stream[] = [];
    let tick = 0;

    const seed = () => {
      const nodeCount = Math.round(Math.min(64, Math.max(22, width * height / 28000)));
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.14,
        r: Math.random() * 1.4 + 0.6
      }));

      const streamCount = Math.round(Math.min(42, Math.max(12, height / 20)));
      streams = Array.from({ length: streamCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        len: 50 + Math.random() * 230,
        speed: 0.3 + Math.random() * 1.5,
        alpha: 0.04 + Math.random() * 0.2
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const paint = () => {
      ctx.clearRect(0, 0, width, height);

      // --- event streams (the "log river") ---
      ctx.lineCap = 'round';
      ctx.lineWidth = 1;
      for (const s of streams) {
        const gradient = ctx.createLinearGradient(s.x, s.y, s.x + s.len, s.y);
        gradient.addColorStop(0, 'rgba(120,160,255,0)');
        gradient.addColorStop(0.5, `rgba(140,180,255,${s.alpha})`);
        gradient.addColorStop(1, 'rgba(120,160,255,0)');
        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.len, s.y);
        ctx.stroke();

        s.x -= s.speed;
        if (s.x + s.len < 0) {
          s.x = width + Math.random() * 180;
          s.y = Math.random() * height;
          s.len = 50 + Math.random() * 230;
          s.speed = 0.3 + Math.random() * 1.5;
          s.alpha = 0.04 + Math.random() * 0.2;
        }
      }

      // --- node mesh ---
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < -40) a.x = width + 40;
        if (a.x > width + 40) a.x = -40;
        if (a.y < -40) a.y = height + 40;
        if (a.y > height + 40) a.y = -40;

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 165) {
            ctx.strokeStyle = `rgba(130,170,255,${(1 - dist / 165) * 0.16})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = 'rgba(175,205,255,0.5)';
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- slow light sweep ---
      const sweepX = tick * 0.55 % (width + 700) - 350;
      const sweep = ctx.createLinearGradient(sweepX - 180, 0, sweepX + 180, 0);
      sweep.addColorStop(0, 'rgba(90,140,255,0)');
      sweep.addColorStop(0.5, 'rgba(90,140,255,0.07)');
      sweep.addColorStop(1, 'rgba(90,140,255,0)');
      ctx.fillStyle = sweep;
      ctx.fillRect(sweepX - 180, 0, 360, height);

      tick += 1;
    };

    const loop = () => {
      paint();
      frame = window.requestAnimationFrame(loop);
    };

    resize();
    if (reduceMotion) {
      paint();
    } else {
      frame = window.requestAnimationFrame(loop);
    }

    window.addEventListener('resize', resize);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas data-ev-id="ev_56a478488d" ref={canvasRef} aria-hidden="true" className={className} />;
}