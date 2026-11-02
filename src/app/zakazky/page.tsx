import type { Metadata } from "next";
import Image from "next/image";
import { KontaktPas } from "@/components/Chrome";
import { Drobecky } from "@/components/Seo";
import { fotky } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zakázky, fotky namontovaných tepelných čerpadel",
  description:
    "Fotky tepelných čerpadel Fujitsu vzduch-voda, která jsem namontoval: venkovní jednotky, hydromoduly a zásobníky teplé vody v rodinných domech.",
  alternates: { canonical: "/zakazky" },
};

const venku = [fotky.novostavba, fotky.uVchodu, fotky.konzole, fotky.fasada, fotky.vyklenek, fotky.mensi];
const uvnitr = [fotky.zasobnik, fotky.rozvody, fotky.bojler];

function Galerie({ fotky }: { fotky: typeof venku }) {
  return (
    <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
      {fotky.map((f) => (
        <figure key={f.src} className="mb-6 break-inside-avoid">
          <Image
            src={f.src}
            alt={f.alt}
            width={f.w}
            height={f.h}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="w-full rounded-md"
          />
          <figcaption className="mt-2 text-base text-muted">{f.popis}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function Zakazky() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-20 sm:px-8 md:pt-14 md:pb-28">
        <Drobecky kroky={[{ href: "/zakazky", label: "Zakázky" }]} />
        <h1 className="mt-8 font-display text-[2.4rem] leading-[1.1] font-bold tracking-tight sm:text-6xl">Z mých zakázek</h1>
        <p className="mt-6 max-w-2xl text-xl text-muted sm:text-[1.375rem]">
          Většina práce přichází na doporučení od lidí, kterým čerpadlo topí už roky.
        </p>

        <h2 className="mt-16 border-t-2 border-ink pt-5 font-display text-3xl font-bold">Venkovní jednotky</h2>
        <Galerie fotky={venku} />

        <h2 className="mt-12 border-t-2 border-ink pt-5 font-display text-3xl font-bold">Technická místnost</h2>
        <Galerie fotky={uvnitr} />
      </section>
      <KontaktPas />
    </>
  );
}
