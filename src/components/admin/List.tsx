import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  items: {
    name: string;
    href: string;
  }[];
};

export default function List({ items }: Props) {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <>
      {items.map((item) => (
        <Link
          href={item.href}
          className={`px-4 py-3 hover:bg-zinc-700 ${currentUrl === item.href && "bg-zinc-800"}`}
          key={item.name}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
