import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function HeaderNav() {
  const { data: session } = useSession();
  const [opened, setOpened] = useState(false);

  const headerNavItems = [
    { name: "Головна", href: "#" },
    { name: "Вистави", href: "#" },
    { name: "Працівники", href: "#" },
    { name: "Афіша", href: "#" },
    { name: "Вакансії", href: "#" },
    { name: "Новини", href: "#" },
  ];

  const toggleMenu = () => {
    setOpened(!opened);
  };

  if (session) {
    return (
      <div className="top-0 sticky flex border-b border-zinc-800 bg-zinc-900">
        <div onClick={toggleMenu} className="px-4 py-3 sm:hidden">
          {opened ? (
            <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
              <path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path>
            </svg>
          ) : (
            <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
              <path d="M2 14.8H18V16H2zM2 11.2H18V12.399999999999999H2zM2 7.6H18V8.799999999999999H2zM2 4H18V5.2H2z"></path>
            </svg>
          )}
        </div>
        
        <div
          className={`
          ${opened ? "flex" : "hidden"} flex-col 
          absolute top-11 w-64 h-screen 
          border border-zinc-800 bg-zinc-900
          `}
        >
          {headerNavItems.map((item) => (
            <Link href={item.href} className="px-4 py-3" key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden sm:flex">
          {headerNavItems.map((item) => (
            <Link href={item.href} className="px-4 py-3 hover:bg-zinc-800" key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="grow"></div>

        <button
          onClick={() => signOut()}
          className="px-4 py-3 hover:bg-zinc-800"
        >
          Вийти
        </button>
      </div>
    );
  }

  return (
    <div className="top-0 sticky flex border-b border-zinc-800 bg-zinc-900">
      <div className="px-4 py-3">Адміністрування</div>

      <div className="grow"></div>

      <button onClick={() => signIn()} className="px-4 py-3 hover:bg-zinc-800">
        Ввійти
      </button>
    </div>
  );
}
