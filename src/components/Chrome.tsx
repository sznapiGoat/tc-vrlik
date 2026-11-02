import Link from "next/link";
import { firma, navigace } from "@/lib/site";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <header className="border-b border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="leading-tight">
          <span className="block font-display text-2xl font-bold">Vrlík</span>
          <span className="block text-base text-white/60">tepelná čerpadla, Šenov</span>
        </Link>
        <nav aria-label="Hlavní" className="hidden items-center gap-8 text-lg md:flex">
          {navigace.map((n) => (
            <NavLink key={n.href} href={n.href}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <a href={firma.telHref} className="font-display text-xl font-bold whitespace-nowrap sm:text-2xl">
          {firma.tel}
        </a>
      </div>
      <nav aria-label="Hlavní (mobil)" className="border-t border-white/10 md:hidden">
        <ul className="mx-auto flex max-w-6xl justify-between px-5 py-3 text-lg">
          {navigace.map((n) => (
            <li key={n.href}>
              <NavLink href={n.href}>{n.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function KontaktPas({ nadpis = "Nejrychleji se domluvíme po telefonu" }: { nadpis?: string }) {
  return (
    <section className="bg-accent text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.5fr_1fr] md:items-end md:py-24">
        <div className="reveal">
          <h2 className="text-3xl font-bold sm:text-4xl">{nadpis}</h2>
          <a
            href={firma.telHref}
            className="mt-6 block text-[3.25rem] leading-none font-extrabold tracking-tight underline decoration-white/40 decoration-4 underline-offset-[10px] transition-[text-decoration-color] hover:decoration-white sm:text-8xl"
          >
            {firma.tel}
          </a>
        </div>
        <dl className="reveal grid gap-6 border-t border-white/30 pt-6 text-lg md:border-t-0 md:border-l md:pt-0 md:pl-10">
          <div>
            <dt className="text-white/75">E-mail</dt>
            <dd>
              <a href={`mailto:${firma.email}`} className="font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white">
                {firma.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-white/75">Adresa</dt>
            <dd className="font-semibold">
              {firma.ulice}, {firma.psc} {firma.obec}
            </dd>
          </div>
          <div>
            <dt className="text-white/75">Kde jezdím</dt>
            <dd className="font-semibold">Šenov, Ostrava a okolí</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink pb-28 text-white/70 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-6 border-t border-white/10 px-5 py-8 text-base sm:grid-cols-[1fr_auto] sm:px-8">
        <p>
          {firma.jmeno}, {firma.ulice}, {firma.psc} {firma.obec}
          <br />
          Servis a montáž tepelných čerpadel Fujitsu od roku {firma.odRoku}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {navigace.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="hover:text-white">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export function MobilZavolat() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-paper p-3 md:hidden">
      <a href={firma.telHref} className="block rounded-md bg-accent py-4 text-center font-display text-xl font-bold text-white">
        Zavolat {firma.tel}
      </a>
    </div>
  );
}
