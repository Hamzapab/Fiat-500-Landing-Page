import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import SplitTextMask from "./TestMask";
import { useRef } from "react";

export default function About() {
   const aboutContainer = useRef<HTMLDivElement>(null);
  
    useGSAP(
      () => {
        const clipTexts = gsap.utils.toArray<HTMLElement>(".clip-text-welcome");
  
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutContainer.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        });
  
        clipTexts.forEach((clipTxt) => {
          tl.fromTo(
            clipTxt,
            { clipPath: "inset(0% 0px 100%)" },
            { clipPath: "inset(0% 0px 0%)", duration: 1, ease: "none" },
            "+=0" // starts immediately after the previous one finishes
          );
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
     <section ref={aboutContainer} className="about mt-50 pt-20">
        <div className="container mx-auto text-5xl  z-0">
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
        <div className="container mx-auto py-10 mt-30 flex items-center justify-between">
          <div>
            <div className="reveal  invisible relative w-[80%] h-[80%] max-w-[500px] overflow-hidden">
              <img
                src="/public/assets/fiats6.jpg"
                className="w-full h-auto object-cover origin-left rounded-md shadow-md"
                alt="Fiat 500"
              />
            </div>
          </div>
          <div className="text-2xl">
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
        <div className="container mx-auto py-2 mt-10 flex items-center justify-between">
      
          <div className="text-2xl ">
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
                src="/public/assets/fiatinside.jfif"
                className="w-full h-auto object-cover origin-left rounded-md shadow-md"
                alt="Fiat 500"
              />
            </div>
          </div>
        </div>

      </section>
  );
}
