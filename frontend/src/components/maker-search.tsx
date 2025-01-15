import React from "react";
import Japan from "./maker/JAPAN";
import Lexus from "./maker/LEXUS";
import Toyota from "./maker/TOYOTA";
import Honda from "./maker/HONDA";
import Nissan from "./maker/NISSAN";
import Suzuki from "./maker/SUZUKI";
import Daihatsu from "./maker/DAIHATSU";
import Subaru from "./maker/SUBARU";
import Mitsubishi from "./maker/MITSUBISHI";
import Mazda from "./maker/MAZDA";

const Maker_search = () => {
    return(
        <ul className="flex justify-start bg-slate-50 border-b-4">
            <li className="w-20 h-28">
                <Japan></Japan>
            </li>
            <li className="w-24 h-28">
                <Lexus></Lexus>
            </li>
            <li className="w-24 h-28">
                <Toyota></Toyota>
            </li>
            <li className="w-24 h-28">
                <Honda></Honda>
            </li>
            <li className="w-24 h-28">
                <Nissan></Nissan>
            </li>
            <li className="w-24 h-28">
                <Suzuki></Suzuki>
            </li>
            <li className="w-24 h-28">
                <Daihatsu></Daihatsu>
            </li>
            <li className="w-24 h-28">
                <Mazda></Mazda>
            </li>
            <li className="w-24 h-28">
                <Subaru></Subaru>
            </li>
            <li className="w-24 h-28">
                <Mitsubishi></Mitsubishi>
            </li>
        </ul>
    )
}

export default Maker_search;