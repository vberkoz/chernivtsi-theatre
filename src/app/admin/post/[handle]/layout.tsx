import prisma from "@/utils/prisma";
import List from "../../List";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await prisma.post.findMany({
    select: {
      handle: true,
      title: true,
      adminUrl: true,
    },
  });

  return (
    <>
      <div className="flex flex-col border-r border-zinc-800 bg-zinc-900">
        <List listItems={JSON.parse(JSON.stringify(posts))} />
      </div>
      {children}
    </>
  );
}
