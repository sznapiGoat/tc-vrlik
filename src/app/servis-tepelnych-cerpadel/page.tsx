import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { KontaktPas } from "@/components/Chrome";
import { Drobecky, JsonLd } from "@/components/Seo";
import { SITE_URL, fotky } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servis tepelných čerpadel Šenov, Ostrava",
  description:
    "Servis tepelných čerpadel vzduch-voda Fujitsu v Šenově, Ostravě a okolí: pravidelná prohlídka, čištění výparníku, kontrola tlaku, nastavení regulace a řešení poruch.",
  alternates: { canonical: "/servis-tepelnych-cerpadel" },
};

const ukony = [
  ["Prohlídka venkovní i vnitřní jednotky", "Zkontroluji chod kompresoru, ventilátoru a čidel a projdu historii chybových hlášení."],
  ["Čištění výparníku a odtoku kondenzátu", "Zanesené lamely a zamrzlý odtok jsou častý důvod, proč čerpadlo v zimě slábne."],
  ["Tlak v soustavě a expanzní nádoba", "Doplním vodu, ověřím pojistný ventil a tlak v expanzní nádobě."],
  ["Nastavení regulace", "Upravím ekvitermní křivku podle domu, aby čerpadlo netopilo zbytečně a nebylo zima."],
  ["Poruchy a výpadky", "Když čerpadlo hlásí chybu nebo přestane topit, zavolejte a domluvíme se, kdy přijedu."],
];

const dotazy = [
  {
    q: "Jak často dělat servis tepelného čerpadla?",
    a: "Jednou za rok. Nejlepší je prohlídka na konci léta nebo na podzim, než začne topná sezóna, aby se případná závada vyřešila dřív, než je čerpadlo potřeba.",
  },
  {
    q: "Proč čerpadlo v mrazu slábne nebo zamrzá?",
    a: "Nejčastěji kvůli zaneseným lamelám výparníku nebo ucpanému odtoku kondenzátu, kde se pak tvoří led. Svou roli hraje i špatně nastavená topná křivka. To všechno se při servisu kontroluje.",
  },
  {
    q: "Čerpadlo hlásí chybu. Co mám udělat?",
    a: "Opište si kód chyby z displeje a zavolejte. Podle kódu se dá často říct, jestli jde o drobnost, nebo je potřeba přijet hned.",
  },
  {
    q: "Jak dlouho tepelné čerpadlo vydrží?",
    a: "Kompresor u čerpadel Fujitsu má životnost až 20 let. Kolik let z toho čerpadlo opravdu odslouží, záleží hodně na tom, jestli se o něj někdo pravidelně stará.",
  },
];

export default function Servis() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-16 sm:px-8 md:pt-14 md:pb-20">
        <Drobecky kroky={[{ href: "/servis-tepelnych-cerpadel", label: "Servis" }]} />
        <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <h1 className="font-display text-[2.4rem] leading-[1.1] font-bold tracking-tight sm:text-6xl">
              Servis tepelných čerpadel
            </h1>
            <p className="mt-6 max-w-xl text-xl text-muted sm:text-[1.375rem]">
              Tepelné čerpadlo vydrží dlouho, když se o něj někdo stará. Bez kontroly pomalu ztrácí výkon a ozve se většinou v
              nejhorší chvíli, v lednu.
            </p>
          </div>
          <Image
            src={fotky.rozvody.src}
            alt={fotky.rozvody.alt}
            width={fotky.rozvody.w}
            height={fotky.rozvody.h}
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="aspect-[4/3] w-full rounded-md object-cover object-[50%_60%]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 md:pb-28">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="md:sticky md:top-10 md:self-start">
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl">Co při servisu dělám</h2>
            <p className="mt-4 text-lg text-muted">
              Servisuji tepelná čerpadla vzduch-voda Fujitsu s hydromodulem. Prohlídka zahrnuje venkovní i vnitřní jednotku.
            </p>
          </div>
          <ul className="border-t-2 border-ink">
            {ukony.map(([nazev, text]) => (
              <li key={nazev} className="border-b border-line py-6">
                <h3 className="font-display text-2xl font-semibold">{nazev}</h3>
                <p className="mt-2 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 md:py-24">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Časté dotazy</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {dotazy.map((d) => (
              <details key={d.q} className="group py-5">
                <summary className="cursor-pointer list-none font-display text-xl font-semibold marker:hidden sm:text-2xl">
                  <span className="flex items-start justify-between gap-6">
                    {d.q}
                    <span aria-hidden className="text-copper group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-muted">{d.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-10 text-lg">
            Chystáte nové čerpadlo?{" "}
            <Link href="/montaz-tepelnych-cerpadel" className="font-semibold text-copper underline underline-offset-4">
              Montáž tepelných čerpadel
            </Link>
          </p>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Servis tepelných čerpadel",
          provider: { "@id": `${SITE_URL}/#firma` },
          areaServed: ["Šenov", "Ostrava"],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: dotazy.map((d) => ({
            "@type": "Question",
            name: d.q,
            acceptedAnswer: { "@type": "Answer", text: d.a },
          })),
        }}
      />

      <KontaktPas nadpis="Domluvte si servis" />
    </>
  );
}
