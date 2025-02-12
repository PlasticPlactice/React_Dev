import Maker_search from "./maker-search"
import Maker_search2 from "./maker-search2"
import Image from "next/image"
import React from "react"

const Maker = () => {
    return(
        <>                    
            <div className="flex ml-36 py-6">
                <Image
                src="/img/icon_meter (1).svg"
                alt=""
                width={30}
                height={30}/>
                <p className="font-bold text-xl">中古車を探す</p>
            </div>
        
            <div className="flex ml-36 py-6 pt-0">
                <Image
                src="/img/Bodytype.svg"
                alt=""
                width={10}
                height={10}/>
                <p className="font-bold text-sm">メーカーから探す</p>
            </div>
        
            <div className="w-custom-size mx-38 border">
                <Maker_search/>
                <Maker_search2/>
            </div>
        </>

    );
}

export default Maker;