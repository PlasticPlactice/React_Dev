import React from "react";
import Image from "next/image";

const Honda = () => {
    return (
        <div className="flex justify-start">
            <a href="#">
                {/* メーカーのイメージ */}
                <div className="w-24 h-20 p-8 border-gray-100 ">
                    <Image src="/img/maker/Honda.svg"
                    width={36}
                    height={36}
                    alt="Honda"
                    className="text-black"
                    />
                </div>
                {/* メーカー名 */}
                <div className="w-24 h-8 px-6 py-2 bg-gray-100">
                    <p className="text-black text-xs text-center">ホンダ</p>
                </div>
            </a>
        </div>
    )
}

export default Honda;