import React from "react";

const World = () => {
    return (
        <div className="flex justify-start">
            <a href="#" className="">
                {/* メーカーのイメージ */}
                <div className="text-white font-bold text-sm text-left bg-zinc-400 py-6 px-4 w-20 h-20  border-gray-100 ">
                    <p>輸入<br />中古車</p>
                </div>
                {/* メーカー名 */}
                <div className="w-20 h-8 px-3 py-2 bg-zinc-500">
                    <p className="text-gray-400 text-xs text-center">全て見る</p>
                </div>
            </a>
        </div>
    )
}

export default World;