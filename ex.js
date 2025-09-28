//  useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger, SplitText);

//     const cards = gsap.utils.toArray(".card") as HTMLElement[];
//     const introCard = cards[0];
//     const titles = gsap.utils.toArray(".card-content h1");
//     titles.forEach((title) => {
//       const split = new SplitText(title as HTMLElement, {
//         type: "char",
//         charsClass: "char",
//         tag: "div",
//       });
//       split.chars.forEach((char) => {
//         char.innerHTML = `<span>${char.textContent}</span>`;
//       });
//     });

//     const cardImgWrapper = introCard.querySelector(".card-img");
//     const cardImg = introCard.querySelector(".card-img img");

//     gsap.set(cardImgWrapper, { scale: 0.5, borderRadius: "400px" });
//     gsap.set(cardImg, { scale: 1.5 });

//     function animateContentIn(
//       titleChar: HTMLElement,
//       description: HTMLElement
//     ) {
//       gsap.to(titleChar, { x: "0%", duration: 0.75, ease: "power4.out" });
//       gsap.to(description, {
//         x: 0,
//         opacity: 1,
//         duration: 0.75,
//         delay: 0.1,
//         ease: "power4.out",
//       });
//     }
//     function animateContentOut(
//       titleChar: HTMLElement,
//       description: HTMLElement
//     ) {
//       gsap.to(titleChar, { x: "100%", duration: 0.5, ease: "power4.out" });
//       gsap.to(description, {
//         x: "40px",
//         opacity: 0,
//         duration: 0.5,
//         ease: "power4.out",
//       });
//     }

//     const marquee = introCard.querySelector(".card-marquee .marquee");
//     const titleChar = introCard.querySelector(".char span");
//     const description = introCard.querySelector(".card-content p");

//     ScrollTrigger.create({
//       trigger: introCard,
//       start: "top top",
//       end: "+=300vh",
//       onUpdate: (self) => {
//         const progress = self.progress;
//         const imgScale = 0.5 + progress * 0.5;
//         const borderRadius = 400 - progress * 375;
//         const innerScaleImg = 1.5 + progress * 0.5;

//         gsap.set(cardImgWrapper, {
//           scale: imgScale,
//           borderRadius: borderRadius + "px",
//         });

//         gsap.set(cardImg, { scale: innerScaleImg });

//         if (imgScale > 0.5 && imgScale < 0.75) {
//           const fadePorgress = (imgScale - 0.5) / (0.75 - 0.5);
//           gsap.set(marquee, { opacity: 1 - fadePorgress });
//         } else if (imgScale < 0.5) {
//           gsap.set(marquee, { opacity: 1 });
//         } else if (imgScale > 0.75) {
//           gsap.set(marquee, { opacity: 0 });
//         }

//         if (
//           progress > 1 &&
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           !(introCard as any).contentRevealed &&
//           titleChar instanceof HTMLElement &&
//           description instanceof HTMLElement
//         ) {
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           (introCard as any).contentRevealed = true;
//           animateContentIn(titleChar, description);
//         }
//         if (
//           progress < 1 &&
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           (introCard as any).contentRevealed &&
//           titleChar instanceof HTMLElement &&
//           description instanceof HTMLElement
//         ) {
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           (introCard as any).contentRevealed = false;
//           animateContentOut(titleChar, description);
//         }
//       },
//     });
//     cards.forEach((card, index) => {
//       const isLastCard = index === cards.length - 1;
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       const scrollTriggerConfig: any = {
//         trigger: card,
//         start: "top top",
//         end: isLastCard ? "+=100vh" : "top top",
//         endTrigger: isLastCard ? null :  cards[cards.length - 1],
//         pin: true,
//         pinSpacing: false,
//          markers: true
//       };
//       ScrollTrigger.create(scrollTriggerConfig);
//     });
//   }, []);