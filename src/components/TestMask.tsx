import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import  { useRef } from "react";


interface SplitTextProps {
  text: string;
  className?: string; // custom Tailwind styles
  delay?: number;     // optional delay
  triggerOnce?: boolean; // if true, plays once, else replays on scroll
  scrollTrigger?:boolean;
}

export default function SplitTextMask({
  text,
  className = "",
  delay = 0,
  scrollTrigger = false
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const letters = containerRef.current?.querySelectorAll(".char");

    let tl: GSAPTimeline | GSAP;
     
     if(scrollTrigger){
       tl = gsap.timeline({
        scrollTrigger: {
          trigger: letters,
          start: "top 90%",
          end: "bottom center",
          scrub: true,
        },
      });
     }else{
      tl = gsap;
     }

    if (letters && tl) {
      tl.fromTo(
        letters,
        { x: "100%" },
        {
          x: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay,
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className={`flex space-x-1 ${className}`}>
      {text.split("").map((char, index) => (
        <span key={index} className="mask overflow-hidden inline-block">
          <span className="char inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </div>
  );
}

