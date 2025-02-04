import React from "react";
import Image from "next/image";

const Overallpopularityranking = () => {
    return (
        <>
        <div className="bg-[#f5f4f0] pb-7">
            <div className="flex ml-36 py-6 pt-0">
                <Image
                src="/img/icon_meter (1).svg"
                alt=""
                width={30}
                height={30}/>
                <p className="font-bold text-xl">人気中古車ランキング</p>
            </div>

            <div className="flex ml-36 py-6 pt-0">
                <Image
                src="/img/Bodytype.svg"
                alt=""
                width={20}
                height={20}/>
                <p className="font-bold text-sm">総合人気中古車両ランキング</p>
            </div>

            <div className="flex">
                <div className="bg-[#ffffff] w-80 h-60 ml-36 border hover:underline">
                    <div className="flex">
                        <Image
                        src="/img/Overallpopularityranking/icon_ranking-1.svg"
                        alt=""
                        width={40}
                        height={40}
                        className="pb-32 pl-2"
                        />
                        <Image
                        src="/img/Overallpopularityranking/HO_S094_F003_M001_1.jpg"
                        alt=""
                        width={200}
                        height={200}
                        className="pl-4 pt-7 pb-5"
                        />
                    </div>
                    <a className="pl-4 text-[#003a6b] text-xs">ホンダ</a>
                    <p className="font-bold pl-4 text-[#003a6b]">N-BOX</p>
                </div>

                <div className="bg-[#ffffff] w-80 h-60 border hover:underline">
                    <div className="flex">
                        <Image
                        src="/img/Overallpopularityranking/icon_ranking-2.svg"
                        alt=""
                        width={40}
                        height={40}
                        className="pb-32 pl-2"
                        />
                        <Image
                        src="/img/Overallpopularityranking/TO_S122_F005_M001_1.jpg"
                        alt=""
                        width={200}
                        height={200}
                        className="pl-4 pt-7 pb-5"
                        />
                    </div>
                    <a className="pl-4 text-[#003a6b] text-xs">トヨタ</a>
                    <p className="font-bold pl-4 text-[#003a6b]">プリウス</p>
                </div>  

                <div className="bg-[#ffffff] w-80 h-60 border hover:underline">
                    <div className="flex">
                        <Image
                        src="/img/Overallpopularityranking/icon_ranking-3.svg"
                        alt=""
                        width={40}
                        height={40}
                        className="pb-32 pl-2"
                        />
                        <Image
                        src="/img/Overallpopularityranking/DA_S006_F004_M001_1.jpg"
                        alt=""
                        width={200}
                        height={200}
                        className="pl-4 pt-7 pb-5"
                        />
                    </div>
                    <a className="pl-4 text-[#003a6b] text-xs">ダイハツ</a>
                    <p className="font-bold pl-4 text-[#003a6b]">タント</p>
                </div>
            </div>

            <div className="flex ml-36">
                <div className="bg-[#ffffff] w-60 h-52 border hover:underline">
                    <div className="flex">
                        <Image
                        src="/img/Overallpopularityranking/icon_ranking-4.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="pb-28 pl-2"
                        />
                        <Image
                        src="/img/Overallpopularityranking/TO_S009_F004_M001_1.jpg"
                        alt=""
                        width={150}
                        height={100}
                        className="pl-4 pt-7 pb-5"
                        />
                    </div>
                        <a className="pl-4 text-[#003a6b] text-xs">トヨタ</a>
                        <p className="font-bold pl-4 text-[#003a6b]">アルファード</p>
                </div>

                <div className="bg-[#ffffff] w-60 h-52 border hover:underline">
                    <div className="flex">
                        <Image
                        src="/img/Overallpopularityranking/icon_ranking-5.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="pb-28 pl-2"
                        />
                        <Image
                        src="/img/Overallpopularityranking/NI_S012_F006_M001_1.jpg"
                        alt=""
                        width={150}
                        height={100}
                        className="pl-4 pt-7 pb-5"
                        />
                    </div>
                        <a className="pl-4 text-[#003a6b] text-xs">日産</a>
                        <p className="font-bold pl-4">セレナ</p>
                </div>

                <div className="bg-[#ffffff] w-60 h-52 border hover:underline">
                        <div className="flex">
                            <Image
                            src="/img/Overallpopularityranking/icon_ranking-6.svg"
                            alt=""
                            width={30}
                            height={30}
                            className="pb-28 pl-2"
                            />
                            <Image
                            src="/img/Overallpopularityranking/TO_S185_F002_M001_1.jpg"
                            alt=""
                            width={150}
                            height={100}
                            className="pl-4 pt-7 pb-5"
                            />
                        </div>
                            <a className="pl-4 text-[#003a6b] text-xs">トヨタ</a>
                            <p className="font-bold pl-4 text-[#003a6b]">ハイエースバン</p>
                    </div>

                    <div className="bg-[#ffffff] w-60 h-52 border hover:underline">
                        <div className="flex">
                            <Image
                            src="/img/Overallpopularityranking/icon_ranking-7.svg"
                            alt=""
                            width={30}
                            height={30}
                            className="pb-28 pl-2"
                            />
                            <Image
                            src="/img/Overallpopularityranking/TO_S077_F003_M001_1.jpg"
                            alt=""
                            width={150}
                            height={100}
                            className="pl-4 pt-7 pb-5"
                            />
                        </div>
                            <a className="pl-4 text-[#003a6b] text-xs">トヨタ</a>
                            <p className="font-bold pl-4 text-[#003a6b]">シエンタ</p>
                    </div>
            </div>

            <div className="text-right pt-3 mr-40">
                <div className="inline-flex cursor-pointer text-xs text-black">
                    <span className="text-orange-500 font-bold mr-1">▶</span>
                    <span className="hover:underline">人気中古車ランキングをもっと見る</span>
                </div>
            </div>

        </div>
        
                
        </>
    );
}

export default Overallpopularityranking;