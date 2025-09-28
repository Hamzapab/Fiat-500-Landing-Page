import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Features() {
  const featContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const numbers = gsap.utils.toArray<HTMLElement>(".number");
      const titles = gsap.utils.toArray<HTMLElement>(".title");
      const impactItem = document.querySelector<HTMLElement>(".impact");

      ScrollTrigger.create({
        trigger: featContainer.current,
        start: "top top",
        end: "bottom+=2000vh top",
        pin: true,
      });

      // Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: numbers[0],
          start: "top bottom",
          endTrigger: featContainer.current,
          end: "bottom+=2000vh top",
          scrub: true,
        },
      });

      const titlesTl = gsap.timeline({ paused: true });

      gsap.set(titles[0], { y: 0, opacity: 1 });
      titlesTl.addLabel("step0");

      titles.forEach((title, i) => {
        if (i > 0) {
          titlesTl.addLabel(`step${i}`);
          titlesTl.to(titles[i - 1], {
            y: -140,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
          });
        }

        titlesTl.to(
          title,
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          "<"
        );
      });

      numbers.forEach((num, i) => {
        tl.fromTo(
          num,
          { opacity: 0.3, rotateX: -30, yPercent: 80 },
          {
            opacity: 1,
            rotateX: 0,
            yPercent: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          i === 0 ? 0 : ">-0.1" // stagger overlap
        );
        tl.call(
          () => {
            if (impactItem && impactItem.firstChild) {
              (impactItem.firstChild as HTMLElement).innerText = `${String(
                i + 1
              ).padStart(2, "0")}`;
            }
            titlesTl.tweenTo(`step${i + 1}`);
          },
          [],
          i === 0 ? 0 : ">-0.5"
        );
        if (i !== numbers.length - 1) {
          tl.to(num, {
            opacity: 0.2,
            rotateX: 30,
            yPercent: -120,
            duration: 0.7,
            ease: "power2.in",
          });
          tl.call(
            () => {
               if (impactItem && impactItem.firstChild) {
              (impactItem.firstChild as HTMLElement).innerText = `${String(
                i + 1
              ).padStart(2, "0")}`;
            }
              titlesTl.tweenTo(`step${i + 1}`);
            },
            [],
            "<0.5"
          );
        }
      });
    },
    { scope: featContainer }
  );

  return (
    <>
      <section
        ref={featContainer}
        id="feature"
        className="feature h-screen flex items-center justify-center"
      >
        <div className="container mx-auto">
          <div className="wrapper grid grid-cols-12 items-center gap-y-20 ">
            <div className="col-span-12 md:col-span-4 ps-4">
              <h2 className="text-lg font-semibold">FIAT 500 Highlights</h2>
              <p className="impact text-lg">
                <span className="text-amber-300">01</span> • 04
              </p>
            </div>

            {/* Middle column with numbers */}
            <div className="relative col-span-12 md:col-span-4  z-10">
              <div className="numbers max-w-80 md:max-w-none mx-auto text-center relative bg-white text-gray-700 rounded-full p-6">
                <div className="number text-7xl  xl:text-9xl font-bold">25</div>
                <div className="absolute inset-0 number text-7xl  xl:text-9xl font-bold">
                  500
                </div>
                <div className="absolute inset-0 number text-7xl  xl:text-9xl font-bold">
                  250
                </div>
                <div className="absolute inset-0 number text-7xl  xl:text-9xl font-bold">
                  50
                </div>
              </div>

              {/* Button */}
              <button className="absolute top-full left-1/2 -translate-x-1/2 mt-8 md:mt-14 p-3 rounded-full border border-white/20 hover:border-white transition">
                <svg
                  width="11"
                  height="11"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 11 11"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M5.84 10.867a.5.5 0 0 1-.68 0l-5-4.615a.5.5 0 0 1 .68-.735L5 9.358V.5a.5.5 0 0 1 1 0v8.858l4.16-3.84a.5.5 0 1 1 .68.734l-5 4.615Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Right column with text highlights */}
            <div className="relative col-span-12 md:col-span-3 md:col-start-10">
              <h3 className="is-active title text-lg font-medium ml-auto">
                Over 25 million FIAT 500 units sold worldwide since its 1957
                debut.
              </h3>
              <h3 className="absolute top-0 left-0 w-full title text-lg font-medium ml-auto">
                The iconic FIAT 500 has celebrated more than 500 design awards
                globally.
              </h3>
              <h3 className="absolute top-0 left-0 w-full title text-lg font-medium ml-auto">
                250 km range available in the latest all-electric FIAT 500e
                model.
              </h3>
              <h3 className="absolute top-0 left-0 w-full title text-lg font-medium ml-auto">
                FIAT 500 sales grew by 50% in Europe after the 2020 relaunch.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
