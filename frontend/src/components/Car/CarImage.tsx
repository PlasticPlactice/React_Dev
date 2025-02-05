import Image from "next/image";
import { FC } from "react";

type Props = {
    src: string,
    alt: string,
}

const CarImage: FC<Props> = ({src, alt}) => {
    return (
        <div>
            {/* 車両のメイン画像 */}
            <Image
                src={src}
                alt={alt}
                width={40}
                height={40}
                className=""
            />
            <div className="flex">
                {/* 下の部分にある詳細画像みたいなもの */}
                <Image
                    src={src}
                    alt={alt}
                    width={40}
                    height={40}
                    className=""
                />
                <Image
                    src={src}
                    alt={alt}
                    width={40}
                    height={40}
                    className=""
                />
                <Image
                    src={src}
                    alt={alt}
                    width={40}
                    height={40}
                    className=""
                />
            </div>
        </div>
    );
}
 
export default CarImage;