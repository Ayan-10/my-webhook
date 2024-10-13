import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { requestId, status } = req.body;

  console.log(req.body);
  if (status === "COMPLETED") {
    // Update the training record in the database
    // await prisma.training.updateMany({
    //   where: { falRequestId: requestId },
    //   data: { status: "COMPLETED" },
    // });
  }

  res.status(200).json({ message: "Webhook received" });
}
