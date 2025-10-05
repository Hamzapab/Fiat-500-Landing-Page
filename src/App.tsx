// import { Routes } from "react-router-dom";
// import Navbar from "./components/navbar";
// import Intro from "./components/Intro";
// import Hero from "./components/Hero";
// import StackedCards from "./components/StackedCards";
// import About from "./components/About";
// import Features from "./components/Features";
import VideoLand from "./components/FiatDesign";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import SplitTextMask from "./components/TestMask";
// import { useRef } from "react";
import { gsap } from "gsap";
import { useLenis } from "./hooks/useLenis";
import "./index.css";

function App() {
  useLenis();
  gsap.registerPlugin(ScrollTrigger);


  return (
    <>
      <section className="outro h-screen relative p-7 flex items-center justify-center">
        <h1 className="text-2xl lg:text-5xl">This is Intro One</h1>
      </section>
      <VideoLand />
      <section className="outro h-screen relative p-7 flex items-center justify-center">
        <h1 className="text-2xl lg:text-5xl">This is Outro One</h1>
      </section>
    </>
  );
}

export default App;
