"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const active = usePathname() === href;
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`underline-offset-8 hover:text-copper ${active ? "text-copper underline decoration-2" : ""}`}
    >
      {children}
    </Link>
  );
}
