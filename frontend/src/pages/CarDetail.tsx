import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Detail_Title from "@/components/CarDetail/Detail_Title";
import Image from "next/image";
import Header from "@/components/Header";
import Dtail_situation from "@/components/CarDetail/Detail_situation";

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

const Detail = () => {
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
        <div className="bg-white text-black">
        <div>
            <Header></Header>
        </div>
        <div className="w-980 mx-auto">
            <Detail_Title title={usedCar.car_name} detail={usedCar.car_title} maker_name={usedCar.maker_name} />
            <div className="flex justify-between">
                {/* トップ写真 */}
                <div className="w-600">
                <img src={usedCar.img_url} alt={""} width={650} height={450} />
                    <p className="text-xs">本体写真</p>
                    <p className="w-600 text-xs">
                        【　双日株式会社が運営　】当店は国内有数の高級輸入車専門店です。愛知県にて運営しております。
                        お客様満足を目指し、安心して高級輸入車にお乗り頂けるようお手伝いいたします。全てアペルタにお任せください。
                    </p>
                </div>
                <div className="w-350">
                    <div className="w-350 h-120 mb-4 flex justify-between ">
                        <div className="w-170 border-t-2 border-font-custom">
                            <p className="text-sm font-bold pt-3">支払総額
                                <span className="text-xs font-normal text-black">（税込）</span>
                            </p>
                            <p className="text-custom2 font-bold text-font-custom">{usedCar.price_all / 10000}<span className="text-xs font-normal text-black">万円</span></p>
                            <p className="text-xs">（諸費用17万円含む）</p>
                        </div>
                        <div className="w-170 border-t-2 border-border">
                            <p className="text-sm font-bold pt-3">車両本体価格
                                <span className="text-xs font-normal">（税込）</span>
                            </p>
                            <p className="text-custom2 font-bold ">{usedCar.price / 10000}<span className="text-xs font-normal">万円</span></p>
                            <div className="pt-4.5 flex justify-end">
                                <Image src={""} alt={""} width={13} height={13}></Image>
                                <p className="pl-1 text-custom">価格見直しメールを受け取る</p>
                            </div>
                        </div>
                    </div>
                    {/* 残価ローンのところ */}
                    <div className="w-max flex justify-start h-14 mb-4">
                        <div className="w-77 bg-font-custom text-white text-xs pt-custom-11 pr-custom-9 pb-2.5 pl-2 rounded-l-sm">
                            <p>残価</p>
                            <p>ローン価格</p>
                        </div>
                        <div className="w-280 pt-3 pb-2.5 px-4 flex justify-start bg-custom-color rounded-r-sm">
                            <div className="w-38 ">
                                <p className="text-xs text-black">月々<span className="text-3xl text-font-custom font-bold pl-1">{usedCar.price_all / 140}</span>円</p>
                            </div>
                            <div className="w-24 flex justify-center items-center ">
                                <Image src={""} alt={""} width={13} height={13}></Image>
                                <p className="text-xs pl-1">詳細を見る</p>
                            </div>
                        </div>
                    </div>
                    {/* 詳細スペックの所 */}
                    <div className="border-t pt-4">
                        <dl className="text-custom">
                            <div className="flex h-8">
                                <dt className="text-custom w-53 mb-2 bg-custom-color text-center py-1">年式</dt>
                                <dd className="py-1 w-108">
                                    <span className="text-base font-bold ml-1">{usedCar.model_year}</span>
                                    <span className="ml-1">({})</span>
                                </dd>
                                <dt className="text-custom w-53 mb-2 bg-custom-color text-center py-1">走行距離</dt>
                                <dd className="py-1 w-134">
                                    <span className="text-base font-bold ml-1">{usedCar.milege / 10000}万km</span>
                                </dd>
                            </div>
                            <div className="flex h-8 mt-1">
                                <dt className="text-custom w-53 mb-2 bg-custom-color text-center py-1">車検</dt>
                                <dd className="py-1 w-108 text-xs">
                                    <span className="ml-1">{usedCar.vehicle_inspection}</span>
                                </dd>
                                <dt className="text-custom w-53 mb-2 bg-custom-color text-center py-1">修復歴</dt>
                                <dd className="py-1 w-134 text-xs">
                                    <span className="ml-1">{usedCar.repair}</span>
                                </dd>
                            </div>
                            <div className="flex h-8 mt-1">
                                <dt className="text-custom w-53 mb-2 bg-custom-color text-center py-1">保証</dt>
                                <dd className="py-1 w-108 text-xs">
                                    <span className="ml-1">保証付き</span>
                                </dd>
                                <dt className="text-custom w-53 mb-2 bg-custom-color text-center py-1">整備</dt>
                                <dd className="py-1 w-134 text-xs">
                                    <span className="ml-1">法定整備付</span>
                                </dd>
                            </div>
                            <div className="flex h-8 mt-1">
                                <dt className="text-custom w-53 mb-2 bg-custom-color text-center py-1">排気量</dt>
                                <dd className="py-1 w-108 text-xs">
                                    <span className="ml-1">{usedCar.displacements}cc</span>
                                </dd>
                                <dt className="text-custom w-53 mb-2 bg-custom-color text-center py-1">ミッション</dt>
                                <dd className="py-1 w-134 text-xs">
                                    <span className="ml-1">{usedCar.mission_name}</span>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    {/* お問い合わせ */}
                    <div className="w-350 h-532 border-2 mt-3">
                        {/* メールでのお問い合わせ */}
                        <div className="flex text-sm h-custom-38 px-4 py-2 bg-custom-color items-center">
                            <Image src={""} alt={""} width={12} height={12}></Image>
                            <p className="font-bold pl-2">メールでのお問い合わせ</p>
                        </div>
                        <div className="p-4">
                            <p className="text-sm text-font-custom font-bold text-center">\ 販売店から最短即日、メールで返答！ /</p>
                            <button className="w-310 h-11 mb-2.5 text-white font-bold bg-font-custom rounded-md flex justify-center items-center">
                                <Image src={""} alt={""} width={24} height={24} className="pr-2"></Image>
                                来店予約する
                            </button>
                            <button className="w-310 h-11 mb-2.5 border border-font-custom text-font-custom font-bold bg-white rounded-md flex justify-center items-center">
                                <Image src={""} alt={""} width={24} height={24} className="pr-2"></Image>
                                在庫確認・見積依頼
                            </button>
                            <div className="flex justify-between mb-2">
                                <button className="w-38 h-11 border border-font-custom text-font-custom font-bold bg-white rounded-md flex justify-center items-center">
                                    車両状態を確認する
                                </button>
                                <button className="w-38 h-11 border border-font-custom text-font-custom font-bold bg-white rounded-md flex justify-center items-center">
                                    その他
                                </button>
                            </div>
                            <p className="text-custom text-center text-font-custom2">※ メールアドレスは販売店に公開されません。</p>
                        </div>
                        {/* お電話での問い合わせ */}
                        <div className="flex text-sm h-custom-38 px-4 py-2 border-t-2 bg-custom-color items-center">
                            <Image src={""} alt={""} width={12} height={12}></Image>
                            <p className="font-bold pl-2">お電話でのお問い合わせ</p>
                        </div>
                        <div className="w-345 h-166 pt-4 px-4 pb-2">
                            <div className="w-310 h-30 mb-2 flex justify-start items-stretch">
                                <p className="w-10 h-7 py-1.5 px-2 mr-2 text-xs bg-custom-color5 text-white">無料</p>
                                <p className="w-260 h-7 text-3xl text-font-custom font-bold">0078-6002-691312</p>
                            </div>
                            <div className="w-310 h-103 flex justify-start">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Dtail_situation car_name={usedCar.car_name} model_year={usedCar.model_year} milege={usedCar.milege} repair={usedCar.repair} vehicle_inspection={usedCar.vehicle_inspection} />
        </div>
    );
}

export default Detail;