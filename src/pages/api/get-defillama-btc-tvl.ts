import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const response = await fetch(`https://api.llama.fi/tvl/pstake-btc`);
      const data = await response.json();
      if (response.ok) {
        return res.status(200).json({ data, error: null });
      }
      return res.status(400).json({ data: null, error: data.error });
    } catch (error) {
      console.error({ error });
      res.status(500).json({ data: null, error: error });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
