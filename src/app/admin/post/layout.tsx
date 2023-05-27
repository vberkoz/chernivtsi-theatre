// import prisma from "@/utils/prisma";
import Link from "next/link";

// async function getMenuItems() {
//   const menuItems = await prisma.adminPage.findMany();
//   return menuItems;
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const menuItems = await getMenuItems();
  // console.log(menuItems);
  return (
    <div className="font-admin">
      <nav className="flex flex-row">
        posts list
        {/* {menuItems.map((menuItem) => (
          <Link href={menuItem.href} className="m-2" key={menuItem.id}>
            {menuItem.title}
          </Link>
        ))} */}
      </nav>
      {children}
    </div>
  );
}
