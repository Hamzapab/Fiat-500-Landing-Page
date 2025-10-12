// import { Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import StackedCards from "./components/StackedCards";
import About from "./components/About";
// import Features from "./components/Features";
// import VideoLand from "./components/FiatDesign";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useLenis } from "./hooks/useLenis";
import "./index.css";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function MainApp() {
  useLenis();
  gsap.registerPlugin(ScrollTrigger);

  const introC = useRef(null);

  useGSAP(() => {

    gsap.from(".ele",{
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.8
    })
  },{scope: introC});

  return (
    <>
      {/* <Navbar /> */}
      <section ref={introC} className="w-screen h-screen">
        <div>
          <video
            src="assets/fiatcanvas.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 size-full object-cover"
          ></video>
        </div>
        <div className="relative w-full h-full flex items-end p-10 md:pb-20">
          <div className="pb-10">
            <h1 className="ele text-lg md:text-3xl mb-5">Welcome to the World of FIAT 500</h1>
            <h1 className="ele text-lg md:text-3xl mb-5">Discover the FIAT 500 Lineup</h1>
            <button  className="ele bg-amber-50 rounded-4xl px-6 py-2 text-black cursor-pointer mt-5 
             hover:bg-amber-100 transition-colors duration-300 ">
              <a href="#about">Discover The Model</a>
            </button>
          </div>
        </div>
      </section>
      <About />
      <Hero />
      {/* <Features /> */}
      {/* <VideoLand /> */}
      <section className="outro h-screen relative p-7 flex items-center justify-center">
        <h1 className="text-2xl lg:text-5xl">This is Outro One</h1>
      </section>
    </>
  );
}

export default MainApp;
