import Navigation from "./Navigation";
import prisma from "@/utils/prisma";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = await prisma.adminPage.findMany();

  return (
    <div className="font-admin text-zinc-100 bg-zinc-900">
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col border-r border-b border-zinc-800 bg-zinc-900">
          <Navigation navLinks={menuItems} />
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
