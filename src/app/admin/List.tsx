"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  listItems: {
    handle: string;
    title: string;
    href: string;
  }[];
};

export default function List({ listItems }: Props) {
  const pathname = usePathname();
  return (
    <>
      {listItems.map((listItem) => (
        <Link
          href={listItem.href}
          className={`
            px-4 py-3 hover:bg-zinc-700 
            outline-none focus:ring-2 ring-inset ring-zinc-100 
            ${pathname.startsWith(listItem.href) && "bg-zinc-800"}
          `}
          key={listItem.handle}
        >
          {listItem.title}
        </Link>
      ))}
    </>
  );
}
