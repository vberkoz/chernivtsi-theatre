import Head from "next/head";
import { ReactNode } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Nav from "./Nav";

type Props = {
  children: ReactNode;
};

export default function NavLayout({ children }: Props) {
  const { data: session } = useSession();

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
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col border-r border-b border-zinc-800 bg-zinc-900">
              <Nav />
              <div className="grow"></div>
              <button
                onClick={() => signOut({ callbackUrl: "/admin" })}
                className="px-4 py-3 mt-14 text-left hover:bg-zinc-800"
              >
                Вийти
              </button>
            </div>
            {children}
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
