"use client";

import { useEffect } from "react";

export default function SiteInteractions() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>(".site-header");
    const hero = document.querySelector<HTMLElement>(".hero");
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.site-header nav a[href^="#"]'),
    );
    const trackedSections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section[id]"),
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let scrollFrame = 0;

    const paintScrollState = () => {
      scrollFrame = 0;

      const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollRange > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollRange) * 100)) : 0;
      root.style.setProperty("--scroll-progress", `${progress}%`);
      header?.toggleAttribute("data-scrolled", window.scrollY > 16);

      const probe = window.scrollY + window.innerHeight * 0.34;
      let activeId = "";

      trackedSections.forEach((section) => {
        if (section.offsetTop <= probe) {
          activeId = section.id;
        }
      });

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        link.toggleAttribute("data-active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const requestScrollPaint = () => {
      if (!scrollFrame) {
        scrollFrame = window.requestAnimationFrame(paintScrollState);
      }
    };

    paintScrollState();
    window.addEventListener("scroll", requestScrollPaint, { passive: true });
    window.addEventListener("resize", requestScrollPaint);

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".section > .container, .section-tight > .container, footer > .container",
      ),
    );
    let revealObserver: IntersectionObserver | null = null;

    if (!reduceMotion) {
      revealTargets.forEach((target, index) => {
        target.classList.add("reveal-target");
        target.style.setProperty("--reveal-delay", `${(index % 3) * 45}ms`);

        if (target.getBoundingClientRect().top <= window.innerHeight * 0.92) {
          target.classList.add("is-visible");
        }
      });

      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "0px 0px -10% 0px",
          threshold: 0.08,
        },
      );

      revealTargets.forEach((target) => {
        if (!target.classList.contains("is-visible")) {
          revealObserver?.observe(target);
        }
      });
    }

    const precisePointer = window.matchMedia("(pointer: fine)").matches;
    let pointerFrame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const paintPointer = () => {
      pointerFrame = 0;
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const x = Math.min(1, Math.max(0, (pointerX - rect.left) / rect.width));
      const y = Math.min(1, Math.max(0, (pointerY - rect.top) / rect.height));

      hero.style.setProperty("--pointer-x", `${x * 100}%`);
      hero.style.setProperty("--pointer-y", `${y * 100}%`);
      hero.style.setProperty("--grid-shift-x", `${(x - 0.5) * 14}px`);
      hero.style.setProperty("--grid-shift-y", `${(y - 0.5) * 10}px`);
      hero.style.setProperty("--content-shift-x", `${(x - 0.5) * -5}px`);
      hero.style.setProperty("--content-shift-y", `${(y - 0.5) * -3}px`);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      hero?.setAttribute("data-pointer", "active");

      if (!pointerFrame) {
        pointerFrame = window.requestAnimationFrame(paintPointer);
      }
    };

    const handlePointerLeave = () => {
      hero?.removeAttribute("data-pointer");
      hero?.style.setProperty("--grid-shift-x", "0px");
      hero?.style.setProperty("--grid-shift-y", "0px");
      hero?.style.setProperty("--content-shift-x", "0px");
      hero?.style.setProperty("--content-shift-y", "0px");
    };

    if (hero && precisePointer && !reduceMotion) {
      hero.addEventListener("pointermove", handlePointerMove);
      hero.addEventListener("pointerleave", handlePointerLeave);
    }

    return () => {
      window.removeEventListener("scroll", requestScrollPaint);
      window.removeEventListener("resize", requestScrollPaint);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      revealObserver?.disconnect();

      revealTargets.forEach((target) => {
        target.classList.remove("reveal-target", "is-visible");
        target.style.removeProperty("--reveal-delay");
      });

      navLinks.forEach((link) => {
        link.removeAttribute("data-active");
        link.removeAttribute("aria-current");
      });

      if (hero) {
        hero.removeEventListener("pointermove", handlePointerMove);
        hero.removeEventListener("pointerleave", handlePointerLeave);
        hero.removeAttribute("data-pointer");
      }

      root.style.removeProperty("--scroll-progress");
    };
  }, []);

  return (
    <div className="site-progress" aria-hidden="true">
      <span />
    </div>
  );
}
