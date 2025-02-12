const ResultSearch_sort_bar = () => {
    return ( 
        <div className="border-t-4 rounded-sm">
        <div className="w-980 h-14 py-custom-7 text-xs bg-custom-color2 flex justify-start items-center">
            <div className="w-148 pl-3 text-xs">
                <p>元の並び順に戻す</p>
            </div>
            <div className="ml-12 mr-7">
                <p>新着順</p>
                <div className="w-9 flex justify-center">
                    <p className="border-r p-1">新</p>
                    <p className="p-1">古</p>
                </div>
            </div>
            <div className="ml-7 mr-14">
                <p>支払総額</p>
                <div className="w-9 pl-6 flex justify-center">
                    <p className="border-r p-1">安</p>
                    <p className="p-1">高</p>
                </div>
            </div>
            <div className="ml-42 mr-137">
                <p>本体価格</p>
                <div className="w-9 pl-3 flex justify-center">
                    <p className="border-r p-1">安</p>
                    <p className="p-1">高</p>
                </div>
            </div>
            <div className="w-70">
                <p className="text-center ">年式</p>
                <div className="w-9 mx-auto flex justify-center">
                    <p className="border-r p-1">新</p>
                    <p className="p-1">古</p>
                </div>
            </div>
            <div className="w-70">
                <p className="text-center ">走行距離</p>
                <div className="w-9 mx-auto flex justify-center">
                    <p className="border-r p-1">多</p>
                    <p className="p-1">少</p>
                </div>
            </div>
            <div className="w-70">
                <p className="text-center ">排気量</p>
                <div className="w-9 mx-auto flex justify-center">
                    <p className="border-r p-1">多</p>
                    <p className="p-1">少</p>
                </div>
            </div>
            <div className="w-70">
                <p className="text-center ">車検</p>
                <div className="w-9 mx-auto flex justify-center">
                    <p className="border-r p-1">付</p>
                    <p className="p-1">無</p>
                </div>
            </div>
            <div className="w-70">
                <p className="text-center ">修復歴</p>
                <div className="w-9 mx-auto flex justify-center">
                    <p className="border-r p-1">無</p>
                    <p className="p-1">有</p>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default ResultSearch_sort_bar;