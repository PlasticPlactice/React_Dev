import CarFooter from "@/components/Car/CarFooter";
import CarHeader from "@/components/Car/CarHeader";
import ResultSearch_sort_bar from "@/components/ResultSearch_sort_bar";
import Result_bar from "@/components/Result_bar";
import Header from "@/components/Header";

const SearchResult = () => {
    return ( 
        <>
        <div className="bg-white text-black ">
            <Header/>
            <div className="mx-36 mb-2.5 pt-11 w-980">
                {/* ソートバーの上のところ */}
                <Result_bar car_num={1} />
            </div>
            <div className="mx-36 w-980">
                {/* ソートバー */}
                <ResultSearch_sort_bar/>
            </div>
            <div className="mx-36 py-30 border-b-2">
                    <div className="">
                        <CarHeader 
                            src={"img/maker/Nissan.svg"} 
                            alt={"日産"}
                            maker={"日産"} 
                            car_name={"ノート 1.2 X FOUR 4WD ナビ アラウンドビュー"}
                            money_all={482.2} 
                            money={450}
                            year={2021}
                            year2={99}
                            mirage={2.2}
                            syaken={"2026"}
                            repair={"なし"}
                            hosyou={"保証付き"}
                            maintenance={"法定整備付き"}
                            displacement={2700}
                            mission={"フロアMTモード付6AT"}
                            body_type={"ハッチバック"}
                            color={"ホワイト"}
                            />
                    </div>
                    <div className="bg-custom-color2">
                        <CarFooter prefectures={"岩手県"} area={"盛岡市"} store={"日産プリンス岩手"} 
                        store_url={"https://np-iwate.nissan-dealer.jp/"} number={4.7} reviews={66}/>
                    </div>
            </div>
            </div>
        </>
    );
}

export default SearchResult;