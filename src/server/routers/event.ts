import prisma from "@/utils/prisma";
import { protectedProcedure, router } from "../trpc";
import { z } from "zod";

const xprisma = prisma.$extends({
  result: {
    event: {
      href: {
        needs: { id: true },
        compute(event) {
          return `/admin/event/${event.id}`;
        },
      },
    },
  },
});

export const eventRouter = router({
  list: protectedProcedure.query(async () => {
    return await xprisma.event.findMany({
      select: {
        id: true,
        href: true,
        spectacle: {
          select: {
            title: true,
          },
        },
      },
    });
  }),
  byId: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async (req) => {
      return await xprisma.event.findUnique({
        where: {
          id: req.input.id,
        },
        select: {
          id: true,
          href: true,
          beginningAt: true,
          spectacle: {
            select: {
              title: true,
            },
          },
        },
      });
    }),
});
