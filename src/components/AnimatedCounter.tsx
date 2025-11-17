import { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
}

const AnimatedCounter = ({ value, duration = 2000 }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState<string>("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateValue = () => {
      // Handle non-numeric values like "Big 4" or "24/7"
      if (typeof value === "string" && (value.includes("Big") || value.includes("/"))) {
        setDisplayValue(value);
        return;
      }

      // Extract numeric value and format info
      let numericValue: number;
      let formatType: "million" | "percent" | "number" = "number";
      
      if (typeof value === "string") {
        // Handle "100M+"
        if (value.includes("M")) {
          numericValue = parseFloat(value.replace("M+", "").replace("+", "").replace("M", ""));
          formatType = "million";
        } 
        // Handle "100%"
        else if (value.includes("%")) {
          numericValue = parseFloat(value.replace("%", ""));
          formatType = "percent";
        } 
        else {
          numericValue = parseFloat(value);
        }
      } else {
        numericValue = value;
      }

      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (numericValue - startValue) * easeOutQuart;

        // Format the current value
        let formatted: string;
        if (formatType === "million") {
          formatted = `${Math.round(currentValue)}M+`;
        } else if (formatType === "percent") {
          formatted = `${Math.round(currentValue)}%`;
        } else {
          formatted = Math.round(currentValue).toString();
        }

        setDisplayValue(formatted);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Ensure final value is exact
          if (formatType === "million") {
            setDisplayValue(`${numericValue}M+`);
          } else if (formatType === "percent") {
            setDisplayValue(`${numericValue}%`);
          } else {
            setDisplayValue(numericValue.toString());
          }
        }
      };

      animate();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateValue();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated, value, duration]);

  return (
    <div ref={elementRef} className="text-4xl md:text-5xl font-bold text-accent mb-2">
      {displayValue || (typeof value === "string" ? value : "0")}
    </div>
  );
};

export default AnimatedCounter;

