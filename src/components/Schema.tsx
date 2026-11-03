/**
 * Řez domem: jak tepelné čerpadlo vzduch-voda s hydromodulem topí.
 * Popisy vychází z textů na původním webu pana Vrlíka (deskový výměník
 * v hydromodulu, provoz do −21 °C, voda do topení až 55/60 °C).
 * Čárkované linky v trubkách pomalu proudí (třída .flow), při
 * prefers-reduced-motion stojí.
 */

const casti = [
  [
    "Venkovní jednotka",
    "Bere teplo ze vzduchu, i v mrazu do −21 °C. Kompresor s invertorem jede jen na takový výkon, jaký dům zrovna potřebuje.",
  ],
  [
    "Potrubí s chladivem",
    "Přenáší teplo zdí do domu. Venku je vedené v chráničce.",
  ],
  [
    "Hydromodul",
    "V deskovém výměníku předá teplo vodě. Řídí oběhové čerpadlo, záložní zdroj a teplotu podle počasí venku.",
  ],
  ["Topení", "Voda do radiátorů má až 55 °C, u řady High Power až 60 °C."],
  ["Bojler", "Stejné čerpadlo ohřívá i vodu na mytí a sprchování."],
];

function Znacka({ x, y, n }: { x: number; y: number; n: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="17" fill="#f1f2f0" />
      <text
        x={x}
        y={y + 7}
        textAnchor="middle"
        fontSize="20"
        fontWeight="800"
        fill="#1d405b"
        stroke="none"
      >
        {n}
      </text>
    </g>
  );
}

export function Schema() {
  return (
    <section id="jak-funguje" className="scroll-mt-4 bg-deep text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="reveal max-w-2xl">
          <h2 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
            Jak tepelné čerpadlo topí
          </h2>
          <p className="mt-5 text-xl text-white/75">
            Bere teplo ze vzduchu venku a předává ho vodě v topení. Funguje i v
            zimě, když mrzne.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[2.1fr_1fr] lg:items-center lg:gap-10">
          <figure className="reveal">
            <svg
              viewBox="0 0 1000 500"
              className="w-full"
              role="img"
              aria-label="Řez domem: venkovní jednotka u zdi, potrubí s chladivem vede zdí k hydromodulu na stěně, z něj vede voda do radiátoru a do bojleru pod hydromodulem."
              fill="none"
              stroke="#f1f2f0"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* terén a dům */}
              <path d="M20 470 H980" strokeOpacity="0.5" />
              <path d="M330 132 L665 22 L1000 132" strokeOpacity="0.5" />
              <rect
                x="350"
                y="122"
                width="20"
                height="348"
                fill="#f1f2f0"
                fillOpacity="0.12"
                strokeOpacity="0.5"
              />
              <text
                x="40"
                y="236"
                fill="#f1f2f0"
                fillOpacity="0.6"
                stroke="none"
                fontSize="20"
                fontWeight="600"
              >
                Venku
              </text>
              <text
                x="400"
                y="170"
                fill="#f1f2f0"
                fillOpacity="0.6"
                stroke="none"
                fontSize="20"
                fontWeight="600"
              >
                V domě
              </text>

              {/* venkovní jednotka na stojanu */}
              <rect x="110" y="250" width="170" height="190" rx="6" />
              <circle cx="168" cy="298" r="34" />
              <circle cx="168" cy="392" r="34" />
              <path
                d="M168 264 V332 M134 298 H202 M168 358 V426 M134 392 H202"
                strokeOpacity="0.45"
                strokeWidth="2"
              />
              <path d="M222 262 V428" strokeOpacity="0.45" strokeWidth="2" />
              <path d="M125 440 V470 M265 440 V470" />

              {/* chladivo zdí do hydromodulu */}
              <path
                d="M280 296 H420 V250 H450"
                strokeOpacity="0.35"
                strokeWidth="7"
              />
              <path
                d="M280 314 H436 V270 H450"
                strokeOpacity="0.35"
                strokeWidth="7"
              />
              <path
                className="flow"
                d="M280 296 H420 V250 H450"
                strokeDasharray="8 14"
              />
              <path
                className="flow flow-back"
                d="M280 314 H436 V270 H450"
                strokeDasharray="8 14"
              />

              {/* hydromodul */}
              <rect
                x="450"
                y="190"
                width="130"
                height="120"
                rx="6"
                fill="#1d405b"
              />
              <rect
                x="468"
                y="208"
                width="52"
                height="28"
                rx="3"
                strokeOpacity="0.7"
                strokeWidth="2"
              />
              <path
                d="M540 214 H562 M540 226 H556"
                strokeOpacity="0.5"
                strokeWidth="2"
              />

              {/* bojler pod hydromodulem */}
              <path d="M500 310 V340 M530 310 V340" />
              <rect x="460" y="340" width="110" height="128" rx="22" />
              <circle
                cx="515"
                cy="372"
                r="11"
                strokeOpacity="0.6"
                strokeWidth="2"
              />

              {/* topná voda do radiátoru a zpět */}
              <path
                d="M580 220 H700 V360 H760"
                strokeOpacity="0.35"
                strokeWidth="7"
              />
              <path
                d="M580 240 H680 V412 H760"
                strokeOpacity="0.35"
                strokeWidth="7"
              />
              <path
                className="flow"
                d="M580 220 H700 V360 H760"
                strokeDasharray="8 14"
              />
              <path
                className="flow flow-back"
                d="M580 240 H680 V412 H760"
                strokeDasharray="8 14"
              />

              {/* radiátor */}
              <rect x="760" y="340" width="180" height="90" rx="6" />
              <path
                d="M790 350 V420 M820 350 V420 M850 350 V420 M880 350 V420 M910 350 V420"
                strokeOpacity="0.6"
                strokeWidth="2"
              />

              <Znacka x={195} y={222} n={1} />
              <Znacka x={315} y={268} n={2} />
              <Znacka x={515} y={160} n={3} />
              <Znacka x={850} y={306} n={4} />
              <Znacka x={608} y={404} n={5} />
            </svg>
          </figure>

          <ol className="grid gap-x-8 gap-y-6 border-t border-white/20 pt-8 sm:grid-cols-2 lg:grid-cols-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            {casti.map(([nazev, text], i) => (
              <li key={nazev} className="reveal">
                <p className="flex items-center gap-3 text-lg font-bold">
                  <span
                    aria-hidden
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-paper text-base font-extrabold text-deep"
                  >
                    {i + 1}
                  </span>
                  {nazev}
                </p>
                <p className="mt-1.5 pl-11 text-base text-white/75">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
