import prisma from "@/utils/prisma";

const xprisma = prisma.$extends({
  result: {
    post: {
      href: {
        needs: { id: true },
        compute(post) {
          return `/admin/post/${post.id}`;
        },
      },
    },
  },
});

const getPostByHandle = async (handle: string) =>
  await xprisma.post.findUnique({
    where: {
      handle: handle,
    },
    select: {
      handle: true,
      title: true,
      href: true,
    },
  });

export default async function Page({ params }: { params: { handle: string } }) {
  const post = await getPostByHandle(params.handle);
  return (
    <div className="col-span-2 h-screen px-4 py-3">
      <>
        <div className="text-2xl">{post?.title}</div>
        <div>{post?.handle}</div>
      </>
    </div>
  );
}
