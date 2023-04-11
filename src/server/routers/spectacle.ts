import prisma from "@/utils/prisma";
import { protectedProcedure, router } from "../trpc";
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
    },
  },
});

export const spectacleRouter = router({
  list: protectedProcedure.query(async () => {
    return await xprisma.spectacle.findMany({
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
      return await xprisma.spectacle.findUnique({
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
