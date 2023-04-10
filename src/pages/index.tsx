import prisma from "@/utils/prisma";

import Layout from "@/components/website/Layout";
import Welcome from "@/components/website/Welcome";

import nightOnTheMeadow from "public/nightOnTheMeadow.webp";
import gabrielle from "public/gabrielle.webp";
import auntyForAMillion from "public/auntyForAMillion.webp";
import betrayMe from "public/betrayMe.webp";
import weekendForThree from "public/weekendForThree.webp";

import choirmasterPhoto from "public/vacancy/choirmasterPhoto.webp";
import directorProducerPhoto from "public/vacancy/directorProducerPhoto.webp";
import productionDesignerPhoto from "public/vacancy/productionDesignerPhoto.webp";

import volodymyrShnayder from "public/volodymyrShnayder.webp";
import Premiere from "@/components/website/Premiere";
import Staff from "@/components/website/Staff";
import Event from "@/components/website/Event";
import Partners from "@/components/website/Partners";
import Post from "@/components/website/Post";
import Vacancy from "@/components/website/Vacancy";

import { Spectacle } from "@prisma/client";
import { trpc } from "@/utils/trpc";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "@/server/routers/_app";
import superjson from "superjson";

import { getSession } from "next-auth/react";
import { InferGetStaticPropsType } from "next";

type Props = {
  data: {
    spectacles: (Spectacle & { href: string })[];
  };
};

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const spectacle = trpc.spectacle.list.useQuery();

  if (spectacle.status !== "success") {
    return <div>Loading...</div>
  } else {
    return (
      <Layout>
        <Welcome />
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Premiere
            data={{
              typeRow: spectacle.data[0].type,
              title: spectacle.data[0].title,
              href: "#",
              image: spectacle.data[0].id,
              doubleWidth: true,
              topOverlayClass: "lg:border-r",
            }}
          />
  
          <Premiere
            data={{
              typeRow: spectacle.data[1].type,
              title: spectacle.data[1].title,
              href: "#",
              image: spectacle.data[1].id,
              doubleWidth: false,
              topOverlayClass: "md:border-r",
            }}
          />
  
          <Premiere
            data={{
              typeRow: spectacle.data[2].type,
              title: spectacle.data[2].title,
              href: "#",
              image: spectacle.data[2].id,
              doubleWidth: false,
              topOverlayClass: "",
            }}
          />
  
          <Staff
            data={{
              title: "Володимир Шнайдер",
              position: "Головний Диригент",
              image: volodymyrShnayder,
              topOverlayClass: "md:border-r",
            }}
          />
  
          <Premiere
            data={{
              typeRow: spectacle.data[3].type,
              title: spectacle.data[3].title,
              href: "#",
              image: spectacle.data[3].id,
              doubleWidth: false,
              topOverlayClass: "lg:border-r",
            }}
          />
  
          <Premiere
            data={{
              typeRow: spectacle.data[4].type,
              title: spectacle.data[4].title,
              href: "#",
              image: spectacle.data[4].id,
              doubleWidth: true,
              topOverlayClass: "",
            }}
          />
  
          <div className="py-4 font-serif bg-black border-b border-zinc-800 flex flex-col items-center col-span-1 md:col-span-2 lg:col-span-4">
            <div className="uppercase">Найближчі вистави</div>
          </div>
          <Event
            data={{
              type: "комедія",
              title: "Габріель",
              image: gabrielle,
              href: "#",
              date: "18 Січня",
              time: "19:00",
              topOverlayClass: "md:border-r",
            }}
          />
          <Event
            data={{
              type: "драматична поема",
              title: "Ніч на полонині",
              image: nightOnTheMeadow,
              href: "#",
              date: "19 Січня",
              time: "19:00",
              topOverlayClass: "md:border-r-0 lg:border-r",
            }}
          />
          <Event
            data={{
              type: "комедія",
              title: "Габріель",
              image: gabrielle,
              href: "#",
              date: "20 Січня",
              time: "18:00",
              topOverlayClass: "md:border-r",
            }}
          />
          <Event
            data={{
              type: "комедія на 2 дії",
              title: "Вікенд на трьох",
              image: weekendForThree,
              href: "#",
              date: "20 Січня",
              time: "20:00",
              topOverlayClass: "",
            }}
          />
  
          <Partners />
  
          <div className="py-4 font-serif bg-black border-b border-zinc-800 flex flex-col items-center col-span-1 md:col-span-2 lg:col-span-4">
            <div className="uppercase">Вакансії</div>
          </div>
          <Vacancy
            data={{
              title: "Художник-постановник театрально-виконавчого закладу",
              href: "#",
              image: productionDesignerPhoto,
              doubleWidth: true,
              topOverlayClass: "lg:border-r",
            }}
          />
          <Vacancy
            data={{
              title: "Хормейстер",
              href: "#",
              image: choirmasterPhoto,
              doubleWidth: false,
              topOverlayClass: "md:border-r",
            }}
          />
          <Vacancy
            data={{
              title: "Режисер-постановник",
              href: "#",
              image: directorProducerPhoto,
              doubleWidth: false,
              topOverlayClass: "",
            }}
          />
  
          <div className="py-4 font-serif bg-black border-b border-zinc-800 flex flex-col items-center col-span-1 md:col-span-2 lg:col-span-4">
            <div className="uppercase">Новини</div>
          </div>
          <Post
            data={{
              date: "2022-09-12",
              type: "Зустріч",
              title: "Сучасний театр в Україні",
              excerpt:
                "Хто ми? Звідки? Чи куди йдемо? Сергій Винниченко театральний блогер, автор порталу “Театральна риболовля” 18 червня, 12:00, фоє театру, 2-й поверх. Вхід вільний.",
              containerClass: "md:border-r",
            }}
          />
          <Post
            data={{
              date: "2022-12-22",
              type: "Оголошення",
              title: "До зустрічі у новому театральному сезоні",
              excerpt:
                "Шановні глядачі, до зустрічі у новому 91-му театральному сезоні. З питань екскурсії, звертайтеся за телефоном (0372) 52-46-62.",
              containerClass: "md:border-r-0 lg:border-r",
            }}
          />
          <Post
            data={{
              date: "2022-12-22",
              type: "Зустріч",
              title: "Театральна імпреза “Білий птах Буковини”",
              excerpt:
                "15 червня, 11:00, театральна імпреза до 80-ї річниці з дня народження видатного українського кіномитця Івана Миколайчука. Театр просто неба в музеї-садибі села Чорториї. Вхід вільний.",
              containerClass: "md:border-r",
            }}
          />
          <Post
            data={{
              date: "2022-11-22",
              type: "Оголошення",
              title: "Відміна вистав у жовтні 2022",
              excerpt:
                "Шановні глядачі, повідомляємо про зміни в репертуарі на жовтень 2022 року, вистави з 7 по 10 жовтня - скасовано. Приносимо вибачання за незручності і дякуємо за розуміння.",
              containerClass: "",
            }}
          />
        </div>
      </Layout>
    );
  }
}

export async function getStaticProps() {
  const session = await getSession();

  const ssg = await createServerSideHelpers({
    router: appRouter,
    ctx: { session },
    transformer: superjson, // optional - adds superjson serialization
  });

  await ssg.spectacle.list.prefetch();

  const spectacles = await prisma.spectacle.findMany();
  spectacles.map((spectacle: any) => {
    spectacle.created = JSON.parse(JSON.stringify(spectacle.created));
    spectacle.href = `/admin/spectacle/${spectacle.id}`;
  });

  return {
    props: {
      data: {
        spectacles,
        trpcState: ssg.dehydrate(),
      },
    },
    revalidate: 1,
  };
}
