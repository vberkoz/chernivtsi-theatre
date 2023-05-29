"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  navLinks: {
    id: string;
    title: string;
    href: string;
  }[];
};

export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname().split("/")[2];
  return (
    <>
      {navLinks.map((navLink) => {
        return (
          <Link
            href={navLink.href}
            className={`
            px-4 py-3 hover:bg-zinc-700 
            outline-none focus:ring-2 ring-inset ring-zinc-100 
            ${pathname.startsWith(navLink.href.split("/")[2]) && "bg-zinc-800"}
          `}
            key={navLink.id}
          >
            {navLink.title}
          </Link>
        );
      })}
    </>
  );
}
