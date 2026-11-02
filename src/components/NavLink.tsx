"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const active = usePathname() === href;
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`underline-offset-8 hover:text-white ${active ? "text-white underline decoration-white/60 decoration-2" : "text-white/80"}`}
    >
      {children}
    </Link>
  );
}
