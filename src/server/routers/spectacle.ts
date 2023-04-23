import prisma from "@/utils/prisma";
import { procedure, router } from "../trpc";
import { z } from "zod";

const xprisma = prisma.$extends({
  result: {
    spectacle: {
      href: {
        needs: { id: true },
        compute(spectacle) {
          return `/admin/spectacle/${spectacle.id}`;
        },
      },
      publicHref: {
        needs: { id: true },
        compute(spectacle) {
          return `/spectacle/${spectacle.id}`;
        },
      },
    },
  },
});

export const spectacleRouter = router({
  publicList: procedure.query(async () => {
    return await xprisma.spectacle.findMany({
      select: {
        id: true,
        title: true,
        publicHref: true,
        type: true,
      },
    });
  }),

  adminList: procedure.query(async () => {
    return await xprisma.spectacle.findMany({
      select: {
        id: true,
        title: true,
        href: true,
      },
    });
  }),

  byId: procedure.input(z.object({ id: z.string() })).query(async (req) => {
    return await xprisma.spectacle.findUnique({
      where: {
        id: req.input.id,
      },
      select: {
        id: true,
        imageUrl: true,
        title: true,
        author: true,
        type: true,
        duration: true,
        description: true,
        forChildren: true,
        published: true,
        created: true,
        events: {
          select: {
            id: true,
            beginningAt: true,
            spectacleId: true,
          },
        },
        href: true,
      },
    });
  }),
});
