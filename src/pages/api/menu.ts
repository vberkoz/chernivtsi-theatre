import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
  }

  const items = await prisma.adminPage.findMany();
  res.status(200).json({ items });
}
