import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const [exitInro, setExitIntro] = useState(true);
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
        onComplete: () => setExitIntro(false),
      })
      .from(".intro_land", { opacity: 0, duration: 0.2 }, "<")
      .from(".ele", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
      }, ">1.2");
  }, { scope: comp });

  useEffect(() => {
    if (!exitInro) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          ScrollTrigger.refresh(true);
        }, 150);
      });
    }
  }, [exitInro]);

  return (
    <section id="home" ref={comp} className="relative">
      <div
        id="intro"
        className="h-screen w-full p-10 bg-gray-50 absolute top-0 left-0 z-[1000] text-gray-950 text-4xl md:text-6xl flex flex-col gap-12"
      >
        <h1 id="title1">Iconic. Compact. Timeless.</h1>
        <h2 id="title2">Designed for the City, Loved Everywhere</h2>
        <h2 id="title3">Efficiency Meets Italian Style.</h2>
      </div>

      {exitInro && (
        <div id="introExit" className="h-screen w-full opacity-0 relative z-[999]">
          <div id="inTroBg" className="absolute inset-0 bg-black/55 -z-0"></div>
          <img
            src="/assets/fiatIntro.jpg"
            alt="fiat"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-white z-10 opacity-65">
            <h1 id="tilo" className="text-5xl font-bold">
              Discover the FIAT 500
            </h1>
          </div>
        </div>
      )}

      <div className="intro_land w-screen h-[60svh] md:h-screen">
        <div>
          <video
            src="/assets/fiatcanvas.webm"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute left-0 top-0 size-full object-cover"
          ></video>
        </div>
        <div className="relative w-full h-full flex items-end p-10 md:pb-20">
          <div className="pb-10">
            <h1 className="ele text-lg md:text-3xl mb-5">
              Welcome to the World of FIAT 500
            </h1>
            <h1 className="ele text-lg md:text-3xl mb-5">
              Discover the FIAT 500 Lineup
            </h1>
            <button
              className="ele bg-amber-50 rounded-4xl px-6 py-2 text-black cursor-pointer mt-5 
              hover:bg-amber-100 transition-colors duration-300 "
            >
              <a href="#about">Discover The Model</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
