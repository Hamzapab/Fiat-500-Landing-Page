import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useMarqueeAnimation } from "../hooks/useMarqueeAnimation";

function StackedCards() {
  useMarqueeAnimation(".marquee h1", { speed: 1.2, paddingRight: 40 });
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
       
      const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
          const cards = gsap.utils.toArray(".card") as HTMLElement[];
          const introCard = cards[0];

          const cardImgWrapper = introCard.querySelector(".card-img");
          const cardImg = introCard.querySelector(".card-img img");
          const cardContent = introCard.querySelector(".card-content");

          gsap.set(cardImgWrapper, { scale: 0.5, borderRadius: "180px" });
          gsap.set(cardImg, { scale: 1 });
          gsap.set(cardContent, {
            opacity: 0,
            scale: 0.5,
            borderRadius: "180px",
          });

          ScrollTrigger.create({
            trigger: introCard,
            start: "top top",
            end: "+=400vh",
            onUpdate: (self) => {
              const progress = self.progress;
              const imgScale = 0.5 + progress * 0.5;
              const borderRadius = 180 - progress * 155;
              const innerScaleImg = 1 + progress * 0.1;

              gsap.set(cardImgWrapper, {
                scale: imgScale,
                borderRadius: borderRadius + "px",
              });
              gsap.set(cardImg, { scale: innerScaleImg });

              const contentOpacity = gsap.utils.clamp(
                0,
                1,
                (progress - 0.8) * 5
              );

              gsap.set(cardContent, {
                opacity: contentOpacity,
                scale: imgScale,
                borderRadius: borderRadius + "px",
              });
            },
            scrub: 1,
          });
          cards.forEach((card, index) => {
            const isLastCard = index === cards.length - 1;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const scrollTriggerConfig: any = {
              trigger: card,
              start: "top top",
              end: isLastCard ? "+=100vh" : "top top",
              endTrigger: isLastCard ? null : cards[cards.length - 1],
              pin: true,
              pinSpacing: isLastCard,
              anticipatePin: 1,
            };
            ScrollTrigger.create(scrollTriggerConfig);
          });

          cards.forEach((card, index) => {
            if (index > 0) {
              const cardContent = card.querySelector(".card-content");
              gsap.set(cardContent, { opacity: 0 });

              ScrollTrigger.create({
                trigger: card,
                start: "top 10%",
                end: "top top",
                onUpdate: (self) => {
                  const progress = self.progress;
                  gsap.set(cardContent, {
                    opacity: 0 + progress,
                  });
                },
              });
            }
          });

          cards.forEach((card, index) => {
            if (index < cards.length - 1) {
              const cardWrapper = card.querySelector(".card-img");
              const cardImg = card.querySelector(".card-img img");
              const cardContent = card.querySelector(".card-content");

              ScrollTrigger.create({
                trigger: cards[index + 1],
                start: "top bottom",
                end: "top top",
                onUpdate: (self) => {
                  const progress = self.progress;
                  gsap.set(cardWrapper, {
                    scale: 1 - progress * 0.15,
                  });
                  gsap.set(cardImg, {
                    opacity: 1 - progress,
                  });
                  gsap.set(cardContent, {
                    opacity: 1 - progress,
                    scale: 1 - progress * 0.15,
                  });
                },
              });
            }
          });

          cards.forEach((card, index) => {
            if (index > 0) {
              const cardImg = card.querySelector(".card-img img");
              gsap.fromTo(
                cardImg,
                { scale: 1.4, yPercent: +10 },
                {
                  scale: 1,
                  yPercent: 0,
                  ease: "none",
                  scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "top top",
                    scrub: 2,
                  },
                }
              );
            }
          });
      });
       return () => mm.revert(); // cleanup on unmount
    },
    { scope: container }
  );
  return (
      <section
        ref={container}
        className="cards relative flex flex-col items-center gap-15 lg:gap-[50vh]"
      >
        <div className="card one">
          <div className="card-marquee w-full mb-15 lg:mb-0 lg:absolute top-1/2 left-0 transform -translate-y-1/2 overflow-hidden">
            <div className="marquee flex">
              <h1 className="text-5xl text-[10vw] whitespace-nowrap mr-8">
                FIAT 500 – The Icon Reimagined
              </h1>
              <h1 className="text-5xl text-[10vw] whitespace-nowrap mr-8">
                FIAT 500 – Drive Small, Dream Big –
              </h1>
              <h1 className="text-5xl text-[10vw] whitespace-nowrap mr-8">
                FIAT 500 – Elegance in Motion
              </h1>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card-content">
              <h1 className="text-2xl lg:text-6xl">FIAT 500 – Urban Icon</h1>
              <p className="text-lg lg:text-xl  lg:max-w-120">
                A timeless design made for city streets, blending Italian
                heritage with modern comfort.
              </p>
            </div>
            <div className="card-img">
              {/* <video preload="metadata" 
               className="pointer-events-none absolute bottom-0 h-[99.3%] w-full object-cover object-[50%_100%] opacity-0 mix-blend-hard-light translate-y-[-1px] -scale-x-100 z-[99] hide-in-safari"
               muted
               playsInline
               autoPlay
               loop
               >
                <source src="/assets/smoke_final.mp4" type="video/mp4"/>
              </video> */}
              <img
                className="relative w-full h-full object-cover will-change-transform"
                src="
                /assets/fiat_1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="card two lg:mt-[50vh]">
          <div className="card-wrapper">
            <div className="card-content">
              <h1 className="text-2xl lg:text-5xl">Compact Power, Bold Style</h1>
              <p className="text-lg lg:text-xl  lg:max-w-120">
                Small in size but big in personality, the FIAT 500 stands out
                wherever it goes.
              </p>
            </div>
            <div className="card-img">
              <img
                className="relative w-full h-full object-cover will-change-transform"
                src="/assets/fiat_n.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="card three">
          <div className="card-wrapper">
            <div className="card-content">
              <h1 className="text-2xl lg:text-5xl">Drive the Future</h1>
              <p className="text-lg lg:text-xl  lg:max-w-120">
                With eco-friendly technology and iconic curves, the FIAT 500 is
                ready for tomorrow’s roads.
              </p>
            </div>
            <div className="card-img">
              <img
                className="relative w-full h-full object-cover will-change-transform"
                src="/assets/fiats8.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="card  four">
          <div className="card-wrapper">
            <div className="card-content">
              <h1 className="text-2xl lg:text-5xl">Italian Elegance, Everyday Comfort</h1>
              <p className="text-lg lg:text-xl  lg:max-w-120">
                Crafted with attention to detail, the FIAT 500 makes every ride
                stylish and effortless.+
              </p>
            </div>
            <div className="card-img">
              <img
                className="relative w-full h-full object-cover will-change-transform"
                src="/assets/fiat_4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>  
  );
}

export default StackedCards;
