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
      <About />
      <StackedCards />
      <Features />
      <Hero />
      <VideoLand />
      <footer className="py-15 pt-40 bg-white text-black  px-8 flex flex-col md:flex-row items-start justify-between">
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold">FIAT 500 Experience</h4>
          <p className="text-sm text-black">
            Crafted with passion and precision — inspired by Italian design.
          </p>
        </div>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://hamzapab.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300   transition"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/HamzaPab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition"
          >
            GitHub
          </a>
        </div>

        <div className="mt-4 md:mt-0 text-sm text-gray-900 text-center md:text-right">
          © {new Date().getFullYear()} — Built by{" "}
          <span className="text-amber-300 font-medium">Hamza Pab</span>
        </div>
      </footer>
    </>
  );
}

export default MainApp;
