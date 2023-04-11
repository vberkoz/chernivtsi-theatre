import prisma from "@/utils/prisma";
import { protectedProcedure, router } from "../trpc";

export const menuRouter = router({
  list: protectedProcedure.query(async () => {
    return await prisma.adminPage.findMany();
  }),
});
