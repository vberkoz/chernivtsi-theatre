import prisma from "@/utils/prisma";
import { procedure, router } from "../trpc";
import { TRPCError } from "@trpc/server";

export const menuRouter = router({
  list: procedure.query(async ({ ctx }) => {
    if (!ctx.session) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return await prisma.adminPage.findMany();
  }),
});
