import { NextApiRequest, NextApiResponse } from "next";
import { API_URL } from "../../utils/config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const response = await fetch(`${API_URL}/api/cobo/total-amount`);
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
