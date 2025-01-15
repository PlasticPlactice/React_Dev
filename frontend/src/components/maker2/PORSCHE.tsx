import React from "react";
import Image from "next/image";

const Porsche = () => {
    return (
        <div className="flex justify-start">
            <a href="#">
                {/* メーカーのイメージ */}
                <div className="w-24 h-20 p-8 border-gray-100 ">
                    <Image src="/img/maker/Porsche.svg"
                    width={36}
                    height={36}
                    alt="Porsche"
                    className="text-black"
                    />
                </div>
                {/* メーカー名 */}
                <div className="w-24 h-8  py-2 bg-gray-100">
                    <p className="text-black text-xs text-center">ポルシェ</p>
                </div>
            </a>
        </div>
    )
}

export default Porsche;