import prisma from "@/utils/prisma";
import List from "../../List";

const xprisma = prisma.$extends({
  result: {
    post: {
      href: {
        needs: { handle: true },
        compute(post) {
          return `/admin/post/${post.handle}`;
        },
      },
    },
  },
});

const getPosts = async () =>
  await xprisma.post.findMany({
    select: {
      handle: true,
      title: true,
      href: true,
    },
  });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getPosts();

  return (
    <>
      <div className="flex flex-col border-r border-zinc-800 bg-zinc-900">
        <List listItems={JSON.parse(JSON.stringify(posts))} />
      </div>
      {children}
    </>
  );
}
