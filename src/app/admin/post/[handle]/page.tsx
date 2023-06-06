import prisma from "@/utils/prisma";
import PostForm from "./PostForm";

export default async function Page({ params }: { params: { handle: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      handle: params.handle,
    },
    select: {
      handle: true,
      title: true,
      adminUrl: true,
    },
  });

  return (
    <div className="col-span-2 h-screen px-4 py-3">
      {post ? (
        <PostForm
          data={{
            handle: post?.handle,
            title: post?.title,
            adminUrl: post?.adminUrl,
          }}
        />
      ) : (
        <PostForm
          data={{
            handle: "",
            title: "",
            adminUrl: "",
          }}
        />
      )}
    </div>
  );
}
