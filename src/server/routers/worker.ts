import prisma from "@/utils/prisma";
import { protectedProcedure, router } from "../trpc";
import { z } from "zod";

const xprisma = prisma.$extends({
  result: {
    worker: {
      href: {
        needs: { id: true },
        compute(worker) {
          return `/admin/worker/${worker.id}`;
        },
      },
    },
  },
});

export const workerRouter = router({
  list: protectedProcedure.query(async () => {
    return await xprisma.worker.findMany({
      select: {
        id: true,
        name: true,
        href: true,
      },
    });
  }),
  byId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async (req) => {
      return await xprisma.worker.findUnique({
        where: {
          id: req.input.id,
        },
        select: {
          id: true,
          name: true,
          href: true,
        },
      });
    }),
});
