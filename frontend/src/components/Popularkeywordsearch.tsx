import React from "react";
import Image from "next/image";

const Popularkeywordsearch = ()=> {
    return(
        <>
            <div className="flex ml-36 py-6">
                <Image
                src="/img/Bodytype.svg"
                alt=""
                width={10}
                height={10}/>
                <p className="font-bold text-sm">人気のキーワードから探す</p>
            </div>

            <div className="pb-20">
            <div className="border border-gray-200 ml-36 py-5 mr-36">
                <div className="">
                    <div className="flex gap-3">
                        <a className="text-xs text-[#2b006b] pl-5 hover:underline cursor-pointer">アイサイト</a>
                        <a className="text-xs text-[#2b006b] border-l border-gray-200 pl-3 hover:underline cursor-pointer">衝突防止</a>
                        <a className="text-xs text-[#2b006b] border-l border-gray-200 pl-3 hover:underline cursor-pointer">PHV</a>
                        <a className="text-xs text-[#2b006b] border-l border-gray-200 pl-3 hover:underline cursor-pointer">EV</a>
                        <a className="text-xs text-[#2b006b] border-l border-gray-200 pl-3 hover:underline cursor-pointer">クリーンディーゼル</a>
                        <a className="text-xs text-[#2b006b] border-l border-gray-200 pl-3 hover:underline cursor-pointer">アラウンドビューモニター</a>
                        <a className="text-xs text-[#2b006b] border-l border-gray-200 pl-3 hover:underline cursor-pointer">自動ブレーキ</a>
                        <a className="text-xs text-[#2b006b] border-l border-gray-200 pl-3 hover:underline cursor-pointer">自動運転</a>
                        <a className="text-xs text-[#2b006b] border-l border-gray-200 pl-3 hover:underline cursor-pointer">未使用車</a>
                        <a className="text-xs text-[#2b006b] border-l border-gray-200 pl-3 hover:underline cursor-pointer">福祉車両</a>
                    </div>
                </div>
                </div>
            </div>
        </>

    );
}

export default Popularkeywordsearch;