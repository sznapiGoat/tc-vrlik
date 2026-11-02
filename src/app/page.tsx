import Image from "next/image";
import Link from "next/link";
import { KontaktPas } from "@/components/Chrome";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { firma, fotky, postup, ukony } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/" },
};

const stitek = [
  ["Provozuje", firma.jmeno],
  ["V oboru od", String(firma.odRoku)],
  ["Značka", "Fujitsu vzduch-voda"],
  ["Působí", "Šenov, Ostrava a okolí"],
];

const vyber = [fotky.uVchodu, fotky.zasobnik, fotky.konzole];

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[calc(100svh-7.5rem)] flex-col overflow-hidden bg-ink text-white md:min-h-[min(calc(100svh-5.5rem),820px)]">
        <HeroSlideshow />
        <div className="relative z-[5] mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pt-40 pb-44 sm:px-8 md:pb-32 lg:justify-center lg:pt-24 lg:pb-36">
          <div className="max-w-3xl">
            <h1 className="hero-in font-display text-[2.75rem] leading-[1.04] font-extrabold tracking-tight sm:text-6xl lg:text-[3.6rem]">
              Tepelná čerpadla Fujitsu <br className="hidden lg:block" />
              v&nbsp;Šenově a&nbsp;okolí
            </h1>
            <p className="hero-in hero-in-2 mt-7 max-w-lg text-xl text-white/75 sm:text-[1.375rem]">
              Servis, návrh a montáž čerpadel vzduch-voda. {firma.jmeno}, v oboru přes třicet let.
            </p>
            <div className="hero-in hero-in-3 mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <a
                href={firma.telHref}
                className="hidden items-center justify-center rounded-md bg-paper px-8 py-5 font-display text-2xl font-bold text-ink transition-colors hover:bg-white sm:inline-flex"
              >
                Zavolat {firma.tel}
              </a>
              <a
                href={`mailto:${firma.email}`}
                className="text-lg text-white/85 underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                {firma.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Základní údaje" className="bg-ink text-white">
        <div className="border-t border-white/15">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
            {stitek.map(([k, v], i) => (
              <div
                key={k}
                className={`py-6 pr-4 ${i % 2 ? "border-l border-white/15 pl-5" : ""} ${i === 2 ? "border-t border-white/15 lg:border-t-0 lg:border-l lg:pl-5" : ""} ${i === 3 ? "border-t border-white/15 lg:border-t-0" : ""}`}
              >
                <dt className="text-base text-white/60">{k}</dt>
                <dd className="mt-1 font-display text-xl font-bold sm:text-2xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Servis: hlavní služba, proto nejvíc místa a fotka */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div className="reveal-photo relative overflow-hidden rounded-md">
            <Image
              src={fotky.rozvody.src}
              alt={fotky.rozvody.alt}
              width={fotky.rozvody.w}
              height={fotky.rozvody.h}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="reveal">
            <h2 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
              Servis tepelných čerpadel
            </h2>
            <p className="mt-6 text-xl text-muted">
              Čerpadlo vydrží dlouho, když se o něj někdo stará. Jednou za rok prohlídka, a když přestane topit, přijedu a zjistím proč.
            </p>
            <ul className="mt-9 border-t-2 border-ink">
              {ukony.map(([nazev]) => (
                <li key={nazev} className="border-b border-line py-4 text-xl font-semibold">
                  {nazev}
                </li>
              ))}
            </ul>
            <Link
              href="/servis-tepelnych-cerpadel"
              className="link-grow mt-8 inline-block text-xl font-bold text-accent"
            >
              Co servis obnáší
            </Link>
          </div>
        </div>
      </section>

      {/* Montáž: postup na vodorovné ose, která se při scrollu dokreslí */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <div className="reveal max-w-2xl">
            <h2 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
              Montáž nového čerpadla
            </h2>
            <p className="mt-5 text-xl text-muted">
              Montuji Fujitsu vzduch-voda s hydromodulem, které zvládne topení i ohřev vody. Výkon navrhnu podle domu.
            </p>
          </div>
          <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
            <span aria-hidden className="axis-draw absolute top-[7px] right-0 left-0 hidden h-0.5 bg-accent md:block" />
            {postup.map(([nazev, text], i) => (
              <li key={nazev} className="step-in relative pl-8 md:pt-10 md:pl-0" style={{ "--d": `${i * 12}%` } as React.CSSProperties}>
                <span aria-hidden className="absolute top-1.5 left-0 size-4 rounded-full border-[3px] border-accent bg-white md:top-0" />
                <h3 className="text-2xl font-bold">{nazev}</h3>
                <p className="mt-2 text-muted">{text}</p>
              </li>
            ))}
          </ol>
          <Link href="/montaz-tepelnych-cerpadel" className="link-grow mt-12 inline-block text-xl font-bold text-accent">
            Více o montáži
          </Link>
        </div>
      </section>

      {/* Osobně: mluvíte rovnou s ním */}
      <section className="mx-auto max-w-5xl px-5 py-24 sm:px-8 md:py-32">
        <p className="reveal font-display text-3xl leading-[1.25] font-bold tracking-tight sm:text-[2.6rem]">
          V oboru jsem od roku {firma.odRoku} a většina práce ke mně přichází na doporučení. Když zavoláte, mluvíte rovnou se mnou, ne s dispečinkem.
        </p>
        <p className="reveal mt-8 text-xl">
          {firma.jmeno}, {firma.obec}
        </p>
      </section>

      {/* Zakázky: jedna velká fotka a dvě menší, popisky pod fotkami */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Z mých zakázek</h2>
            <Link href="/zakazky" className="link-grow text-xl font-bold text-accent">
              Všechny fotky
            </Link>
          </div>
          <div className="mt-12 grid gap-x-5 gap-y-8 sm:grid-cols-3">
            {vyber.map((f, i) => (
              <figure key={f.src} className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}>
                <div className={`reveal-photo relative overflow-hidden rounded-md ${i === 0 ? "aspect-[4/3] sm:aspect-auto sm:h-[calc(100%-2.25rem)]" : "aspect-[4/3]"}`}>
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes={i === 0 ? "(min-width: 640px) 66vw, 100vw" : "(min-width: 640px) 33vw, 100vw"}
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-base text-muted">{f.popis}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <KontaktPas />
    </>
  );
}
