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
        <div className="introParent w-full md:h-[100vh] flex items-center justify-center pt-20 md:pt-3">
          <div className="IntroVid relative w-auto md:w-[90%] h-fit md:h-[90vh] md:rounded-md overflow-hidden">
            <div className="vidLayer absolute inset-0 flex items-center justify-center pb-8">
              <h1
                className="text-white text-lg md:text-5xl font-bold drop-shadow-lg 
                absolute left-5 bottom-5 
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
        <div className="introTxt mt-20 lg:mt-150 flex md:items-center flex-col md:flex-row  justify-between px-8">
          <div>
            <h3 className="text-xl text-center md:text-start">
              Experience the <br /> spirit of the <br />{" "}
              <span className="text-amber-300 py-2">FIAT 500</span> <br />
              where style <br></br> meets innovation.
            </h3>
          </div>
          <ul className="text-center md:text-start">
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
