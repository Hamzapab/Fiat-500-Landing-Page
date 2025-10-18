import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import SplitTextMask from "./TestMask";
import { useRef } from "react";

export default function About() {
   const aboutContainer = useRef<HTMLDivElement>(null);
  
    useGSAP(
      () => {
        const clipTexts = gsap.utils.toArray<HTMLElement>(".clip-text-welcome");
        const aboutMob = gsap.utils.toArray<HTMLElement>(".aboutMob p");
  
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutContainer.current,
            start: "top bottom+=10",
            end: "bottom-=300 bottom",
            scrub: true,
          },
        });
  
        clipTexts.forEach((clipTxt) => {
          tl.fromTo(
            clipTxt,
            { clipPath: "inset(0% 0px 100%)" },
            { clipPath: "inset(0% 0px 0%)", duration: 0.5, ease: "none" },
            "+=0" 
          );
        });

      // Aniamte text on mobile
      aboutMob.forEach((p) => {
        gsap.from(p, {
          opacity: 0,
          y: 100,
          scrollTrigger: {
            trigger: p,
            start: "top 85%", 
            toggleActions: "play none none reverse", 
          },
        });
      });
  
        //  Reveal Image
        const revealContainer = document.querySelector(".reveal");
        const revealContainer2 = document.querySelector(".reveal2");
  
        if (revealContainer) {
          const image = revealContainer.querySelector("img");
          const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: revealContainer,
              toggleActions: "restart none none reset",
            },
          });
  
          tl2.set(revealContainer, { autoAlpha: 1 });
          tl2.from(revealContainer, 1.5, {
            xPercent: -100,
            ease: "Power2.out",
          });
          tl2.from(image, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: "Power2.out",
          });
        }
        if (revealContainer2) {
          const image = revealContainer2.querySelector("img");
          const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: revealContainer2,
              toggleActions: "restart none none reset",
            },
          });
  
          tl2.set(revealContainer2, { autoAlpha: 1 });
          tl2.from(revealContainer2, 1.5, {
            xPercent: 100,
            ease: "Power2.out",
          });
          tl2.from(image, 1.5, {
            xPercent: -100,
            scale: 1.3,
            delay: -1.5,
            ease: "Power2.out",
          });
        }
      },
      { scope: aboutContainer }
    );
  return (
     <section id="about" ref={aboutContainer} className="about mt-10 pt-20 mb-20">
        <div className="container mx-auto px-4 text-2xl md:text-5xl  z-0">
          <span className="relative abtText block mt-1">
            <span className="relative block text-darkBrown">
              Welcome to the World of FIAT 500
              <span className="clip-text-welcome text-white">
                Welcome to the World of FIAT 500
              </span>
            </span>
          </span>
          <span className="relative abtText block mt-1">
            <span className="relative block text-darkBrown">
              Step into the timeless charm of the FIAT 500
              <span className="clip-text-welcome text-white">
                Step into the timeless charm of the FIAT 500
              </span>
            </span>
          </span>
          <span className="relative abtText block mt-1">
            <span className="relative block text-darkBrown">
              Where Italian design meets modern innovation
              <span className="clip-text-welcome text-white">
                Where Italian design meets modern innovation
              </span>
            </span>
          </span>
          <span className="relative abtText block mt-1">
            <span className="relative block text-darkBrown">
              FIAT 500 has always been more than a car
              <span className="clip-text-welcome text-white">
                FIAT 500 has always been more than a car
              </span>
            </span>
          </span>
          <span className="relative abtText block mt-1">
            <span className="relative block text-darkBrown">
              It’s a symbol of freedom, individuality, and effortless style.
              <span className="clip-text-welcome text-white">
                It’s a symbol of freedom, individuality, and effortless style.
              </span>
            </span>
          </span>
        </div>
        <div className="container mx-auto py-10 px-4 mt-30  flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0">
          <div>
            <div className="reveal  invisible relative w-[80%] h-[80%] max-w-[500px] overflow-hidden">
              <img
                src="/assets/fiats6.jpg"
                className="w-full h-auto object-cover origin-left rounded-md shadow-md"
                alt="Fiat 500"
              />
            </div>
          </div>
          <div className="aboutMob text-xl block md:hidden">
             <p className="mb-3">Born in 1957 and loved by millions worldwide</p>
             <p className="mb-3">The FIAT 500 remains a cultural icon</p>
             <p className="mb-3">Over 6 million FIAT 500s</p>
             <p className="mb-3">Sold worldwide since its debut.</p>
          </div>
          <div className="text-2xl hidden md:block">
            <SplitTextMask
              text="Born in 1957 and loved by millions worldwide"
              className="mb-3"
              delay={0}
              scrollTrigger={true}
            />
            <SplitTextMask
              text="The FIAT 500 remains a cultural icon"
              className="mb-3"
              delay={0}
              scrollTrigger={true}
            />
            <SplitTextMask
              text="Over 6 million FIAT 500s"
              className="mb-3"
              delay={0}
              scrollTrigger={true}
            />
            <SplitTextMask
              text="Sold worldwide since its debut."
              className="mb-3"
              delay={0}
              scrollTrigger={true}
            />
          </div>
        </div>
        <div className="container mx-auto px-4 py-2 mt-10 flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between">
          <div className="aboutMob text-xl block md:hidden">
             <p className="mb-3">Soft-touch materials, ambient lighting</p>
             <p className="mb-3">and smart space design</p>
          </div>
          <div className="text-2xl hidden md:block ">
            <SplitTextMask
              text="Soft-touch materials, ambient lighting"
              className="mb-3"
              delay={0}
              scrollTrigger={true}
            />
            <SplitTextMask
              text="and smart space design"
              className="mb-3"
              delay={0}
              scrollTrigger={true}
            />
          
          </div>
           <div>
            <div className="reveal2  invisible relative w-[80%] h-[80%] min-w-[320px] max-w-[700px] overflow-hidden">
              <img
                src="/assets/fiatinside.jfif"
                className="w-full h-auto object-cover origin-left rounded-md shadow-md"
                alt="Fiat 500"
              />
            </div>
          </div>
        </div>

      </section>
  );
}
