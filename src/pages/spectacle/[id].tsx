import { useRouter } from "next/router";

import Layout from "@/components/website/Layout";

export default function Spectacle() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="grid grid-cols-4 border-b border-zinc-800">
        <div className="h-screen border-r border-zinc-800 p-4">Spectacle List</div>
        <div className="col-span-3 h-screen p-4">
          <div className="text-3xl">{id}</div>
        </div>
      </div>
    </Layout>
  );
}
