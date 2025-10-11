import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Intro({ onFinish }: { onFinish: () => void }) {
  const comp = useRef(null);

  useGSAP(() => {
    const t1 = gsap.timeline();

    t1.from("#intro", { xPercent: -100, duration: 1.2, delay: 0.3 })
      .from(["#title1", "#title2", "#title3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      })
      .to(["#title1", "#title2", "#title3"], {
        opacity: 0,
        y: "-=30",
        stagger: 0.5,
      })
      .to("#introExit", { opacity: 1 }, "<")
      .to("#intro", { xPercent: -100, duration: 1.2 })
      .from("#tilo", { opacity: 0, y: "+=20" })
      .to("#introExit", {
        yPercent: -100,
        duration: 1.5,
        delay: 0.4,
        onComplete: onFinish, // ✅ tell parent intro is done
      });
  }, { scope: comp });

  return (
    <div ref={comp} className="relative">
      <div
        id="intro"
        className="h-screen w-full p-10 bg-gray-50 absolute top-0 left-0 z-10 text-gray-950 text-6xl flex flex-col gap-12"
      >
        <h1 id="title1">Iconic. Compact. Timeless.</h1>
        <h2 id="title2">Designed for the City, Loved Everywhere</h2>
        <h2 id="title3">Efficiency Meets Italian Style.</h2>
      </div>

      <div id="introExit" className="h-screen w-full opacity-0">
        <div id="inTroBg" className="absolute inset-0 bg-black/55 -z-0"></div>
        <img
          src="/public/assets/fiatIntro.jpg"
          alt="fiat"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-white z-10 opacity-65">
          <h1 id="tilo" className="text-5xl font-bold">
            Discover the FIAT 500
          </h1>
        </div>
      </div>
    </div>
  );
}
