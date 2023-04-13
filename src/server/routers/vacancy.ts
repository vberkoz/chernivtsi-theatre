import prisma from "@/utils/prisma";
import { procedure, router } from "../trpc";
import { z } from "zod";

const xprisma = prisma.$extends({
  result: {
    vacancy: {
      href: {
        needs: { id: true },
        compute(vacancy) {
          return `/admin/vacancy/${vacancy.id}`;
        },
      },
    },
  },
});

export const vacancyRouter = router({
  list: procedure.query(async () => {
    return await xprisma.vacancy.findMany({
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
      return await xprisma.vacancy.findUnique({
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
