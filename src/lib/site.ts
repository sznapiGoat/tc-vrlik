export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tc-vrlik.vercel.app";

export const firma = {
  nazev: "Tepelná čerpadla Vrlík",
  jmeno: "Jiří Vrlík",
  tel: "603 179 972",
  telHref: "tel:+420603179972",
  telE164: "+420603179972",
  email: "jirivrlik@seznam.cz",
  ulice: "Petřvaldská 1509",
  psc: "739 34",
  obec: "Šenov",
  odRoku: 1992,
  mapa: "https://mapy.cz/zakladni?q=Petřvaldská%201509%2C%20Šenov",
};

export const navigace = [
  { href: "/servis-tepelnych-cerpadel", label: "Servis" },
  { href: "/montaz-tepelnych-cerpadel", label: "Montáž" },
  { href: "/zakazky", label: "Zakázky" },
  { href: "/kontakt", label: "Kontakt" },
];

export type Foto = { src: string; w: number; h: number; alt: string; popis: string };

export const fotky: Record<string, Foto> = {
  novostavba: {
    src: "/foto/jednotka-novostavba.jpg", w: 1280, h: 958,
    alt: "Venkovní jednotka Fujitsu na nerezovém stojanu u rozestavěného rodinného domu",
    popis: "Venkovní jednotka u novostavby, ještě před omítkou",
  },
  uVchodu: {
    src: "/foto/jednotka-u-vchodu.jpg", w: 1280, h: 958,
    alt: "Dvouventilátorová venkovní jednotka na nerezovém stojanu vedle vchodových dveří",
    popis: "Venkovní jednotka u vchodu, stojan na štěrkovém loži",
  },
  vyklenek: {
    src: "/foto/jednotka-ve-vyklenku.jpg", w: 1280, h: 958,
    alt: "Venkovní jednotka zapuštěná do výklenku v bílé fasádě",
    popis: "Jednotka zapuštěná do výklenku ve fasádě",
  },
  zasobnik: {
    src: "/foto/hydromodul-zasobnik.jpg", w: 958, h: 1280,
    alt: "Hydromodul na stěně technické místnosti s měděnými rozvody a stojatým zásobníkem teplé vody",
    popis: "Hydromodul a zásobník teplé vody",
  },
  rozvody: {
    src: "/foto/hydromodul-rozvody.jpg", w: 958, h: 1280,
    alt: "Vnitřní řídicí jednotka s displejem, oběhovým čerpadlem a měděným potrubím",
    popis: "Vnitřní jednotka s oběhovým čerpadlem",
  },
  konzole: {
    src: "/foto/jednotka-na-konzoli.jpg", w: 958, h: 1280,
    alt: "Venkovní jednotka Fujitsu na stojanu u dřevěného plotu, k jednotce vede chránička v zemi",
    popis: "Nová jednotka, přípojka vedená v chráničce",
  },
  fasada: {
    src: "/foto/jednotka-u-fasady.jpg", w: 958, h: 1280,
    alt: "Venkovní jednotka Fujitsu na ocelové konzoli před růžovou fasádou rodinného domu",
    popis: "Jednotka na ocelové konzoli u domu",
  },
  bojler: {
    src: "/foto/hydromodul-bojler.jpg", w: 958, h: 1280,
    alt: "Vnitřní jednotka zavěšená nad bojlerem s expanzní nádobou a manometrem",
    popis: "Vnitřní jednotka nad bojlerem",
  },
  mensi: {
    src: "/foto/jednotka-mensi.jpg", w: 958, h: 1280,
    alt: "Venkovní jednotka postavená na kamenném podkladu u žluté fasády",
    popis: "Venkovní jednotka na kamenném podkladu",
  },
};
