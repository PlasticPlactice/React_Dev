import React from "react";

const Kantou = () => {
    return ( 
        <div className="flex py-2">
            <ul className="w-28">
                <li>関東</li>
            </ul>
            <ul className="flex px-2">
                <li className="px-1">東京都</li>
                <li className="px-1">埼玉</li>
                <li className="px-1">千葉</li>
                <li className="px-1">神奈川</li>
                <li className="px-1">茨城</li>
                <li className="px-1">栃木</li>
                <li className="px-1">群馬</li>
            </ul>
        </div>
    );
}
 
export default Kantou;