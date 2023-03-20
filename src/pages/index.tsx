import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

import welcome from "public/welcome.webp";

export default function Home() {
  return (
    <Layout>
      <Link href="#">
        <Image src={welcome} alt="" className="border-b border-zinc-800" />
      </Link>
    </Layout>
  );
}
