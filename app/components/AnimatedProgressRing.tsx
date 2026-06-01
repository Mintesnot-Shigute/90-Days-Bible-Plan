import { useEffect, useRef } from "react";

interface AnimatedProgressRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
}

export function AnimatedProgressRing({
  percentage,
  size = 120,
  strokeWidth = 8,
  color = "#b8860b",
  backgroundColor = "#d4a574",
}: AnimatedProgressRingProps) {
  const svgRef = useRef<SVGCircleElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.style.strokeDashoffset = offset.toString();
    }
  }, [offset]);

  // Animate counter
  useEffect(() => {
    if (!textRef.current) return;
    
    const start = 0;
    const end = percentage;
    const duration = 800;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(start + (end - start) * progress);
      
      if (textRef.current) {
        textRef.current.textContent = `${current}%`;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, [percentage]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          ref={svgRef}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center text-lg font-bold text-ink"
      >
        0%
      </div>
    </div>
  );
}
