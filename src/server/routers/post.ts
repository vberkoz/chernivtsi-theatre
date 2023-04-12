import prisma from "@/utils/prisma";
import { protectedProcedure, router } from "../trpc";
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
  list: protectedProcedure.query(async () => {
    return await xprisma.post.findMany({
      select: {
        id: true,
        title: true,
        href: true,
      },
    });
  }),
  byId: protectedProcedure
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
