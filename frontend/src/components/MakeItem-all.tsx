import React, { FC } from "react";

type Props = {
    Title: string
    MakerName: string,
}

const MakeItem_all: FC<Props> = ({Title, MakerName}) => {
    return ( 
        <div className="flex justify-start">
            <a href="#" className="overflow-hidden">
                {/* メーカーのイメージ */}
                <div className="w-24 h-20 px-6 py-5 border-gray-100 bg-stone-400 skew-x-6 bottom-0 origin-bottom-left -translate-x-[4%]">
                    <h1 className="font-bold -skew-x-6 text-white">{Title}</h1>
                </div>
                {/* メーカー名 */}
                <div className="w-24 h-8 px-4 py-2 bg-stone-500 skew-x-6 bottom-0 origin-bottom-left -translate-x-[0.5%]">
                    <p className="text-neutral-400 text-xs text-center -skew-x-6 ">{MakerName}</p>
                </div>
            </a>
        </div>
    );
}
export default MakeItem_all
