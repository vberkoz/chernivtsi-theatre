import { ReactNode } from "react";
import Head from "next/head";
import Menu from "./Menu";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Чернівецький академічний обласний український музично-драматичний театр ім. Ольги Кобилянської</title>
        <meta name="description" content="Чернівецький академічний обласний український музично-драматичний театр ім. Ольги Кобилянської" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="logo.svg" type="image/svg+xml" />
      </Head>
  
      <div>
        <Menu />
        {children}
        <Footer />
      </div>
    </>
  );
}