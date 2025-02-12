import { useEffect, useState } from "react";
import Image from "next/image";

export default function MinioImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `/api/get-image?bucket=images&fileName=U00047567457_002L.jpg`
        );
        const data = await response.json();
        if (data.url) {
          setImageUrl(data.url);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      <h1>MinIO Image</h1>
      {imageUrl ? (
        <Image src={imageUrl} alt="MinIO Image" width={400} height={300} />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}
