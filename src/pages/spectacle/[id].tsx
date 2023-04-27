import { useRouter } from "next/router";
import { appRouter } from "@/server/routers/_app";
import { getSession } from "next-auth/react";

import Layout from "@/components/website/Layout";
import SpectacleListItem from "@/components/website/SpectacleListItem";

type Props = {
  data: {
    spectacles: {
      imageUrl: string;
      title: string;
      publicHref: string;
      type: string;
      author: string;
    }[];
  };
};

export default function Spectacle({ data }: Props) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="grid grid-cols-4 border-b border-zinc-800">
        <div className="border-r border-zinc-800">
          {data.spectacles.map((spectacle, key) => (
            <SpectacleListItem data={spectacle} key={key} />
          ))}
        </div>
        <div className="col-span-3 p-4">
          <div className="text-3xl">{id}</div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const session = await getSession();
  const caller = appRouter.createCaller({ session });

  const spectacles = await caller.spectacle.publicList();
  const paths = spectacles.map((spectacle) => ({
    params: { id: spectacle.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const session = await getSession();
  const caller = appRouter.createCaller({ session });

  const spectacles = await caller.spectacle.publicList();

  return {
    props: {
      data: {
        spectacles,
      },
    },
    revalidate: 1,
  };
}
