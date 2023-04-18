import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  items:
    | {
        href: string;

        id?: string;
        eventId?: string;
        title?: string;
        name?: string;
        spectacle?: {
          title: string;
        };
      }[]
    | undefined;
};

export default function List({ items }: Props) {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <>
      {items?.map((item, key) => (
        <Link
          href={item.href}
          className={`
          px-4 py-3 
          hover:bg-zinc-700 
          truncate
          ${currentUrl === item.href && "bg-zinc-800"}
          `}
          key={key}
        >
          {item.title || item.name || item.spectacle?.title}
        </Link>
      ))}
    </>
  );
}
