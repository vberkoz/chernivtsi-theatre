import { GetServerSideProps } from "next";

import NavLayout from "@/components/admin/NavLayout";
import ListLayout from "@/components/admin/ListLayout";
import prisma from "@/lib/prisma";

import { nav as navItems } from "@/data/nav";

export type Spectacle = {
  id: string;
  type: string;
  title: string;
  excerpt: string;
  author: string;
  published: string;
  href: string;
};

type Props = {
  data: {
    spectacle: Spectacle;
    spectacles: Spectacle[];
    navItems: {
      name: string;
      href: string;
    }[];
  };
};

export default function Spectacle({ data }: Props) {
  const listData = {
    currentItem: data.spectacle,
    items: data.spectacles,
  };

  const navLayout = {
    navItems: data.navItems,
    children: <ListLayout data={listData} />,
  };

  return <NavLayout data={navLayout} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const spectacles = await prisma.Spectacle.findMany();
  spectacles.map((spectacle: Spectacle) => {
    spectacle.published = JSON.parse(JSON.stringify(spectacle.published));
    spectacle.href = `/admin/spectacle/${spectacle.id}`;
  });

  const spectacle = spectacles.filter(
    (item: Spectacle) => item.id === id
  )[0];

  const data = {
    spectacle,
    spectacles,
    navItems,
  };

  return { props: { data } };
};
