import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CarFooter from "@/components/Car/CarFooter";
import CarHeader from "@/components/Car/CarHeader";
import ResultSearch_sort_bar from "@/components/ResultSearch_sort_bar";
import Result_bar from "@/components/Result_bar";
import Header from "@/components/Header";

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

type ApiResponse = UsedCar[] | { error: string };

function isUsedCarArray(data: ApiResponse): data is UsedCar[] {
  return Array.isArray(data) && data.every(item => (
    typeof item === "object" && item !== null &&
    "id" in item && typeof item.id === "number" &&
    "car_name" in item && typeof item.car_name === "string" &&
    "car_title" in item && typeof item.car_title === "string" &&
    "color" in item && typeof item.color === "string" &&
    "date" in item && typeof item.date === "string" &&
    "price" in item && typeof item.price === "number" &&
    "model_year" in item && typeof item.model_year === "number" &&
    "milege" in item && typeof item.milege === "number" &&
    "repair" in item && typeof item.repair === "string" &&
    "vehicle_inspection" in item && typeof item.vehicle_inspection === "string" &&
    "img_url" in item && typeof item.img_url === "string" &&
    "prefecture_name" in item && typeof item.prefecture_name === "string" &&
    "user_name" in item && typeof item.user_name === "string" &&
    "maker_name" in item && typeof item.maker_name === "string" &&
    "mission_name" in item && typeof item.mission_name === "string" &&
    "body_type_name" in item && typeof item.body_type_name === "string" &&
    "displacements" in item && typeof item.displacements === "number" &&
    "price_all" in item && typeof item.price_all === "number"
  ));
}

const SearchResult = () => {
  const [usedCars, setUsedCars] = useState<UsedCar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { car_id, endpoint } = router.query;

  useEffect(() => {
    if (typeof endpoint === "string") {
      let url = `/api/used-car?endpoint=${endpoint}`;
      if (typeof car_id === "string" && !isNaN(Number(car_id))) {
        url += `&car_id=${car_id}`;
      }

      console.log("Fetching data from URL:", url);

      fetch(url)
      .then(async (res) => {
        console.log("Response status:", res.status);
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
            if (isUsedCarArray(data)) {
                setUsedCars(data);
                console.log(usedCars);
            } else {
                throw new Error("Invalid response format");
            }
            setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setError("データが見つかりません");
          setLoading(false);
        });
    }
  }, [car_id, endpoint]);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>{error}</div>;
  if (usedCars.length === 0) return <div>データが見つかりません</div>;

  return (
    <>
      <div className="bg-white text-black ">
        <Header />
        <div className="mx-36 mb-2.5 pt-11 w-980">
          {/* ソートバーの上のところ */}
          <Result_bar car_num={usedCars.length} />
        </div>
        <div className="mx-36 w-980">
          {/* ソートバー */}
          <ResultSearch_sort_bar />
        </div>
        <div className="mx-36 py-30 border-b-2">
          {usedCars.map((usedCar) => (
            <div key={usedCar.id} className="mb-10">
              <CarHeader
                src={usedCar.img_url}
                alt={"あ"}
                maker={usedCar.maker_name}
                car_name={usedCar.car_title}
                color={usedCar.color}
                money_all={usedCar.price_all / 10000}
                money={usedCar.price / 10000}
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
              <div className="bg-custom-color2">
                <CarFooter
                  prefectures={usedCar.prefecture_name}
                  area={"盛岡市"}
                  store={"日産プリンス岩手"}
                  store_url={"https://np-iwate.nissan-dealer.jp/"}
                  number={4.7}
                  reviews={66}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResult;