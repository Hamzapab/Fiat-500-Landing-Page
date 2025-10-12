import Hero from "./components/Hero";
import StackedCards from "./components/StackedCards";
import About from "./components/About";
import Features from "./components/Features";
import VideoLand from "./components/FiatDesign";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useLenis } from "./hooks/useLenis";
import "./index.css";
// import { useGSAP } from "@gsap/react";
// import { useRef } from "react";

function MainApp() {
  useLenis();
  gsap.registerPlugin(ScrollTrigger);


 

  return (
    <>
      {/* <About /> */}
      <StackedCards />
      <Hero />
      {/* <Features /> */}
      <VideoLand />
      <section className="outro h-screen relative p-7 flex items-center justify-center">
        <h1 className="text-2xl lg:text-5xl">This is Outro One</h1>
      </section>
    </>
  );
}

export default MainApp;
