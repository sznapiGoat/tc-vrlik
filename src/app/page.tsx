import Image from "next/image";
import Link from "next/link";
import { KontaktPas } from "@/components/Chrome";
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
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-12 pb-16 sm:px-8 md:grid-cols-[1.1fr_1fr] md:items-center md:pt-20 md:pb-24">
        <div>
          <h1 className="font-display text-[2.6rem] leading-[1.08] font-bold tracking-tight sm:text-6xl">
            Tepelná čerpadla Fujitsu v&nbsp;Šenově a&nbsp;okolí
          </h1>
          <p className="mt-6 max-w-xl text-xl text-muted sm:text-[1.375rem]">
            Servis, návrh a montáž čerpadel vzduch-voda. {firma.jmeno}, v oboru přes třicet let, od roku {firma.odRoku}.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={firma.telHref}
              className="inline-flex items-center justify-center rounded-md bg-copper px-8 py-5 font-display text-2xl font-bold text-white hover:bg-copper-dark"
            >
              Zavolat {firma.tel}
            </a>
            <a href={`mailto:${firma.email}`} className="text-lg underline decoration-line underline-offset-4 hover:decoration-copper">
              {firma.email}
            </a>
          </div>
        </div>
        <figure>
          <Image
            src={fotky.novostavba.src}
            alt={fotky.novostavba.alt}
            width={fotky.novostavba.w}
            height={fotky.novostavba.h}
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
            className="w-full rounded-md"
          />
          <figcaption className="mt-3 text-base text-muted">{fotky.novostavba.popis}.</figcaption>
        </figure>
      </section>

      <section aria-label="Základní údaje" className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="plate rounded-md border border-[#b9c0c4] bg-plate px-6 py-7 sm:px-10">
          <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {stitek.map(([k, v]) => (
              <div key={k} className="border-t border-[#b9c0c4] pt-3">
                <dt className="font-mono text-sm tracking-wide text-muted uppercase">{k}</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">{v}</dd>
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
              className="mt-6 inline-block font-display text-xl font-semibold text-copper underline underline-offset-4"
            >
              Co servis obnáší
            </Link>
          </div>
          <div className="border-t border-line pt-6">
            <h2 className="font-display text-3xl leading-tight font-bold">Montáž nového čerpadla</h2>
            <p className="mt-4 text-lg text-muted">
              Návrh výkonu podle domu, montáž Fujitsu vzduch-voda s hydromodulem a napojení na topení a ohřev vody.
            </p>
            <Link href="/montaz-tepelnych-cerpadel" className="mt-5 inline-block text-lg font-semibold text-copper underline underline-offset-4">
              Jak montáž probíhá
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Z mých zakázek</h2>
            <Link href="/zakazky" className="text-lg font-semibold text-copper underline underline-offset-4">
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
