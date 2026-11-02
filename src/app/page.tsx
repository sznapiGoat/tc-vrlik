import Image from "next/image";
import Link from "next/link";
import { KontaktPas } from "@/components/Chrome";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { firma, fotky } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/" },
};

const stitek = [
  ["Provozuje", firma.jmeno],
  ["V oboru od", String(firma.odRoku)],
  ["Značka", "Fujitsu vzduch-voda"],
  ["Působí", "Šenov, Ostrava a okolí"],
];

const vyber = [fotky.uVchodu, fotky.zasobnik, fotky.fasada];

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[calc(100svh-7.5rem)] flex-col overflow-hidden bg-ink text-white md:min-h-[min(calc(100svh-5.5rem),820px)]">
        <HeroSlideshow />
        <div className="relative z-[5] mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pt-40 pb-44 sm:px-8 md:pb-32 lg:justify-center lg:pt-24 lg:pb-36">
          <div className="max-w-xl">
            <h1 className="font-display text-[2.75rem] leading-[1.02] font-extrabold tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Tepelná čerpadla Fujitsu v&nbsp;Šenově a&nbsp;okolí
            </h1>
            <p className="mt-7 max-w-lg text-xl text-white/75 sm:text-[1.375rem]">
              Servis, návrh a montáž čerpadel vzduch-voda. {firma.jmeno}, v oboru přes třicet let.
            </p>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <a
                href={firma.telHref}
                className="hidden items-center justify-center rounded-md bg-accent px-8 py-5 font-display text-2xl font-bold text-white hover:bg-accent-dark sm:inline-flex"
              >
                Zavolat {firma.tel}
              </a>
              <a
                href={`mailto:${firma.email}`}
                className="text-lg text-white/85 underline decoration-white/30 underline-offset-4 hover:decoration-accent"
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

      {/* Rozcestník: servis je hlavní služba, montáž skromněji */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-x-16 gap-y-14 md:grid-cols-[1.25fr_1fr]">
          <div className="border-t-2 border-ink pt-6">
            <h2 className="font-display text-4xl leading-tight font-bold sm:text-5xl">Servis tepelných čerpadel</h2>
            <p className="mt-5 text-xl text-muted">
              Pravidelná prohlídka, čištění výparníku, kontrola tlaku a nastavení regulace. A když čerpadlo přestane topit, přijedu
              a zjistím proč.
            </p>
            <Link
              href="/servis-tepelnych-cerpadel"
              className="mt-6 inline-block font-display text-xl font-semibold text-accent underline underline-offset-4"
            >
              Co servis obnáší
            </Link>
          </div>
          <div className="border-t border-line pt-6">
            <h2 className="font-display text-3xl leading-tight font-bold">Montáž nového čerpadla</h2>
            <p className="mt-4 text-lg text-muted">
              Návrh výkonu podle domu, montáž Fujitsu vzduch-voda s hydromodulem a napojení na topení a ohřev vody.
            </p>
            <Link href="/montaz-tepelnych-cerpadel" className="mt-5 inline-block text-lg font-semibold text-accent underline underline-offset-4">
              Jak montáž probíhá
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Z mých zakázek</h2>
            <Link href="/zakazky" className="text-lg font-semibold text-accent underline underline-offset-4">
              Všechny fotky
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {vyber.map((f) => (
              <figure key={f.src}>
                <Image
                  src={f.src}
                  alt={f.alt}
                  width={f.w}
                  height={f.h}
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="aspect-[4/5] w-full rounded-md object-cover"
                />
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
