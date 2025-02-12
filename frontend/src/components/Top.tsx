import React from "react";
import Image from "next/image";
import Search from "./search";

const Top = () => {
    return (
        <>
            <div className="w-1240 overflow-hidden">
                <section className="relative bg-orange-500 min-h-screen">
                    <section className="bg-[#FFF1E5] w-[800px] h-[600px] -skew-x-[40deg] ml-[600px]">
                    </section>
                </section>

                <div>
                        <Image
                        src="/img/top/logo_top-header-revo (1).png"
                        alt=""
                        width={300}
                        height={100}
                        className="absolute top-8 left-[38%]"
                        />

                        <h1 className=" absolute top-11 text-[10px] ml-38 text-[#ffffff]">中古車ならカーセンサー！豊富な中古車情報から中古車検索！</h1>

                        <Image
                        alt=""
                        src="/img/top/mv_appApeal_present_text.png"
                        width={400}
                        height={300}
                        className="absolute top-32 left-32"
                        />

                        <div className="absolute bg-white w-[100px] h-[100px] top-96 left-48">
                            <Image
                            alt=""
                            src="/img/top/mv_appQR.png"
                            width={80}
                            height={80}
                            className="absolute top-[10px] left-[10px]"
                            />
                        </div>

                        <Image
                        alt=""
                        src="/img/top/AppStore.png"
                        width={120}
                        height={100}
                        className="absolute top-[390px] left-[315px]"
                        />

                        <Image
                        alt=""
                        src="/img/top/GooglePlay.png"
                        width={120}
                        height={100}
                        className="absolute top-[440px] left-[315px]"
                        />

                        <Image
                        src="/img/top/mv_appApeal_iphone.png"
                        alt=""
                        width={650}
                        height={600}
                        className="absolute top-[120px] left-[480px]"
                        />

                        <div className="flex absolute top-[40px] left-[990px]">
                            <a className="text-[#003a6b] text-[10px] pt-1 hover:underline hover:cursor-pointer">サイトマップ</a>
                            <p className="text-sm pl-2 pr-2">|</p>
                            <a className="text-[#003a6b] text-[10px] pt-1 hover:cursor-pointer hover:underline">ログイン</a>
                        </div>

                        <div className="absolute top-[70px] left-[800px]">
                        <div className="header-inner">
                            <form className="relative block h-10">
                                <input type="text" placeholder="例：フィット東京" className="w-[320px] h-8 block px-5 rounded-[5px] border text-[20px] leading-[1] placeholder:text-[14px] placeholder:relative placeholder:bottom-[2px]"/>
                                <button className="absolute right-[7px] top-1 text-[25px]"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></button>
                            </form>
                        </div>
                        </div>
                        <div className="absolute w-980 top-[500px] ">
                            <Search/>
                        </div>
                        

                </div>
            </div>
            
        </>

    );
}

export default Top;