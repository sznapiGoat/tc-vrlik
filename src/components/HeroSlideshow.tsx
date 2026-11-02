"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fotky } from "@/lib/site";

const SLIDE_MS = 7000;

const SLIDES = [
  { ...fotky.novostavba, tag: "Novostavba", focus: "50% 45%" },
  { ...fotky.uVchodu, tag: "Rodinný dům", focus: "60% 50%" },
  { ...fotky.zasobnik, tag: "Technická místnost", focus: "50% 42%" },
  { ...fotky.vyklenek, tag: "Fasáda", focus: "45% 50%" },
];

/**
 * Fotky přes celé hero. Každá se pomalu přiblíží (Ken Burns, směr se střídá)
 * a prolne do další. Dole je přepínač, jeho proužek ukazuje, kdy přijde další.
 *
 * Pohyb delší než 5 s musí jít zastavit (WCAG 2.2.2), proto Pozastavit.
 * Na skryté záložce se nepřepíná, při prefers-reduced-motion fotky stojí.
 * Vrstva leží absolutně přes celou sekci hero, text je nad ní.
 */
export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [hidden, setHidden] = useState(false);
  // V DOM jen aktuální a následující fotka, ať se zbytek nepere o linku s první (LCP)
  const [mounted, setMounted] = useState<Set<number>>(() => new Set([0, 1]));

  useEffect(() => {
    const next = (index + 1) % SLIDES.length;
    setMounted((m) => (m.has(index) && m.has(next) ? m : new Set([...m, index, next])));
  }, [index]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onMq = () => setReduced(mq.matches);
    const onVis = () => setHidden(document.visibilityState === "hidden");
    mq.addEventListener("change", onMq);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      mq.removeEventListener("change", onMq);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const running = !paused && !reduced && !hidden;

  const go = (next: number) => {
    if (next === index) return;
    setPrev(index);
    setIndex(next);
  };

  // Ruční přepnutí začne odpočet od nuly, protože efekt závisí na index
  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => {
      setPrev(index);
      setIndex((index + 1) % SLIDES.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(t);
  }, [index, running]);

  useEffect(() => {
    if (prev === null) return;
    const t = window.setTimeout(() => setPrev(null), 1600);
    return () => window.clearTimeout(t);
  }, [prev]);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden bg-ink" aria-hidden>
        {SLIDES.map((s, i) => {
          if (!mounted.has(i)) return null;
          const visible = i === index;
          const moving = visible || i === prev;
          const anim = moving && !reduced ? (i % 2 ? "hero-slide--b" : "hero-slide--a") : "";
          return (
            <div
              key={s.src}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-out ${visible ? "z-[1] opacity-100" : "opacity-0"}`}
            >
              <Image
                src={s.src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className={`object-cover ${anim} ${running ? "" : "hero-slide--paused"}`}
                style={{ objectPosition: s.focus, transformOrigin: s.focus }}
              />
            </div>
          );
        })}

        {/* Ztmavení pod textem: zespodu na mobilu, zleva na desktopu */}
        <div className="absolute inset-0 z-[2] bg-linear-to-t from-ink/95 via-ink/70 to-ink/40 lg:bg-linear-to-r lg:from-ink/95 lg:from-25% lg:via-ink/70 lg:via-50% lg:to-ink/10" />
      </div>

      <p className="sr-only" aria-live={running ? "off" : "polite"}>
        Fotka {index + 1} z {SLIDES.length}: {SLIDES[index].alt}
      </p>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-6xl items-end gap-4 px-5 pb-[6.5rem] sm:px-8 md:pb-7">
          <ol className="flex min-w-0 flex-1 gap-2 sm:gap-3" aria-label="Fotky z mých zakázek">
            {SLIDES.map((s, i) => {
              const current = i === index;
              return (
                <li key={s.src} className="min-w-0 flex-1">
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-current={current ? "true" : undefined}
                    aria-label={`${s.tag}: ${s.popis}`}
                    className="group block w-full pt-3 text-left"
                  >
                    <span className="relative block h-[3px] overflow-hidden bg-white/25 group-hover:bg-white/45">
                      <span
                        key={current ? `on-${index}` : "off"}
                        className={`absolute inset-y-0 left-0 bg-white ${current ? (reduced ? "w-full" : "hero-progress") : "w-0"} ${current && !running ? "hero-progress--paused" : ""}`}
                        style={{ animationDuration: `${SLIDE_MS}ms` }}
                      />
                    </span>
                    <span
                      className={`mt-2.5 hidden truncate text-base font-semibold md:block ${current ? "text-white" : "text-white/55 group-hover:text-white/85"}`}
                    >
                      {s.tag}
                    </span>
                    <span
                      className={`hidden truncate text-sm lg:block ${current ? "text-white/80" : "text-white/40 group-hover:text-white/70"}`}
                    >
                      {s.popis}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="shrink-0 text-sm font-medium text-white/70 underline-offset-4 hover:text-white hover:underline motion-reduce:hidden"
          >
            {paused ? "Spustit" : "Pozastavit"}
          </button>
        </div>
      </div>
    </>
  );
}
