import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
    })

    // 🎹 Intercept arrow keys
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowDown") {
        e.preventDefault()
        lenis.scrollTo(window.scrollY + 100) // adjust step size
      }
      if (e.key === "ArrowUp") {
        e.preventDefault()
        lenis.scrollTo(window.scrollY - 100) // adjust step size
      }
      if (e.key === "PageDown") {
        e.preventDefault()
        lenis.scrollTo(window.scrollY + window.innerHeight * 0.8)
      }
      if (e.key === "PageUp") {
        e.preventDefault()
        lenis.scrollTo(window.scrollY - window.innerHeight * 0.8)
      }
    }

    window.addEventListener("keydown", onKeyDown)

    // --- RAF loop ---
    function raf(time: number) {
      lenis.raf(time)
      ScrollTrigger.update()
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // --- Scroller Proxy ---
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length && typeof value === "number") {
          lenis.scrollTo(value)
        } else {
          return lenis.scroll
        }
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    })

    ScrollTrigger.addEventListener("refresh", () => lenis.resize())
    ScrollTrigger.refresh()

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      lenis.destroy()
      ScrollTrigger.removeEventListener("refresh", () => lenis.resize())
    }
  }, [])
}
