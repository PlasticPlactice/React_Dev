import React from "react"
import MakeItem from "./MakeItem"
import MakeItem_all from "./MakeItem-all"

const Maker_search2 = () => {
    return(
        <ul className="flex justify-start bg-white">
            <li className="w-24 h-28">
                <MakeItem_all Title={"輸入\n中古車"} MakerName={"すべて見る"}/>
            </li>
            <li className="w-24 h-28">
            <MakeItem MakerName={"メルセデス・ベンツ"} src={"img/maker/Benz.svg"} alt={"Toyota"}/>
            </li>
            <li className="w-24 h-28">
            <MakeItem MakerName={"BMW"} src={"img/maker/Bmw.svg"} alt={"Toyota"}/>
            </li>
            <li className="w-24 h-28">
            <MakeItem MakerName={"フォルクスワーゲン"} src={"/img/maker/Volkswagen.png"} alt={"Toyota"}/>    
            </li>
            <li className="w-24 h-28">
            <MakeItem MakerName={"アウディ"} src={"img/maker/Audi.svg"} alt={"Toyota"}/>
            </li>
            <li className="w-24 h-28">
            <MakeItem MakerName={"ミニ"} src={"img/maker/Mini.svg"} alt={"Toyota"}/>
            </li>
            <li className="w-24 h-28">
            <MakeItem MakerName={"ポルシェ"} src={"img/maker/Porsche.svg"} alt={"Toyota"}/>
            </li>
            <li className="w-24 h-28">
            <MakeItem MakerName={"ボルボ"} src={"img/maker/Volvo.svg"} alt={"Toyota"}/>
            </li>
            <li className="w-24 h-28">
            <MakeItem MakerName={"プジョー"} src={"img/maker/Peugeot.svg"} alt={"Toyota"}/>
            </li>
            <li className="w-24 h-28">
            <MakeItem MakerName={"ランド\nローバー"} src={"img/maker/Landrover.svg"} alt={"Toyota"}/>
            </li>
        </ul>
    )
}

export default Maker_search2