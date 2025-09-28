// This here use UseGsap instead of useLayput effect jsut to showcase

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function WorkApp() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".card");

      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          markers: true,
        });
      });
    },
    { scope: container } // ensures cleanup + scoping
  );

  return (
    <div ref={container} className="w-screen overflow-x-hidden">
      {/* Intro */}
      <section className="w-screen h-screen bg-black flex items-center justify-center text-white text-4xl">
        Intro
      </section>

      {/* Cards */}
      <div className="relative flex flex-col items-center gap-[25vh]">
        <div className="card h-[500px] w-[90%] flex items-center justify-center text-white text-5xl bg-[#f76]">
          Card 1
        </div>
        <div className="card h-[500px] w-[90%] flex items-center justify-center text-white text-5xl bg-[#6af]">
          Card 2
        </div>
        <div className="card h-[500px] w-[90%] flex items-center justify-center text-white text-5xl bg-[#7f6]">
          Card 3
        </div>
        <div className="card h-[500px] w-[90%] flex items-center justify-center text-white text-5xl bg-[#fa6]">
          Card 4
        </div>
      </div>

      {/* Outro */}
      <section className="w-screen h-[300vh] bg-black flex items-center justify-center text-white text-4xl">
        Outro
      </section>
    </div>
  );
}

export default WorkApp;
