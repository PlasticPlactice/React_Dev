import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("API called with query:", req.query);
  
  const { car_id, endpoint } = req.query;

  if (!endpoint) {
    res.status(400).json({ error: "Endpoint is required" });
    return;
  }

  // 修正: `http://nginx/` → `http://localhost:8080/`
  let url = `http://nginx/${endpoint}`;
  const params = new URLSearchParams();

  if (car_id && !isNaN(Number(car_id))) {
    params.append("car_id", car_id as string);
  }

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  console.log("Fetching data from URL:", url);

  try {
    const response = await fetch(url);
    console.log("Response status:", response.status);
    const data = await response.json();
    console.log("Response data:", data);

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json(data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data from PHP server" });
  }
}
