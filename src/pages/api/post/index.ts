import { getServerSession } from "next-auth/next";

import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
  }

  const items = await prisma.spectacle.findMany();
  items.map((spectacle: any) => {
    spectacle.created = JSON.parse(JSON.stringify(spectacle.created));
    spectacle.href = `/admin/spectacle/${spectacle.id}`;
  });
  res.status(200).json({ items });
}
