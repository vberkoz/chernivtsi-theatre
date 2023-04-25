import Layout from "@/components/website/Layout";
import Welcome from "@/components/website/Welcome";

import Premiere from "@/components/website/Premiere";
import Staff from "@/components/website/Staff";
import Event from "@/components/website/Event";
import Partners from "@/components/website/Partners";
import Post from "@/components/website/Post";
import Vacancy from "@/components/website/Vacancy";

import { appRouter } from "@/server/routers/_app";
import { getSession } from "next-auth/react";

import superjson from "superjson";

type EventType = {
  id: number;
  href: string;
  beginningAt: Date;
  spectacle: {
    title: string;
    type: string;
    imageUrl: string;
  };
};

type PostType = {
  id: string;
  title: string;
  type: string;
  excerpt: string;
  published: Date;
  href: string;
}

type Props = {
  data: {
    spectacles: {
      id: string;
      title: string;
      publicHref: string;
      type: string;
    }[];
    worker: {
      id: string;
      name: string;
      position: string;
      href: string;
      imageUrl: string;
    };
    event: string;
    post: string;
    vacancy: {
      id: string;
      title: string;
      imageUrl: string;
      href: string;
    }[];
  };
};

export default function Home({ data }: Props) {
  const event = superjson.parse<EventType[]>(data.event);
  const post = superjson.parse<PostType[]>(data.post);
  return (
    <Layout>
      <Welcome />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Premiere
          data={{
            typeRow: data.spectacles[0].type,
            title: data.spectacles[0].title,
            href: data.spectacles[0].publicHref,
            image: data.spectacles[0].id,
            doubleWidth: true,
            topOverlayClass: "lg:border-r",
          }}
        />

        <Premiere
          data={{
            typeRow: data.spectacles[1].type,
            title: data.spectacles[1].title,
            href: data.spectacles[1].publicHref,
            image: data.spectacles[1].id,
            doubleWidth: false,
            topOverlayClass: "md:border-r",
          }}
        />

        <Premiere
          data={{
            typeRow: data.spectacles[2].type,
            title: data.spectacles[2].title,
            href: data.spectacles[2].publicHref,
            image: data.spectacles[2].id,
            doubleWidth: false,
            topOverlayClass: "",
          }}
        />

        <Staff
          data={{
            title: data.worker.name,
            position: data.worker.position,
            image: data.worker.imageUrl,
            topOverlayClass: "md:border-r",
          }}
        />

        <Premiere
          data={{
            typeRow: data.spectacles[3].type,
            title: data.spectacles[3].title,
            href: data.spectacles[3].publicHref,
            image: data.spectacles[3].id,
            doubleWidth: false,
            topOverlayClass: "lg:border-r",
          }}
        />

        <Premiere
          data={{
            typeRow: data.spectacles[4].type,
            title: data.spectacles[4].title,
            href: data.spectacles[4].publicHref,
            image: data.spectacles[4].id,
            doubleWidth: true,
            topOverlayClass: "",
          }}
        />

        <div className="py-4 font-serif bg-black border-b border-zinc-800 flex flex-col items-center col-span-1 md:col-span-2 lg:col-span-4">
          <div className="uppercase">Найближчі вистави</div>
        </div>
        <Event
          data={{
            type: event[0].spectacle.type,
            title: event[0].spectacle.title,
            image: event[0].spectacle.imageUrl,
            href: "#",
            date: event[0].beginningAt,
            time: event[0].beginningAt,
            topOverlayClass: "md:border-r",
          }}
        />
        <Event
          data={{
            type: event[1].spectacle.type,
            title: event[1].spectacle.title,
            image: event[1].spectacle.imageUrl,
            href: "#",
            date: event[1].beginningAt,
            time: event[1].beginningAt,
            topOverlayClass: "md:border-r-0 lg:border-r",
          }}
        />
        <Event
          data={{
            type: event[2].spectacle.type,
            title: event[2].spectacle.title,
            image: event[2].spectacle.imageUrl,
            href: "#",
            date: event[2].beginningAt,
            time: event[2].beginningAt,
            topOverlayClass: "md:border-r",
          }}
        />
        <Event
          data={{
            type: event[3].spectacle.type,
            title: event[3].spectacle.title,
            image: event[3].spectacle.imageUrl,
            href: "#",
            date: event[3].beginningAt,
            time: event[3].beginningAt,
            topOverlayClass: "",
          }}
        />

        <Partners />

        <div className="py-4 font-serif bg-black border-b border-zinc-800 flex flex-col items-center col-span-1 md:col-span-2 lg:col-span-4">
          <div className="uppercase">Вакансії</div>
        </div>
        <Vacancy
          data={{
            title: data.vacancy[0].title,
            href: "#",
            image: data.vacancy[0].imageUrl,
            doubleWidth: true,
            topOverlayClass: "lg:border-r",
          }}
        />
        <Vacancy
          data={{
            title: data.vacancy[1].title,
            href: "#",
            image: data.vacancy[1].imageUrl,
            doubleWidth: false,
            topOverlayClass: "md:border-r",
          }}
        />
        <Vacancy
          data={{
            title: data.vacancy[2].title,
            href: "#",
            image: data.vacancy[2].imageUrl,
            doubleWidth: false,
            topOverlayClass: "",
          }}
        />

        <div className="py-4 font-serif bg-black border-b border-zinc-800 flex flex-col items-center col-span-1 md:col-span-2 lg:col-span-4">
          <div className="uppercase">Новини</div>
        </div>
        <Post
          data={{
            date: post[0].published,
            type: post[0].type,
            title: post[0].title,
            excerpt: post[0].excerpt,
            containerClass: "md:border-r",
          }}
        />
        <Post
          data={{
            date: post[1].published,
            type: post[1].type,
            title: post[1].title,
            excerpt: post[1].excerpt,
            containerClass: "md:border-r-0 lg:border-r",
          }}
        />
        <Post
          data={{
            date: post[2].published,
            type: post[2].type,
            title: post[2].title,
            excerpt: post[2].excerpt,
            containerClass: "md:border-r",
          }}
        />
        <Post
          data={{
            date: post[3].published,
            type: post[3].type,
            title: post[3].title,
            excerpt: post[3].excerpt,
            containerClass: "",
          }}
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const session = await getSession();
  const caller = appRouter.createCaller({ session });

  const spectacles = await caller.spectacle.publicList();
  const worker = await caller.worker.takeOneRandom();
  const event = await caller.event.publicList();
  const vacancy = await caller.vacancy.publicList();
  const post = await caller.post.publicList();

  return {
    props: {
      data: {
        spectacles,
        worker: worker[0],
        event: superjson.stringify(event),
        vacancy,
        post: superjson.stringify(post),
      },
    },
    revalidate: 1,
  };
}
