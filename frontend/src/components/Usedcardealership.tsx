import React from "react";
import Image from "next/image";

const Usedcardealership = () => {
    return (
        <>
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

export default Usedcardealership;