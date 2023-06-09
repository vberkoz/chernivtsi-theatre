import { trpc } from "@/utils/trpc";
import { AdminPage } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  const currentUrl = router.asPath.split("/")[2];

  const menu = trpc.menu.list.useQuery();
  if (!menu.data) {
    return <div className="px-4 py-3">Завантаження...</div>;
  }

  return (
    <>
      {menu.data.map((item: AdminPage) => (
        <Link
          href={item.href}
          className={`
            px-4 py-3 hover:bg-zinc-700 
            outline-none focus:ring-2 ring-inset ring-zinc-100 
            ${currentUrl === item.href.split("/")[2] && "bg-zinc-800"}
          `}
          key={item.title}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
}
