import { GetServerSideProps } from "next";

import NavLayout from "@/components/admin/NavLayout";
import ListLayout from "@/components/admin/ListLayout";
import prisma from "@/lib/prisma";

import { nav as navItems } from "@/data/nav";

export type Item = {
  id: string;
  href: string;

  // Spectacle
  type?: string;
  title?: string;
  excerpt?: string;
  author?: string;
  created?: string;
  published?: string;

  // Worker
  name?: string;
  position?: string;
  department?: string;
  bio?: string;
};

type Props = {
  data: {
    item: Item;
    items: Item[];
    navItems: {
      name: string;
      href: string;
    }[];
  };
};

export default function Item({ data }: Props) {
  const listData = {
    currentItem: data.item,
    items: data.items,
  };

  const navLayout = {
    navItems: data.navItems,
    children: <ListLayout data={listData} />,
  };

  return <NavLayout data={navLayout} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id, page } = context.query;

  let items: any[] = [];

  switch (page) {
    case "spectacle":
      items = await prisma.spectacle.findMany();
      items.map((spectacle: any) => {
        spectacle.created = JSON.parse(JSON.stringify(spectacle.created));
        spectacle.href = `/admin/spectacle/${spectacle.id}`;
      });
      break;

    case "worker":
      items = await prisma.worker.findMany();
      items.map((worker: any) => {
        worker.href = `/admin/worker/${worker.id}`;
      });
      break;

    case "event":
      items = [
        { id: "event-title", title: "Заголовок афіші", href: `/admin/${page}/event=title` },
      ];
      break;

    case "vacancy":
      items = await prisma.vacancy.findMany();
      items.map((vacancy: any) => {
        vacancy.published = JSON.parse(JSON.stringify(vacancy.published));
        vacancy.href = `/admin/vacancy/${vacancy.id}`;
      });
      break;

    case "post":
      items = await prisma.post.findMany();
      items.map((post: any) => {
        post.published = JSON.parse(JSON.stringify(post.published));
        post.href = `/admin/post/${post.id}`;
      });
      break;

    default:
      items = [
        { id: "title", title: "Заголовок", href: `/admin/${page}/title` },
      ];
      break;
  }

  const item = items.filter((item: any) => item.id === id)[0];

  const data = {
    item,
    items,
    navItems,
  };

  return { props: { data } };
};
