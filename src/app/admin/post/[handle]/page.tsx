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
      publicUrl: true,
    },
  });

  return (
    <div className="col-span-2 h-screen px-4 py-3 overflow-y-scroll">
      {post ? (
        <PostForm
          data={post}
        />
      ) : (
        <PostForm
          data={{
            handle: "",
            title: "",
            adminUrl: "",
            publicUrl: "",
          }}
        />
      )}
    </div>
  );
}
