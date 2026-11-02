import Link from "next/link";
import { SITE_URL, firma } from "@/lib/site";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export const firmaSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${SITE_URL}/#firma`,
  name: firma.nazev,
  founder: { "@type": "Person", name: firma.jmeno },
  foundingDate: String(firma.odRoku),
  url: SITE_URL,
  telephone: firma.telE164,
  email: firma.email,
  image: `${SITE_URL}/foto/jednotka-novostavba.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: firma.ulice,
    postalCode: firma.psc,
    addressLocality: firma.obec,
    addressCountry: "CZ",
  },
  areaServed: [
    { "@type": "City", name: "Šenov" },
    { "@type": "City", name: "Ostrava" },
  ],
  knowsAbout: ["tepelná čerpadla vzduch-voda", "servis tepelných čerpadel", "Fujitsu"],
};

type Krok = { href: string; label: string };

/** Drobečková navigace i s BreadcrumbList pro vyhledávače. */
export function Drobecky({ kroky }: { kroky: Krok[] }) {
  const vse = [{ href: "/", label: "Úvod" }, ...kroky];
  return (
    <>
      <nav aria-label="Drobečková navigace" className="text-base text-muted">
        <ol className="flex flex-wrap gap-x-2">
          {vse.map((k, i) => (
            <li key={k.href} className="flex gap-x-2">
              {i > 0 && <span aria-hidden>/</span>}
              {i < vse.length - 1 ? (
                <Link href={k.href} className="underline underline-offset-4 hover:text-copper">
                  {k.label}
                </Link>
              ) : (
                <span aria-current="page">{k.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: vse.map((k, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: k.label,
            item: `${SITE_URL}${k.href === "/" ? "" : k.href}`,
          })),
        }}
      />
    </>
  );
}
