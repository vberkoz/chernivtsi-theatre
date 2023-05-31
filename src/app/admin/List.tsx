"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  listItems: {
    handle: string;
    title: string;
    adminUrl: string;
  }[];
};

export default function List({ listItems }: Props) {
  const pathname = usePathname();
  return (
    <>
      {listItems.map((listItem) => (
        <Link
          href={listItem.adminUrl}
          className={`
            px-4 py-3 hover:bg-zinc-700 truncate
            outline-none focus:ring-2 ring-inset ring-zinc-100 
            ${pathname.startsWith(listItem.adminUrl) && "bg-zinc-800"}
          `}
          key={listItem.handle}
        >
          {listItem.title}
        </Link>
      ))}
    </>
  );
}
