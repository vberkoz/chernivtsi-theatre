import prisma from "@/utils/prisma";
import { procedure, router } from "../trpc";

export const menuRouter = router({
  list: procedure.query(async () => {
    return await prisma.adminPage.findMany();
  }),
});
