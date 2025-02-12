import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CarHeader from "@/components/Car/CarHeader";
import CarFooter from "@/components/Car/CarFooter";

interface UsedCar {
  id: number;
  car_title: string;
  car_name: string;
  color: string;
  date: string;
  price: number;
  model_year: number;
  milege: number;
  repair: string;
  vehicle_inspection: string;
  img_url: string;
  prefecture_name: string;
  user_name: string;
  maker_name: string;
  mission_name: string;
  body_type_name: string;
  displacements: number;
  price_all: number;
}

type ApiResponse = UsedCar | { error: string };

function isUsedCar(data: ApiResponse): data is UsedCar {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data && typeof data.id === "number" &&
    "car_name" in data && typeof data.car_name === "string" &&
    "car_title" in data && typeof data.car_title === "string" &&
    "color" in data && typeof data.color === "string" &&
    "date" in data && typeof data.date === "string" &&
    "price" in data && typeof data.price === "number" &&
    "model_year" in data && typeof data.model_year === "number" &&
    "milege" in data && typeof data.milege === "number" &&
    "repair" in data && typeof data.repair === "string" &&
    "vehicle_inspection" in data && typeof data.vehicle_inspection === "string" &&
    "img_url" in data && typeof data.img_url === "string" &&
    "prefecture_name" in data && typeof data.prefecture_name === "string" &&
    "user_name" in data && typeof data.user_name === "string" &&
    "maker_name" in data && typeof data.maker_name === "string" &&
    "mission_name" in data && typeof data.mission_name === "string" &&
    "body_type_name" in data && typeof data.body_type_name === "string" &&
    "displacements" in data && typeof data.displacements === "number" &&
    "price_all" in data && typeof data.price_all === "number"
  );
}

export default function UsedCarPage() {
  const [usedCar, setUsedCar] = useState<UsedCar | null>(null);
  // const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { id, endpoint } = router.query;

  useEffect(() => {
    if (typeof endpoint === "string") {
      let url = `/api/used-car?endpoint=${endpoint}`;
      if (typeof id === "string" && !isNaN(Number(id))) {
        url += `&id=${id}`;
      }

      fetch(url)
        .then(async (res) => {
          if (!res.ok) {
            const errData = await res.json();
            throw new Error(
              `HTTP error! status: ${res.status}, message: ${errData.error}`
            );
          }
          return res.json() as Promise<ApiResponse>;
        })
        .then(async (data) => {
          console.log(data);
          if (isUsedCar(data)) {
            setUsedCar(data);

            // 画像データを取得して `blob` に変換
            const imgResponse = await fetch(data.img_url);
            if (!imgResponse.ok) {
              throw new Error(
                `Failed to fetch image: ${imgResponse.statusText}`
              );
            }
          } else {
            throw new Error("Invalid response format");
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setError("データの取得に失敗しました");
          setLoading(false);
        });
    }
  }, [id, endpoint]);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>{error}</div>;
  if (!usedCar) return <div>データが見つかりません</div>;

  return (
    <div className="bg-white text-black ">
    <div className="mx-36 py-30 border-b-2">
            <div className="">
                <CarHeader 
                    src={usedCar.img_url}
                    alt={""}
                    maker={usedCar.maker_name}
                    car_name={usedCar.car_title}
                    color={usedCar.color}
                    money_all={usedCar.price_all / 10000}
                    money={(usedCar.price) / 10000}
                    year={usedCar.model_year}
                    year2={99}
                    mirage={usedCar.milege}
                    syaken={usedCar.vehicle_inspection}
                    repair={usedCar.repair}
                    hosyou={"保証付き"}
                    maintenance={"法定整備付き"}
                    displacement={usedCar.displacements}
                    mission={usedCar.mission_name}
                    body_type={usedCar.body_type_name}
                    />
            </div>
            <div className="bg-custom-color2">
                <CarFooter prefectures={usedCar.prefecture_name} area={"盛岡市"} store={"日産プリンス岩手"} 
                store_url={"https://np-iwate.nissan-dealer.jp/"} number={4.7} reviews={66}/>
            </div>
    </div>
    </div>
  );
}
