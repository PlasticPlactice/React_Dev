import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "minio";

const minioClient = new Client({
  endPoint: "host.docker.internal", // MinIO サーバーのエンドポイント
  port: 9000, // MinIO のポート
  useSSL: false, // HTTPS を使う場合は true
  accessKey: "morijyobi", // MinIO のアクセスキー
  secretKey: "morijyobi123", // MinIO のシークレットキー
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { bucket, fileName } = req.query;

  if (!bucket || !fileName) {
    return res.status(400).json({ error: "Bucket and fileName are required" });
  }

  try {
    // 画像の署名付き URL を取得（有効期限: 1時間）
    const url = await minioClient.presignedUrl(
      "GET",
      bucket as string,
      fileName as string,
      60 * 60
    );

    res.status(200).json({ url });
  } catch (error) {
    console.error("Error generating URL:", error);
    res.status(500).json({ error: "Failed to generate URL" });
  }
}
