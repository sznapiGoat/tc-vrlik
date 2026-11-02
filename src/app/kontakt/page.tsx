import type { Metadata } from "next";
import { Drobecky } from "@/components/Seo";
import { firma } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Jiří Vrlík, tepelná čerpadla. ${firma.ulice}, ${firma.psc} ${firma.obec}. Telefon ${firma.tel}, e-mail ${firma.email}.`,
  alternates: { canonical: "/kontakt" },
};

export default function Kontakt() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-10 pb-20 sm:px-8 md:pt-14 md:pb-28">
      <Drobecky kroky={[{ href: "/kontakt", label: "Kontakt" }]} />
      <h1 className="mt-8 font-display text-[2.4rem] leading-[1.1] font-bold tracking-tight sm:text-6xl">Kontakt</h1>
      <p className="mt-6 max-w-2xl text-xl text-muted sm:text-[1.375rem]">Nejrychleji se domluvíme po telefonu.</p>

      <a
        href={firma.telHref}
        className="mt-10 block font-display text-[3.25rem] leading-none font-bold tracking-tight underline decoration-copper decoration-4 underline-offset-[10px] sm:text-8xl"
      >
        {firma.tel}
      </a>

      <dl className="mt-16 grid gap-10 border-t-2 border-ink pt-8 sm:grid-cols-3">
        <div>
          <dt className="font-mono text-sm tracking-wide text-muted uppercase">E-mail</dt>
          <dd className="mt-2 text-xl">
            <a href={`mailto:${firma.email}`} className="underline decoration-line underline-offset-4 hover:decoration-copper">
              {firma.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-sm tracking-wide text-muted uppercase">Adresa</dt>
          <dd className="mt-2 text-xl">
            <address className="not-italic">
              {firma.jmeno}
              <br />
              {firma.ulice}
              <br />
              {firma.psc} {firma.obec}
            </address>
            <a href={firma.mapa} className="mt-2 inline-block text-base text-copper underline underline-offset-4">
              Otevřít v mapě
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-sm tracking-wide text-muted uppercase">Kde jezdím</dt>
          <dd className="mt-2 text-xl">Šenov, Ostrava a okolní obce</dd>
        </div>
      </dl>
    </section>
  );
}
