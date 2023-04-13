import prisma from "@/utils/prisma";
import { procedure, router } from "../trpc";
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
  takeOneRandom: procedure.query(async () => {
    const workersCount = await prisma.worker.count();
    const skip = Math.floor(Math.random() * workersCount);
    return await xprisma.worker.findMany({
      take: 1,
      skip: skip,
      select: {
        id: true,
        name: true,
        position: true,
        imageUrl: true,
        href: true,
      },
    });
  }),
  list: procedure.query(async () => {
    return await xprisma.worker.findMany({
      select: {
        id: true,
        name: true,
        href: true,
      },
    });
  }),
  byId: procedure.input(z.object({ id: z.string() })).query(async (req) => {
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
