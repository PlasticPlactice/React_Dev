import React from 'react';
import Image from 'next/image';


const Search = () => {
    return (
        <>
            <div className="p-32">
                <div className="flex items-center bg-[url('/img/search.png')] bg-cover h-11 w-3/6 text-white font-sans font-bold">
                    <p className="ml-16 mr-16">中古車を探す</p>
                    <p>掲載台数501,316台 11月12日更新</p>
                </div>

            <div className="flex items-center  w-full border border-gray-200 text-sm">
                <button className="flex justify-around items-center p-4 border bg-white rounded-md flex-grow text-left text-sm text-black cursor-pointer hover:bg-[#FBEED2] hover:text-[#F15A22]">
                    <Image
                        src="/img/search_carname.svg"
                        alt="メーカー車名"
                        width={36}
                        height={36}
                    />
                    <span className="text-2xl">メーカー車名</span>
                    <span>を選択する</span>
                    <Image
                        src="/img/ChevronRight.png"
                        alt=">"
                        width={35}
                        height={35}
                    />
                </button>
            
                <button className="flex justify-around items-center p-4 border bg-white rounded-md flex-grow text-left text-sm text-black cursor-pointern hover:bg-[#FBEED2] hover:text-[#F15A22]">
                    <Image
                        src="/img/search_region.svg"
                        alt="地域"
                        width={36}
                        height={36}
                    />
                    <p className="text-2xl">地域</p>
                    <p>を選択する</p>
                    <Image
                        src="/img/ChevronRight.png"
                        alt=">"
                        width={35}
                        height={35}
                    />
                </button>

                <button className="flex justify-around items-center p-4 border bg-white rounded-md flex-grow text-left text-sm text-black cursor-pointer hover:bg-[#FBEED2] hover:text-[#F15A22]">
                    <Image
                        src="/img/search_price.svg"
                        alt="価格"
                        width={36}
                        height={36}
                    />
                    <p className="text-2xl">価格</p>
                    <p className="text-sm">を選択する</p>
                    <Image
                        src="/img/ChevronRight.png"
                        alt=">"
                        width={35}
                        height={35}
                    />
                </button>
                <button className="px-4 p-6 bg-orange-500 text-white text-xl border-none rounded-md font-bold cursor-pointer whitespace-nowrap hover:bg-[#E68600]">
                    検索する
                </button>
                
            </div>
        </div>
        
        </>
    );
};

export default Search;