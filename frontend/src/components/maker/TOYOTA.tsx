import React from "react";
import Image from "next/image";

const Toyota = () => {
    return (
        <div className="flex justify-start">
            <a href="#">
                {/* メーカーのイメージ */}
                <div className="w-24 h-20 p-8 border-gray-100 ">
                    <Image src="/img/maker/Toyota.svg"
                    width={36}
                    height={36}
                    alt="Toyota"
                    className="text-black"
                    />
                </div>
                {/* メーカー名 */}
                <div className="w-24 h-8 px-6 py-2 bg-gray-100">
                    <p className="text-black text-xs text-center">トヨタ</p>
                </div>
            </a>
        </div>
    )
}

export default Toyota;