import prisma from "@/utils/prisma";
import { procedure, router } from "../trpc";
import { z } from "zod";

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

export const postRouter = router({
  publicList: procedure.query(async () => {
    return await xprisma.post.findMany({
      take: 4,
      select: {
        id: true,
        title: true,
        type: true,
        excerpt: true,
        published: true,
        href: true,
      },
    });
  }),

  list: procedure.query(async () => {
    return await xprisma.post.findMany({
      select: {
        id: true,
        title: true,
        href: true,
      },
    });
  }),
  byId: procedure
    .input(z.object({ id: z.string() }))
    .query(async (req) => {
      return await xprisma.post.findUnique({
        where: {
          id: req.input.id,
        },
        select: {
          id: true,
          title: true,
          href: true,
        },
      });
    }),
});
