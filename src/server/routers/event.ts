import prisma from "@/utils/prisma";
import { procedure, router } from "../trpc";
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
  list: procedure.query(async () => {
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
  byId: procedure
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
