import React, { FC } from "react";
import Image from "next/image";

type Props = {
    src: string,
    MakerName: string,
    alt: string,
}

const MakeItem: FC<Props> = ({src, MakerName, alt}) => {
    return ( 
        <div className="flex justify-start ">
            <a href="#">
                {/* メーカーのイメージ */}
                <div className="w-24 h-20 p-8 border-gray-100 ">
                    <Image src={src}
                    width={36}
                    height={36}
                    alt={alt}
                    className="text-black"
                />
                </div>
                {/* メーカー名 */}
                <div className="w-24 h-8 py-2 bg-custom-color">
                    <p className="text-black text-custom border-r font-bold text-center">{MakerName}</p>
                </div>
            </a>
        </div>
    );
}
export default MakeItem
