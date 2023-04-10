import prisma from "@/utils/prisma";
import { protectedProcedure, publicProcedure, router } from "../trpc";
import { Spectacle } from "@prisma/client";

export const spectacleRouter = router({
  list: publicProcedure.query(async () => {
    return await prisma.spectacle.findMany({
      take: 5
    });
  }),
});
