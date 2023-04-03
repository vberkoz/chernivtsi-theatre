import { GetServerSideProps } from "next";

import NavLayout from "@/components/admin/NavLayout";
import ListLayout from "@/components/admin/ListLayout";

import { spectacleItems as spectacles } from "@/data/spectacle";
import { nav as navItems } from "@/data/nav";

type Props = {
  data: {
    spectacle: {
      name: string;
      href: string;
    };
    spectacles: {
      name: string;
      href: string;
    }[];
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
  const spectacle = spectacles.filter(
    (item) => item.href === context.resolvedUrl
  )[0];

  const data = {
    spectacle,
    spectacles,
    navItems,
  };

  return { props: { data } };
};
