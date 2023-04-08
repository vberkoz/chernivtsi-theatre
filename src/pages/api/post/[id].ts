import { getServerSession } from "next-auth/next";

import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "@/lib/prisma";
import { spectacle as Spectacle } from "@prisma/client";

type Item = Spectacle & {
  created: string;
  href: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
  }

  if (req.query.id) {
    const { method } = req;
    switch (method) {
      case "GET":
        const { id } = req.query;
        const result: Spectacle | null = await prisma.spectacle.findFirst({
          where: {
            id: id.toString(),
          },
        });

        let item: Item | null = null;
        if (result) {
          item = {
            ...result,
            created: JSON.parse(JSON.stringify(result.created)),
            href: `/admin/spectacle/${result.id}`,
          };
        }

        res.status(200).json({ item });
        break;
      case "PUT":
        // Update or create data in your database
        res.status(200).json({ message: "Post saved." });
        break;
      default:
        res.setHeader("Allow", ["GET", "PUT"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } else {
    res.status(400).json({ message: "Post id not provided." });
  }
}
