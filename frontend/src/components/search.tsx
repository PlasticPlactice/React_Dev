import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';


const Search = () => {
    const router = useRouter();

    const handleSearchClick = () => {
        router.push('/SearchResult?endpoint=used_cars_test.php&car_id=1');
    };
    return (
        <>
            <div className='mx-38 w-960'>
                <div className="flex items-center bg-[url('/img/search.png')] bg-cover h-11 w-[500px] text-white font-sans font-bold">
                    <p className="ml-16 mr-16">中古車を探す</p>
                    <p>掲載台数501,316台 11月12日更新</p>
                </div>
            

                <div className="flex items-center overflow-hidden w-960 text-sm relative font-bold">
                    <button className="w-230 rounded-l-md flex justify-around skew-x-12 bottom-0 origin-bottom-left items-center p-5 border bg-white  flex-grow text-left text-sm text-black cursor-pointer hover:bg-[#FBEED2] hover:text-[#F15A22]">
                        <Image
                            src="/img/search_carname.svg"
                            alt="メーカー車名"
                            width={36}
                            height={36}
                            className='-skew-x-12'
                        />
                        <span className="text-2xl -skew-x-12">メーカー車名</span>
                        <span className='-skew-x-12 pt-2'>を選択する</span>
                        <Image
                            src="/img/ChevronRight.png"
                            alt=">"
                            width={35}
                            height={35}
                            className='-skew-x-12'
                        />
                    </button>
                
                    <button className="w-32 flex justify-around skew-x-12 bottom-0 origin-bottom-left items-center p-5 border bg-white  flex-grow text-left text-sm text-black cursor-pointern hover:bg-[#FBEED2] hover:text-[#F15A22]">
                        <Image
                            src="/img/search_region.svg"
                            alt="地域"
                            width={36}
                            height={36}
                            className='-skew-x-12'
                        />
                        <p className="text-2xl -skew-x-12">地域</p>
                        <p className='-skew-x-12 pt-2'>を選択する</p>
                        <Image
                            src="/img/ChevronRight.png"
                            alt=">"
                            width={35}
                            height={35}
                            className='-skew-x-12'
                        />
                    </button>

                    <button className="mr-24 w-32 flex justify-around skew-x-12 bottom-0 origin-bottom-left items-center p-5 border bg-white flex-grow text-left text-sm text-black cursor-pointer hover:bg-[#FBEED2] hover:text-[#F15A22]">
                        <Image
                            src="/img/search_price.svg"
                            alt="価格"
                            width={36}
                            height={36}
                            className='-skew-x-12'
                        />
                        <p className="text-2xl -skew-x-12">価格</p>
                        <p className="text-sm -skew-x-12 pt-2">を選択する</p>
                        <Image
                            src="/img/ChevronRight.png"
                            alt=">"
                            width={35}
                            height={35}
                            className='-skew-x-12'
                        />
                    </button>
                    <button onClick={handleSearchClick} className=" w-32 absolute top-0 right-0 h-full skew-x-12 origin-top-right px-4 p-6  bg-[#ff9500] text-white text-xl border-none rounded-r-md font-bold cursor-pointer whitespace-nowrap hover:bg-[#E68600]">
                        <p className='text-xl -skew-x-12'>検索する</p>
                    </button>
                    
                </div>
            </div>
        
        </>
    );
};

export default Search;