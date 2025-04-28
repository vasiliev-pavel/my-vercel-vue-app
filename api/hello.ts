import { VercelRequest, VercelResponse } from "@vercel/node";

module.exports = (req: VercelRequest, res: VercelResponse) => {
  res.status(200).json({ message: "Hello from Serverless Function!" });
};
