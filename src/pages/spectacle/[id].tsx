import { appRouter } from "@/server/routers/_app";
import { getSession } from "next-auth/react";
import superjson from "superjson";
import Image from "next/image";
import { format } from "date-fns";
import { tr, uk } from "date-fns/locale";
import { useEffect, useRef } from "react";

import Layout from "@/components/website/Layout";
import SpectacleListItem from "@/components/website/SpectacleListItem";

import volodymyrShnayder from "../../../public/volodymyrShnayder.webp";

import auntyForAMillion from "../../../public/auntyForAMillion.webp";
import gabrielle from "../../../public/gabrielle.webp";
import betrayMe from "../../../public/betrayMe.webp";

type SpectacleType = {
  id: string;
  imageUrl: string;
  title: string;
  author: string;
  type: string;
  duration: string;
  description: string;
  forChildren: boolean;
  published: boolean;
  created: Date;
  events: {
    id: number;
    beginningAt: Date;
    spectacleId: string;
  }[];
  href: string;
};

type Props = {
  data: {
    spectacles: {
      imageUrl: string;
      title: string;
      publicHref: string;
      type: string;
      author: string;
    }[];
    spectacle: string;
  };
};

export default function Spectacle({ data }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);
  const siblingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current && siblingRef.current) {
      const elementHeight = elementRef.current.offsetHeight;
      console.log(elementHeight);
      siblingRef.current.style.height = `${elementHeight}px`;
    }
  });

  const spectacle = superjson.parse<SpectacleType>(data.spectacle);

  const menuItems = [
    "Опис вистави",
    "Дійові особи та актори",
    "Галерея",
    "Розклад",
  ];

  return (
    <Layout>
      <div className="border-b border-zinc-800">
        <div className="grid grid-cols-4">
          <div
            className="hidden xl:block border-r border-zinc-800 overflow-y-scroll"
            ref={siblingRef}
          >
            {data.spectacles.map((spectacle, key) => (
              <SpectacleListItem
                data={spectacle}
                className={`${
                  key !== data.spectacles.length - 1 &&
                  "border-b border-zinc-800"
                }`}
                key={key}
              />
            ))}
          </div>

          <div className="col-span-4 xl:col-span-3">
            <div ref={elementRef}>
              <div
                className="h-[calc(50vh-120px)] sm:h-[calc(70vh-120px)] lg:h-[calc(100vh-120px)] flex flex-col bg-[length:100%]"
                style={{
                  backgroundImage: `url(${spectacle.imageUrl})`,
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute w-full h-[calc(50vh-120px)] sm:h-[calc(70vh-120px)] lg:h-[calc(100vh-120px)]"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
                  }}
                ></div>
                <div className="self-end p-8 font-thin">
                  {spectacle.forChildren ? "8+" : "16+"}
                </div>
                <span className="grow"></span>
                <span className="pl-8 pb-4 font-serif text-3xl sm:text-5xl lg:text-7xl z-10">
                  {spectacle.title}
                </span>
                <span className="pl-8 pb-8 z-10 font-thin">
                  {spectacle.author}
                </span>
              </div>

              <div className="py-4 font-thin border-y border-zinc-700 bg-black sticky top-[60px] h-[62px] whitespace-nowrap overflow-x-scroll z-10">
                <div className="px-4 opacity-70">
                  {menuItems.map((item, key) => (
                    <span className="px-4" key={key}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3">
                <div className="col-span-3 border-b border-zinc-700 grid grid-cols-3 md:hidden">
                  <div className="p-8 font-thin border-b border-zinc-700">
                    Жанр
                  </div>
                  <div className="p-8 border-b border-zinc-700 col-span-2">
                    {spectacle.type}
                  </div>
                  <div className="p-8 font-thin">Тривалісь</div>
                  <div className="p-8 col-span-2">{spectacle.duration}</div>
                </div>

                <div className="col-span-3 md:col-span-2 border-r md:border-b border-zinc-700">
                  <div className="px-8 pb-4 pt-8 font-serif text-3xl">
                    Опис вистави
                  </div>
                  <div className="px-8 pb-8 font-thin">
                    {spectacle.description}
                  </div>
                </div>

                <div className="hidden md:block col-span-1 border-b border-zinc-700">
                  <div className="p-8 font-thin">Жанр</div>
                  <div className="p-8 font-serif text-3xl border-b border-zinc-700">
                    {spectacle.type}
                  </div>
                  <div className="p-8 font-thin">Тривалісь</div>
                  <div className="p-8 font-serif text-3xl">
                    {spectacle.duration}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 py-8 border-b border-zinc-700">
                <div className="font-serif text-3xl md:col-span-2 lg:col-span-3 px-8 pb-4">
                  Дійові особи та актори
                </div>
                <div className="flex items-center px-8 py-4">
                  <Image
                    src={volodymyrShnayder}
                    alt="Володимир Шнайдер"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <div className="font-thin opacity-70">
                      Головний диригент
                    </div>
                    <div className="font-thin">Володимир Шнайдер</div>
                  </div>
                </div>
                <div className="flex items-center px-8 py-4">
                  <Image
                    src={volodymyrShnayder}
                    alt="Володимир Шнайдер"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <div className="font-thin opacity-70">
                      Головний диригент
                    </div>
                    <div className="font-thin">Володимир Шнайдер</div>
                  </div>
                </div>
                <div className="flex items-center px-8 py-4">
                  <Image
                    src={volodymyrShnayder}
                    alt="Володимир Шнайдер"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <div className="font-thin opacity-70">
                      Головний диригент
                    </div>
                    <div className="font-thin">Володимир Шнайдер</div>
                  </div>
                </div>
                <div className="flex items-center px-8 py-4">
                  <Image
                    src={volodymyrShnayder}
                    alt="Володимир Шнайдер"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <div className="font-thin opacity-70">
                      Головний диригент
                    </div>
                    <div className="font-thin">Володимир Шнайдер</div>
                  </div>
                </div>
                <div className="flex items-center px-8 py-4">
                  <Image
                    src={volodymyrShnayder}
                    alt="Володимир Шнайдер"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <div className="font-thin opacity-70">
                      Головний диригент
                    </div>
                    <div className="font-thin">Володимир Шнайдер</div>
                  </div>
                </div>
                <div className="flex items-center px-8 py-4">
                  <Image
                    src={volodymyrShnayder}
                    alt="Володимир Шнайдер"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <div className="font-thin opacity-70">
                      Головний диригент
                    </div>
                    <div className="font-thin">Володимир Шнайдер</div>
                  </div>
                </div>
              </div>

              <div className="flex overflow-auto border-b border-zinc-700">
                <Image
                  src={auntyForAMillion}
                  alt="auntyForAMillion"
                  width={500}
                  height={500}
                  className="border-r border-zinc-700"
                />
                <Image
                  src={gabrielle}
                  alt="gabrielle"
                  width={500}
                  height={500}
                  className="border-r border-zinc-700"
                />
                <Image
                  src={betrayMe}
                  alt="betrayMe"
                  width={500}
                  height={500}
                  className="border-r border-zinc-700"
                />
              </div>

              <div className="overflow-auto">
                <table className="w-full">
                  <tbody>
                    {spectacle.events.map((event) => (
                      <tr
                        key={event.id}
                        className="font-thin border-b border-zinc-700"
                      >
                        <td className="p-8">
                          {format(event.beginningAt, "dd", { locale: uk })}
                          <span className="capitalize pl-2">
                            {format(event.beginningAt, "MMMM", { locale: uk })}
                          </span>
                        </td>

                        <td className="capitalize p-8">
                          {format(event.beginningAt, "EEEE", { locale: uk })}
                        </td>
                        <td className="p-8">
                          {format(event.beginningAt, "HH:mm", { locale: uk })}
                        </td>
                        <td className="p-8 text-end">
                          <button className="font-serif font-normal text-zinc-100 uppercase bg-red-900 hover:bg-red-600 rounded-full py-1 px-4 max-w-fit min-w-[220px]">
                            Придбати Квиток
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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

export async function getStaticProps({ params }: { params: { id: string } }) {
  const session = await getSession();
  const caller = appRouter.createCaller({ session });

  const spectacles = await caller.spectacle.publicList();
  const spectacle = await caller.spectacle.byId({ id: params.id });

  return {
    props: {
      data: {
        spectacles,
        spectacle: superjson.stringify(spectacle),
      },
    },
    revalidate: 1,
  };
}
