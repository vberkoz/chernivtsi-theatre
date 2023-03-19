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
        <title>Chernivtsi Drama Theatre</title>
        <meta name="description" content="Chernivtsi Drama Theatre" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="logo.svg" type="image/svg+xml" /> */}
      </Head>
  
      <div>
        <Menu />
        {/* <Banner /> */}
        {children}
        <Footer />
      </div>
    </>
  );
}