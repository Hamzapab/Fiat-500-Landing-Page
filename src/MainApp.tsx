// import { Routes } from "react-router-dom";
// import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import StackedCards from "./components/StackedCards";
import About from "./components/About";
import Features from "./components/Features";
import VideoLand from "./components/FiatDesign";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useLenis } from "./hooks/useLenis";
import "./index.css";

function MainApp() {
  useLenis();
  gsap.registerPlugin(ScrollTrigger);


  return (
    <>
      <section className="outro h-screen relative p-7 flex items-center justify-center">
        <h1 className="text-2xl lg:text-5xl">This is Intro One</h1>
      </section>
      <Hero />
      <StackedCards />
      <About />
      <Features />
      <VideoLand />
      <section className="outro h-screen relative p-7 flex items-center justify-center">
        <h1 className="text-2xl lg:text-5xl">This is Outro One</h1>
      </section>
    </>
  );
}

export default MainApp;
