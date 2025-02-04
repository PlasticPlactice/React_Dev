// フロントとバックをつなぐAPIです
// 基本いじらないでください

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, endpoint } = req.query;

  if (!endpoint) {
    res.status(400).json({ error: "Endpoint is required" });
    return;
  }

  let url = `http://nginx/${endpoint}`;
  if (id && isNaN(Number(id))) {
    url += `?id=${id}`;
  }

  try {
    console.log(`Fetching data from URL: ${url}`);
    const response = await fetch(url);
    console.log("Response status:", response.status);
    const data = await response.json();
    console.log("Response data:", data);

    if (response.ok) {
      res.status(200).json(data);
    } else {
      console.error("Error response from PHP:", data);
      res.status(response.status).json(data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data from PHP server" });
  }
}
