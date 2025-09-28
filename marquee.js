import gsap from "gsap";

export function setupMarqueeAnimation() {
  const marqueeltems = gsap.utils.toArray(".marquee h1");
  if (marqueeltems.length > 0) {
    const tl = horizontalLoop(marqueeltems, {
      repeat: -1,
      paddingRight: 30,
    });
  }
}

function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
    repeat: config.repeat,
    defaults: { ease: "none" },
  });
  let length = items.length;
  let startX = items[0].offsetLeft;
  let widths = [];
  let xPercents = [];
  let pixelsPerSecond = (config.speed || 1) * 100;
  let totalWidth, curX, distanceToStart, distanceToLoop, item, i;

  gsap.set(items, {
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] =
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
        gsap.getProperty(el, "xPercent");
      return xPercents[i];
    },
  });

  gsap.set(item, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: ((curX - distanceToLoop) / widths[i]) * 100,
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    ).fromTo(
      item,
      { xPercent: ((curX - distanceToLoop + totalWidth) / widths[i]) * 100 },
      {
        xPercent: xPercents[i],
        duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
        immediateRender: false,
      },
      distanceToLoop / pixelsPerSecond
    );
  }

  tl.progress(1, true).progress(0, true);
  return tl;
}


  //  <div className="card-marquee w-full absolute top-1/2 left-0 transform -translate-y-1/2 overflow-hidden">
  //           <div className="marquee flex">
  //             <h1 className="text-5xl text-[10vw] whitespace-nowrap mr-8">
  //               Hello Fiat{" "}
  //             </h1>
  //             <h1 className="text-5xl text-[10vw] whitespace-nowrap mr-8">
  //               Hello Wortld{" "}
  //             </h1>
  //             <h1 className="text-5xl text-[10vw] whitespace-nowrap mr-8">
  //               HEyyyy Fiat{" "}
  //             </h1>
  //             <h1 className="text-5xl text-[10vw] whitespace-nowrap mr-8">
  //               Ta7ya Fiat{" "}
  //             </h1>
  //           </div>
  //         </div>