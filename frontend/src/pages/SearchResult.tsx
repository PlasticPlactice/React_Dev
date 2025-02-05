import CarFooter from "@/components/Car/CarFooter";
import CarHeader from "@/components/Car/CarHeader";

const SearchResult = () => {
    return ( 
        <>
        <div className="bg-white text-black ">
            <div className=" mx-36">
                <a href="#">
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
                            syaken={2026}
                            repair={"なし"}
                            hosyou={"保証付き"}
                            maintenance={"法定整備付き"}
                            displacement={2700}
                            mission={"フロアMTモード付6AT"}
                            />
                    </div>
                    <div className="bg-custom-color2">
                        <CarFooter prefectures={"岩手県"} area={"盛岡市"} store={"日産プリンス岩手"} 
                        store_url={"https://np-iwate.nissan-dealer.jp/"} number={4.7} reviews={66}/>
                    </div>
                </a>
            </div>
        </div>
        </>
    );
}

export default SearchResult;