import Link from "next/link";
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
        <div className="grow"></div>
        <Link
          href="/admin/post/add"
          className="
            px-4 py-3 mt-14 
            flex cursor-pointer 
            text-left text-zinc-100
            outline-none focus:ring-2 ring-inset ring-zinc-100 
            bg-blue-600 hover:bg-blue-700
          "
        >
          <span className="pr-4">Add post</span>
          <div className="grow"></div>
          <svg fill="currentColor" width="28" height="28" viewBox="0 0 32 32">
            <path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path>
            <title>Add</title>
          </svg>
        </Link>
      </div>
      {children}
    </>
  );
}
