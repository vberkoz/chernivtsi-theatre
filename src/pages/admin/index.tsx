import { GetServerSideProps } from "next";

import NavLayout from "@/components/admin/NavLayout";

import { nav as navItems } from "@/data/nav";

type Props = {
  data: {
    navItems: {
      name: string;
      href: string;
    }[];
  };
};

export default function Dashboard({ data }: Props) {
  const navLayout = {
    navItems: data.navItems,
    children: <div className="px-4 py-3">Головна панель</div>,
  };

  return <NavLayout data={navLayout} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = {
    navItems,
  };
  return { props: { data } };
};
