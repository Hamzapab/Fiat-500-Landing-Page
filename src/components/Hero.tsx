import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import SplitTextMask from "./TestMask";
import { useRef } from "react";

export default function Hero() {
  const heroContainer = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const introVid = document.querySelector(".IntroVid");
        const introTxt = document.querySelector(".introTxt");

        ScrollTrigger.create({
          trigger: introVid,
          start: "top top",
          endTrigger: introTxt,
          end: "bottom 25%",
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const imgScaleX = 1 - progress * 0.7;
            const imgScaleY = 1 - progress * 0.4;
            if (progress < 0.75) {
              gsap.set(introVid, {
                scaleX: imgScaleX,
                scaleY: imgScaleY,
              });
            }
          },
        });
        ScrollTrigger.create({
          trigger: introTxt,
          start: "top 30%",
          end: "bottom 25%",
          pin: true,
        });
      });
    },
    { scope: heroContainer }
  );
  return (
    <>
      <section ref={heroContainer} className="intro p-0 m-0">
        <div className="introParent w-full h-[100vh] flex items-center justify-center">
          <div className="IntroVid w-[90%] h-[90vh] rounded-md overflow-hidden">
            <div className="vidLayer absolute inset-0 flex items-center justify-center pb-8">
              <h1
                className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg pt-5 lg:pt-20 
              "
              >
                <SplitTextMask text="FIAT 500" className="" delay={0} />
                <SplitTextMask
                  text="Where Style Meets Motion."
                  className=""
                  delay={0}
                />
              </h1>
            </div>
            <video
              src="/assets/intro.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="introTxt mt-4 lg:mt-150 flex items-center justify-between px-8">
          <div>
            <h3 className="text-xl">
              Experience the <br /> spirit of the <br />{" "}
              <span className="text-amber-300 py-2">FIAT 500</span> <br />
              where style <br></br> meets innovation.
            </h3>
          </div>
          <ul>
            <li className="py-2">
              <h5 className="text-amber-300 py-2">. Iconic Design</h5>A timeless
              silhouette with <br></br> a modern twist.
            </li>
            <li className="py-2">
              <h5 className="text-amber-300 py-2">. Italian Spirit</h5>
              Crafted with passion,<br></br> made to stand out.
            </li>
            <li className="py-2">
              <h5 className="text-amber-300 py-2">. Urban Freedom</h5>
              Compact, efficient, and <br></br> perfect for the city.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
