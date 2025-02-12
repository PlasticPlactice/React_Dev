import React from "react";
import Image from "next/image";

const History = () => {
    return (
        <>
        <div className="flex justify-center bg-[#f5f4f0] p-20">
            <div className="bg-white w-80 h-48 p-5 border-r">
                <div className="flex">
                    <Image
                        src="/img/history.svg"
                        alt=""
                        width={20}
                        height={20}/>
                    <p className="font-bold">お気に入り</p>
                </div>
                <div className="text-xs px-12 py-9">
                    <p>最近お気に入りに入れた中古車の</p>
                    <p className="text-center">履歴が見られます。</p>
                </div>
            </div>

            <div className="bg-white w-80 h-48 p-5 border-r">
                <div className="flex">
                    <Image
                        src="/img/history.svg"
                        alt=""
                        width={20}
                        height={20}/>
                    <p className="font-bold">閲覧履歴</p>
                </div>
                <div className="text-xs px-12 py-9">
                    <p>最近チェックした中古車の</p>
                    <p className="text-center">履歴が見られます。</p>
                </div>
            </div>

            <div className="bg-white w-80 h-48 p-5">
                <div className="flex">
                    <Image
                        src="/img/history.svg"
                        alt=""
                        width={20}
                        height={20}/>
                    <p className="font-bold">検索履歴</p>
                    <div className="inline-flex items-center cursor-pointer text-xs text-black ml-28" >
                    <span className="text-orange-500 font-bold mr-1">▶</span>
                    <span className="hover:underline">すべて見る</span>
                </div>
                </div>
                
                <a className="text-sm font-bold text-[#003a6b] bg-transparent hover:underline">軽自動車</a><br></br>
                <a className="text-xs bg-transparent underline hover:no-underline">この条件で新着物件を探す</a><br></br>
                <a className="text-sm font-bold text-[#003a6b] hover:underline">ピックアップトラック</a><br></br>
                <a className="text-xs bg-transparent underline hover:no-underline">この条件で新着物件を探す</a>
            </div>
        </div>
        </>
    );
};
export default History;
