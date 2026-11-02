import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <h1 className="font-display text-5xl font-bold">Stránka nenalezena</h1>
      <p className="mt-6 text-xl text-muted">
        Tahle stránka neexistuje. Pokračujte na{" "}
        <Link href="/" className="text-copper underline underline-offset-4">
          úvod
        </Link>
        .
      </p>
    </section>
  );
}
