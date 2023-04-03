import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {
  data: {
    navItems: {
      name: string;
      href: string;
    }[];
    children: ReactNode;
  };
};

export default function NavLayout({ data }: Props) {
  const { data: session } = useSession();
  const router = useRouter();
  const currentUrl = router.asPath.split("/")[2];

  return (
    <>
      <Head>
        <title>
          Адміністративна зона - Чернівецький академічний обласний український
          музично-драматичний театр ім. Ольги Кобилянської
        </title>
        <meta
          name="description"
          content="Адміністративна зона - Чернівецький академічний обласний український 
          музично-драматичний театр ім. Ольги Кобилянської"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" />
      </Head>

      <div className="font-admin text-zinc-100 bg-zinc-900">
        {session ? (
          <div className="grid grid-cols-4">
            <div className="flex flex-col border-r border-zinc-800 bg-zinc-900">
              {data.navItems.map((item) => (
                <Link
                  href={item.href}
                  className={`px-4 py-3 hover:bg-zinc-700 ${
                    currentUrl === item.href.split("/")[2] && "bg-zinc-800"
                  }`}
                  key={item.name}
                >
                  {item.name}
                </Link>
              ))}
              <div className="grow"></div>
              <button
                onClick={() => signOut()}
                className="px-4 py-3 text-left hover:bg-zinc-800"
              >
                Вийти
              </button>
            </div>
            <div className="col-span-3 h-screen">{data.children}</div>
          </div>
        ) : (
          <div className="w-screen h-screen flex items-center">
            <div className="m-auto text-center max-w-sm">
              <div className="text-lg mb-4">
                Чернівецький академічний обласний український
                музично-драматичний театр ім. Ольги Кобилянської
              </div>
              <div className="text-lg mb-4">Адміністративна зона</div>
              <button
                onClick={() => signIn()}
                className="px-4 py-3 bg-zinc-800 hover:bg-zinc-700"
              >
                Ввійти
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
