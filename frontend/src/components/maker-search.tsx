import React from "react";
import MakeItem from "./MakeItem";
import MakeItem_all from "./MakeItem-all";

const Maker_search = () => {
    return(
        <ul className="flex justify-start bg-white border-b-2">
            <li className="w-24 h-28">
                {/* 国産中古車 */}
                <MakeItem_all Title={"国産\n中古車"} MakerName={"すべて見る"}/>
            </li>
            <li className="w-24 h-28">
                <MakeItem MakerName={"レクサス"} src={"img/maker/Lexus.svg"} alt={"Lexus"}/>
            </li>
            <li className="w-24 h-28">
                <MakeItem MakerName={"トヨタ"} src={"img/maker/Toyota.svg"} alt={"Toyota"}/>
            </li>
            <li className="w-24 h-28">
                <MakeItem MakerName={"ホンダ"} src={"img/maker/Honda.svg"} alt={"Honda"}/>
            </li>
            <li className="w-24 h-28">
                <MakeItem MakerName={"日産"} src={"img/maker/Nissan.svg"} alt={"Nissan"}/>
            </li>
            <li className="w-24 h-28">
                <MakeItem MakerName={"スズキ"} src={"img/maker/Suzuki.svg"} alt={"Suzuki"}/>
            </li>
            <li className="w-24 h-28">
                <MakeItem MakerName={"ダイハツ"} src={"/img/maker/Daihatsu.png"} alt={"Daihatsu"}/>
            </li>
            <li className="w-24 h-28">
                <MakeItem MakerName={"マツダ"} src={"img/maker/Mazda.svg"} alt={"Mazda"}/>
            </li>
            <li className="w-24 h-28">
                <MakeItem MakerName={"スバル"} src={"img/maker/Subaru.svg"} alt={"Subaru"}/>
            </li>
            <li className="w-24 h-28">
                <MakeItem MakerName={"三菱"} src={"img/maker/Mitsubishi.svg"} alt={"Mitsubishi"}/>
            </li>
        </ul>
    )
}

export default Maker_search;