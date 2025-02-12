import { FC } from "react";

type Props ={
    car_num:number
}

const Result_bar:FC<Props> = ({car_num}) => {
    return ( 
        <>
        <div className="h-53 flex justify-between items-center">
            {/* 台数結果 */}
            <div className="w-150">
                <p className="text-custom4 font-bold">{car_num}<span className="text-xs pl-1">台</span></p>
            </div>
            <div className="w-72 items-center">
                <div className="flex justify-end pb-3">
                    <p className="text-xs mr-8">スライドショーで見る</p>
                    <p className="text-xs">中古車相場</p>
                </div>
                <div className="w-287 h-8 flex justify-end items-center">
                    {/* ぺジネーション */}
                    <p className="text-xs w-130 pl-custom-5">
                        <span className="text-custom-color6 ml-custom-13">最初</span>
                        <span className="text-sm text-font-custom font-bold ml-custom-13">1</span>
                        <span className="text-sm font-bold ml-custom-13">2</span>
                        <span className="text-xs font-bold ml-custom-13">最後</span>
                    </p>
                    <button className="text-xs w-70 border py-custom-9 px-3 rounded-l-sm">
                        <p className="font-bold text-custom-color6">＜ 前へ</p>
                    </button>
                    <button className="text-xs w-70 border py-custom-9 px-3 rounded-r-sm">
                        <p className="font-bold text-font-custom2">次へ ＞</p>
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Result_bar;