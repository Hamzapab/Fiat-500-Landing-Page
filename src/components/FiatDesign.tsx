import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedTitle from "./AnimatedTitle";

const FiatDesign = () => {
  useGSAP(() => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=900 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation
      .to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        duration: 0.6,
      })
      .to(".cmpct", {
        y: 0,
        opacity: 1,
        duration: 0.2,
      })
      .to(".mask-clip-path", {
        y: 0,
        opacity: 1,
        duration: 0.2,
      });
  });

  return () => mm.revert(); // cleanup on unmount
});


  return (
    <div id="fiatDesign" className="min-h-screen w-screen bg-white relative">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-lg uppercase md:text-xl text-black pt-10">
          FIAT 500
        </p>
        <AnimatedTitle
          title="The <b>A</b>rt of Simplicity<br /><b>D</b>esign in Motion"
          containerClass="mt-5 !text-black !text-center !text-4xl"
        />
        <div className="about-subtext hidden md:block">
          <p className="text-gray-600">
            From its sculpted silhouette to its luminous contours, every detail
            is designed to move — both on the road and in your heart.
          </p>
        </div>
      </div>

      <div className="md:h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image ">
          <div className="cmpct absolute hidden md:block top-20 z-30 left-20 text-2xl translate-y-full opacity-0">
             FIAT 500 come alive — <br /> compact yet full of character
          </div>
          <video
            src="/assets/fiatDesign.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
       <div className="about-subtext-resp md:hidden">
          <p className="text-gray-600">
            From its sculpted silhouette to its luminous contours, every detail
            is designed to move — both on the road and in your heart.
          </p>
        </div>
    </div>
  );
};

export default FiatDesign;
