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
  const menuItems = [
    { id: "dashboard", title: "Dashboard", href: "/admin" },
    {
      id: "post",
      title: "Post",
      href: "/admin/post",
    },
    {
      id: "spectacle",
      title: "Spectacle",
      href: "/admin/spectacle",
    },
    {
      id: "vacancy",
      title: "Vacancy",
      href: "/admin/vacancy",
    },
    {
      id: "worker",
      title: "Worker",
      href: "/admin/worker",
    },
    { id: "event", title: "Event", href: "/admin/event" },
  ];

  return (
    <div className="font-admin text-zinc-100 bg-zinc-900">
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col border-r border-b border-zinc-800 bg-zinc-900">
          {menuItems.map((menuItem) => (
            <Link
              href={menuItem.href}
              className="px-4 py-3 hover:bg-zinc-700 outline-none focus:ring-2 ring-inset ring-zinc-100"
              key={menuItem.id}
            >
              {menuItem.title}
            </Link>
          ))}
          <div className="grow"></div>
          <button className="px-4 py-3 mt-14 text-left hover:bg-zinc-800 outline-none focus:ring-2 ring-inset ring-zinc-100">
            Logout
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
