import { FC } from "react";
type Props = {
    prefectures : string,
    area : string,
    store: string,
    store_url :string,
    number :number
    reviews :number,
}
const CarFooter: FC<Props> = ({prefectures,area,store,store_url,number,reviews}) => {
    return ( 
        <div className="flex justify-start text-xs h-24 py-3">
            <div className="w-83 h-h-60 px-5 ">
                <p>{prefectures}</p>
                <p>{area}</p>
            </div>
            <div className="w-337 h-h-60 px-5 border-l text-blue-800">
                <p><a href={store_url}>{store}</a></p>
            </div>
            <div className="w-226 h-h-60 px-5 border-l">
                <p>クチコミ評価: {number}点 ({reviews})件</p>
            </div>
            <div className="w-334 border-l">
                <p></p>
            </div>
        </div>
    );
}

export default CarFooter