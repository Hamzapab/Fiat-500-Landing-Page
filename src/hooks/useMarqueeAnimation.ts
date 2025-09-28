import { useEffect } from "react";
import gsap from "gsap";

export function useMarqueeAnimation(selector: string, 
  options?: { speed?: number; paddingRight?: number }) {
  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>(selector);
    if (!items.length) return;

    const tl = horizontalLoop(items, {
      repeat: -1,
      speed: options?.speed || 1,
      paddingRight: options?.paddingRight || 30,
    });

    return () => {
      tl.kill(); // cleanup on unmount
    };
  }, [selector, options]);
}

// --------------------------
// Internal helper function
// --------------------------
function horizontalLoop(items: HTMLElement[], config: { repeat?: number; speed?: number; paddingRight?: number }) {
  const tl = gsap.timeline({
    repeat: config.repeat,
    defaults: { ease: "none" },
  });

  const length = items.length;
  const startX = items[0].offsetLeft;
  const widths: number[] = [];
  const xPercents: number[] = [];
  const pixelsPerSecond = (config.speed || 1) * 100;
  let curX: number, distanceToStart: number, distanceToLoop: number, item: HTMLElement;
  
  gsap.set(items, {
    xPercent: (i, el) => {
      const w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string));
      xPercents[i] =
        (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
        (gsap.getProperty(el, "xPercent") as number);
      return xPercents[i];
    },
  });

  gsap.set(items, { x: 0 });

//   |<----startX---->|[FIAT 500] [Stylish] [Compact] [Urban Icon]|<-padding->|
// Container start --->  ????

   const totalWidth =
    items[length - 1].offsetLeft                          // start of last item
    + (xPercents[length - 1] / 100) * widths[length - 1]  // its transform shift
    - startX                                              // normalize to first item
    + items[length - 1].offsetWidth * (gsap.getProperty(items[length - 1], "scaleX") as number) // full last item width
    + (config.paddingRight || 0); // extra spacing

  for (let i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);

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
