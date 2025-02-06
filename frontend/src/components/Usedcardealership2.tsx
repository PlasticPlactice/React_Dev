import React from "react";
import Image from "next/image";

const Usedcardealership2 = () => {
    return (
        <>
            <div className="flex ml-36 pt-20">
                <Image
                src="/img/icon_meter (1).svg"
                alt=""
                width={30}
                height={30}/>
                <p className="font-bold text-xl pl-1">中古車販売店を探す</p>
            </div>
            
            <div className="flex ml-36 pt-6 pb-4">
                <Image
                src="/img/Bodytype.svg"
                alt=""
                width={10}
                height={10}/>
                <p className="font-bold text-sm pl-1">都道府県から探す</p>
            </div>
        </>
    );
}

export default Usedcardealership2;