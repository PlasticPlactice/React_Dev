import React from "react";

const Header = () => {
    return (
        <div className="bg-white text-black text-xs h-9">
            <ul className="flex justify-between px-40 py-2">
                <li className="text-orange-500"><a href="">中古車</a></li>
                <li className="hover:text-orange-500"><a href="">輸入車</a></li>
                <li className="hover:text-orange-500"><a href="">カタログ</a></li>
                <li className="hover:text-orange-500"><a href="">中古車販売店</a></li>
                <li className="hover:text-orange-500"><a href="">保険/ローン/他</a></li>
                <li className="hover:text-orange-500"><a href="">車買取</a></li>
                <li className="hover:text-orange-500"><a href="">お役立ち記事</a></li>
            </ul>
        </div>
    );
};

export default Header;