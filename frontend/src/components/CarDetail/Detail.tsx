import { FC } from "react";
import Detail_Title from "./Detail_Title";
import Image from "next/image";
import Header from "../Header";
import Dtail_situation from "./Detail_situation";

type Props = {
    price_all : number,
    price : number,
    detail : string,
}


const Detail:FC<Props> = ({}) => {
    return (
        <>
        <div>
            <Header></Header>
        </div>
        <div className="w-980 mx-auto">
            <Detail_Title title={"フェラーリ 458イタリア"} detail={"F1 DCT 正規D車カーボンLED赤黒レザーOP20インチ（レッド）"} />
            <div className="flex justify-between">
                {/* トップ写真 */}
                <div className="w-600">
                    <Image className="mb-2" src={""} alt={""} width={600} height={450}></Image>
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
                            <p className="text-custom2 font-bold text-font-custom">3447<span className="text-xs font-normal text-black">万円</span></p>
                            <p className="text-xs">（諸費用17万円含む）</p>
                        </div>
                        <div className="w-170 border-t-2 border-border">
                            <p className="text-sm font-bold pt-3">車両本体価格
                                <span className="text-xs font-normal">（税込）</span>
                            </p>
                            <p className="text-custom2 font-bold ">4500<span className="text-xs font-normal">万円</span></p>
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
                                <p className="text-xs text-black">月々<span className="text-3xl text-font-custom font-bold pl-1">106,300</span>円</p>
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
                                    <span className="text-base font-bold ml-1">{}</span>
                                    <span className="ml-1">({})</span>
                                </dd>
                                <dt className="text-custom w-53 mb-2 bg-custom-color text-center py-1">走行距離</dt>
                                <dd className="py-1 w-134">
                                    <span className="text-base font-bold ml-1">{}万km</span>
                                </dd>
                            </div>
                            <div className="flex h-8 mt-1">
                                <dt className="text-custom w-53 mb-2 bg-custom-color text-center py-1">車検</dt>
                                <dd className="py-1 w-108 text-xs">
                                    <span className="ml-1">{}</span>
                                </dd>
                                <dt className="text-custom w-53 mb-2 bg-custom-color text-center py-1">修復歴</dt>
                                <dd className="py-1 w-134 text-xs">
                                    <span className="ml-1">{}</span>
                                </dd>
                            </div>
                            <div className="flex h-8 mt-1">
                                <dt className="text-custom w-53 mb-2 bg-custom-color text-center py-1">保証</dt>
                                <dd className="py-1 w-108 text-xs">
                                    <span className="ml-1">{}</span>
                                </dd>
                                <dt className="text-custom w-53 mb-2 bg-custom-color text-center py-1">整備</dt>
                                <dd className="py-1 w-134 text-xs">
                                    <span className="ml-1">{}</span>
                                </dd>
                            </div>
                            <div className="flex h-8 mt-1">
                                <dt className="text-custom w-53 mb-2 bg-custom-color text-center py-1">排気量</dt>
                                <dd className="py-1 w-108 text-xs">
                                    <span className="ml-1">{}cc</span>
                                </dd>
                                <dt className="text-custom w-53 mb-2 bg-custom-color text-center py-1">ミッション</dt>
                                <dd className="py-1 w-134 text-xs">
                                    <span className="ml-1">{}</span>
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
        <Dtail_situation/>
        </>
    );
}

export default Detail;