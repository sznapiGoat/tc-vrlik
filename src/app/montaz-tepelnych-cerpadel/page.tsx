import type { Metadata } from "next";
import Image from "next/image";
import { KontaktPas } from "@/components/Chrome";
import { Drobecky, JsonLd } from "@/components/Seo";
import { SITE_URL, fotky, postup } from "@/lib/site";

export const metadata: Metadata = {
  title: "Montáž tepelného čerpadla Fujitsu vzduch-voda",
  description:
    "Návrh a montáž tepelných čerpadel Fujitsu vzduch-voda s hydromodulem pro rodinné domy v Šenově, Ostravě a okolí. Provoz do −2 , voda do topení až 6 .",
  alternates: { canonical: "/montaz-tepelnych-cerpadel" },
};


const parametry = [
  ["Venkovní teplota", "provoz až do −2 "],
  ["Voda do topení", "až 5 , řada High Power až 6 "],
  ["Regulace výkonu", "invertor, výkon se plynule přizpůsobí potřebě"],
  ["Topné okruhy", "až tři, ekvitermní řízení podle venkovní teploty"],
  ["Teplá voda", "ohřev bojleru, na přání i bazénu"],
  ["Záložní zdroj", "8 až 1  podle výkonu čerpadla"],
  ["Výkony", "od 4 do 1  pro rodinné domy, větší sestavy až 5 "],
];

export default function Montaz() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-16 sm:px-8 md:pt-14 md:pb-20">
        <Drobecky kroky={[{ href: "/montaz-tepelnych-cerpadel", label: "Montáž" }]} />
        <h1 className="mt-8 max-w-4xl font-display text-[2.4rem] leading-[1.05] font-extrabold tracking-tight sm:text-6xl">
          Montáž tepelného čerpadla Fujitsu vzduch-voda
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-muted sm:text-[1.375rem]">
          Montuji čerpadla Fujitsu s hydromodulem, která zvládnou topení i ohřev vody. Hlavně do rodinných domů, do novostaveb
          i ke stávajícímu topení.
        </p>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Jak montáž probíhá</h2>
            <ol className="mt-8 border-l-2 border-accent">
              {postup.map(([nazev, text]) => (
                <li key={nazev} className="relative pb-8 pl-8 last:pb-0">
                  <span aria-hidden className="absolute top-2 -left-[7px] size-3 rounded-full bg-accent" />
                  <h3 className="font-display text-2xl font-semibold">{nazev}</h3>
                  <p className="mt-1 text-muted">{text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid grid-cols-2 gap-3 self-start">
            <Image
              src={fotky.zasobnik.src}
              alt={fotky.zasobnik.alt}
              width={fotky.zasobnik.w}
              height={fotky.zasobnik.h}
              sizes="(min-width: 768px) 25vw, 50vw"
              className="w-full rounded-md"
            />
            <Image
              src={fotky.konzole.src}
              alt={fotky.konzole.alt}
              width={fotky.konzole.w}
              height={fotky.konzole.h}
              sizes="(min-width: 768px) 25vw, 50vw"
              className="mt-10 w-full rounded-md"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 md:py-24">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Co čerpadla Fujitsu umí</h2>
        <dl className="mt-10 grid gap-x-12 gap-y-9 border-t-2 border-ink pt-9 sm:grid-cols-2">
          {parametry.map(([k, v]) => (
            <div key={k}>
              <dt className="text-base font-semibold text-muted">{k}</dt>
              <dd className="mt-1 text-2xl leading-snug font-bold">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-lg text-muted">
          K čerpadlu zapojím i zásobník na teplou vodu a napojím ho na stávající topení v domě.
        </p>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Montáž tepelných čerpadel vzduch-voda",
          brand: { "@type": "Brand", name: "Fujitsu" },
          provider: { "@id": `${SITE_URL}/#firma` },
          areaServed: ["Šenov", "Ostrava"],
        }}
      />

      <KontaktPas nadpis="Chcete čerpadlo navrhnout?" />
    </>
  );
}
