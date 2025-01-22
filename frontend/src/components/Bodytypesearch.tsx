import React from "react";
import Image from "next/image";

const Bodytypesearch = () => {
    return (
        <>
            <div className="flex ml-36 py-6">
                <Image
                    src="/img/Bodytype.svg"
                    alt=""
                    width={20}
                    height={20}/>
                <p className="font-bold text-sm">ボディタイプから検索</p>
            </div>
            
            <div className="border border-gray-200 ml-36 mr-36 p-3">
            <div className="flex">
                <div className="w-32 h-20  text-center pt-2 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                    <div className="flex justify-center p-1">
                        <Image
                            src="/img/Lightvehicle.png"
                            alt=""
                            width={40}
                            height={50}
                        />
                    </div>
                        <a className="text-xs text-[#2b006b]">軽自動車</a>
                </div>

                <div className="w-32 h-20  text-center pt-2 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                    <div className="flex justify-center p-1">
                        <Image
                            src="/img/compactcar.png"
                            alt=""
                            width={40}
                            height={50}
                        />
                    </div>
                        <a className="text-xs text-[#2b006b]">コンパクトカー</a>
                    </div>

                <div className="w-32 h-20  text-center pt-2 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                    <div className="flex justify-center p-1">
                        <Image
                            src="/img/minivan.png"
                            alt=""
                            width={40}
                            height={50}
                        />
                    </div>
                        <a className="text-xs text-[#2b006b]">ミニバン</a>
                </div>

                    
                <div className="w-32 h-20  text-center pt-2 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                    <div className="flex justify-center p-1">
                        <Image
                            src="/img/stationwagon.png"
                            alt=""
                            width={40}
                            height={50}
                        />
                    </div>
                        <a className="text-xs text-[#2b006b]">ステーションワゴン</a>
                </div>

                    <div className="w-32 h-20  text-center pt-2 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                        <div className="flex justify-center p-1">
                            <Image
                                src="/img/OffroadSUVs.png"
                                alt=""
                                width={40}
                                height={50}
                            />
                        </div>
                            <a className="text-xs text-[#2b006b]">SUV・クロカン</a>
                    </div>

                    <div className="w-32 h-20  text-center pt-2 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                    <div className="flex justify-center p-1">
                        <Image
                            src="/img/sedan.png"
                            alt=""
                            width={40}
                            height={50}
                        />
                    </div>
                    <a className="text-xs text-[#2b006b]">セダン</a>
                </div>

                    <div className="w-32 h-20  text-center pt-2 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                        <div className="flex justify-center p-1">
                            <Image
                                src="/img/camper.png"
                                alt=""
                                width={40}
                                height={50}
                            />
                        </div>
                        <a className="text-xs text-[#2b006b]">キャンピングカー</a>
                    </div>

                    <div className="w-32 h-20  text-center pt-2 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                        <div className="flex justify-center p-1">
                            <Image
                                src="/img/coupe.png"
                                alt=""
                                width={40}
                                height={50}
                            />
                        </div>
                        <a className="text-xs text-[#2b006b]">クーペ</a>
                    </div>   
            </div>

            <div className="flex">
                <div className="w-32 h-20  text-center pt-2 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                    <div className="flex justify-center p-1">
                        <Image
                            src="/img/hybrid.png"
                            alt=""
                            width={40}
                            height={50}
                        />
                    </div>
                    <a className="text-xs text-[#2b006b]">ハイブリッド</a>
                </div>

                <div className="w-32 h-20  text-center pt-2 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                    <div className="flex justify-center p-1">
                        <Image
                            src="/img/hatchback.png"
                            alt=""
                            width={40}
                            height={50}
                        />
                    </div>
                    <a className="text-xs text-[#2b006b]">ハッチバック</a>
                </div>

                <div className="w-32 h-20  text-center pt-2 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                    <div className="flex justify-center p-1">
                        <Image
                            src="/img/convertiblecar.png"
                            alt=""
                            width={40}
                            height={50}
                        />
                    </div>
                    <a className="text-xs text-[#2b006b]">オープンカー</a>
                </div>

                <div className="w-32 h-20  text-center pt-2 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                    <div className="flex justify-center p-1">
                        <Image
                            src="/img/pickuptruck.png"
                            alt=""
                            width={40}
                            height={50}
                        />
                    </div>
                    <a className="text-xs text-[#2b006b]">ピックアップトラック</a>
                </div>

                <div className="w-32 h-20  text-center pt-2 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                    <div className="flex justify-center p-1">
                        <Image
                            src="/img/welfarevehicle.png"
                            alt=""
                            width={40}
                            height={50}
                        />
                    </div>
                    <a className="text-xs text-[#2b006b]">福祉車両</a>
                </div>

                <div className="w-32 h-20  text-center pt-2 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                    <div className="flex justify-center p-1">
                        <Image
                            src="/img/vans.png"
                            alt=""
                            width={40}
                            height={50}
                        />
                    </div>
                    <a className="text-xs text-[#2b006b]">商用車・バン</a>
                </div>

                <div className="w-32 h-20  text-center pt-2 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                    <div className="flex justify-center p-1">
                        <Image
                            src="/img/track.png"
                            alt=""
                            width={40}
                            height={50}
                        />
                    </div>
                    <a className="text-xs text-[#2b006b]">トラック</a>
                </div>

                <div className="w-32 h-20  text-center pt-7 hover:bg-[#FFF2E6] hover:underline cursor-pointer">
                    <a className="text-xs text-[#2b006b]">その他</a>
                </div>
            </div>
        </div>
        </>

    );
};

export default Bodytypesearch;