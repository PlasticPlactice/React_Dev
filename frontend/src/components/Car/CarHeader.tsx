import { FC } from "react";
import Image from "next/image";

type Props = {
    src : string,
    alt : string,
    maker : string,
    car_name : string,
    money_all : number,
    money : number,
    year : number,
    year2 : number,
    mirage : number,
    syaken : string,
    repair : string,
    hosyou : string,
    maintenance : string,
    displacement : number,
    mission : string,
    body_type : string,
    color : string
}
const CarHeader: FC<Props> = ({src, alt, maker, car_name, money_all, money, 
        year,year2, mirage, syaken, repair, hosyou, maintenance, displacement, mission, body_type, color}) => {

    const mirageDisplay = mirage < 1000 ? `${mirage}km` : `${mirage / 10000}万km`;

    return ( 
        <div className="flex justify-start">
            <div className="w-264 py-6 pr-5">
                {/* <Image src={src} alt={alt} width={240} height={180} /> */}
                <img src={src} alt={alt} width={240} height={180} />
                <div className="flex justify-around text-xs">
                    <p>{body_type}</p>
                    <p>{color}</p>
                </div>
                
            </div>
            <div className="w-696">
                <p className="text-xs">{maker}</p>
                <h3 className="text-xl font-bold">{car_name}</h3>
                <div className="flex justify-start text-xs mt-2">
                    <div className="w-1/2 flex justify-start">
                        <div className="w-150 h-74 border-t-4 border-orange-500">
                            <p className="pt-2 mb-2 font-bold">支払総額</p>
                            <p><span className="text-4xl font-bold text-font-custom">{money_all}</span><span className="font-bold">万円</span></p>
                        </div>
                        <div className="w-1/2 border-t-4 ml-2">
                            <p className="pt-2 mb-2 font-bold">本体価格</p>
                            <p><span className="text-4xl">{money}</span><span className="font-bold">万円</span></p>
                        </div>
                    </div>
                    <div className="w-1/2 text-xs ml-6">
                        <div className="w-348">
                            <dl className="text-custom">
                                <div className="flex h-30">
                                    <dt className="w-53 bg-custom-color text-center py-2">年式</dt>
                                    <dd className="py-1 w-108">
                                        <span className="text-base font-bold ml-1">{year}</span>
                                        <span className="ml-1">({year2})</span>
                                    </dd>
                                    <dt className="w-53 bg-custom-color text-center py-2">走行距離</dt>
                                    <dd className="py-1 w-134">
                                        <span className="text-base font-bold ml-1">{mirageDisplay}</span>
                                    </dd>
                                </div>
                                <div className="flex h-5 mt-1">
                                    <dt className="w-53 h-5 py-0.5 bg-custom-color text-center">車検</dt>
                                    <dd className="py-1 w-108 text-xs">
                                        <span className="ml-1">{syaken}</span>
                                    </dd>
                                    <dt className="w-53 h-5 py-0.5 bg-custom-color text-center">修復歴</dt>
                                    <dd className="py-1 w-134 text-xs">
                                        <span className="ml-1">{repair}</span>
                                    </dd>
                                </div>
                                <div className="flex h-5 mt-1">
                                    <dt className="w-53 h-5 py-0.5 bg-custom-color text-center">保証</dt>
                                    <dd className="py-1 w-108 text-xs">
                                        <span className="ml-1">{hosyou}</span>
                                    </dd>
                                    <dt className="w-53 h-5 py-0.5 bg-custom-color text-center">整備</dt>
                                    <dd className="py-1 w-134 text-xs">
                                        <span className="ml-1">{maintenance}</span>
                                    </dd>
                                </div>
                                <div className="flex h-5 mt-1">
                                    <dt className="w-53 h-5 py-0.5 bg-custom-color text-center">排気量</dt>
                                    <dd className="py-1 w-108 text-xs">
                                        <span className="ml-1">{displacement}cc</span>
                                    </dd>
                                    <dt className="w-53 h-5 py-0.5 bg-custom-color text-center">ミッション</dt>
                                    <dd className="py-1 w-134 text-xs">
                                        <span className="ml-1">{mission}</span>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        {/* ボタン */}
                        <div className="flex justify-start pt-3">
                            <button className="flex justify-center items-center font-bold border rounded-md w-32 h-12">
                                <Image src={"img/icon_favorite.svg"} alt="☆" width={15} height={15}></Image>
                                <p>お気に入り追加</p>
                            </button>
                            <button className="flex justify-center w-52 ml-2 ">
                                <p className="w-7 rounded-l-md [writing-mode:vertical-rl] px-1 py-3 bg-custom-color3 text-white font-bold">無料</p>
                                <p className="w-52 h-12 py-3 rounded-r-md bg-custom-color4 text-base font-bold text-white">在庫確認・見積依頼</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarHeader