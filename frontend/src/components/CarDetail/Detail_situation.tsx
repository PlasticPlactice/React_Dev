import React from "react";
import Image from "next/image";

interface Props {
    car_name: string;
    model_year: number;
    milege: number;
    repair: string;
    vehicle_inspection: string;
}

const Dtail_situation: React.FC<Props> = ({ car_name, model_year, milege, repair, vehicle_inspection }) => {
    return(
        <>
        <div className="pb-11 pt-10">
            <div className="pl-32 pb-10">
                <div className="w-[730px] h-[3px] bg-[#d6d4d0] rounded-t-sm"></div>
                <ul className="flex  bg-[#f5f4f0] w-[730px] h-[40px] rounded-b-sm">
                    <li className="flex pt-2 pl-4">
                        <a className="text-[12px] text-[#333] hover:cursor-pointer hover:underline pt-1">状態</a>
                        <p className="text-[#ff6010]">▼</p>
                    </li>
                    <li className="flex pl-2 pt-2">
                        <a className="text-[12px] text-[#333] hover:cursor-pointer hover:underline pt-1">車両品質評価詳細情報</a>
                        <p className="text-[#ff6010]">▼</p>
                    </li>
                    <li className="flex pl-2 pt-2">
                        <a className="text-[12px] text-[#333] hover:cursor-pointer hover:underline pt-1">基本スペック</a>
                        <p className="text-[#ff6010]">▼</p>
                    </li>
                    <li className="flex pl-2 pt-2">
                        <a className="text-[12px] text-[#333] hover:cursor-pointer hover:underline pt-1">装備仕様</a>
                        <p className="text-[#ff6010]">▼</p>
                    </li>
                    <li className="flex pl-2 pt-2">
                        <a className="text-[12px] text-[#333] hover:cursor-pointer hover:underline pt-1">購入プラン内容</a>
                        <p className="text-[#ff6010]">▼</p>
                    </li>
                    <li className="flex pl-2 pt-2">
                        <a className="text-[12px] text-[#333] hover:cursor-pointer hover:underline pt-1">中古車比較表</a>
                        <p className="text-[#ff6010]">▼</p>
                    </li>
                </ul>
            </div>

            <div className="flex ml-32 py-6 pt-0">
                <Image
                src="/img/icon_meter (1).svg"
                alt=""
                width={30}
                height={30}/>
                <p className="font-bold text-xl">状態</p>
                <p className="text-[10px] pt-2">{car_name}</p>
            </div>

            <div className="ml-32 mr-[410px] border-[3px] border-[#ebe9e4] text-[#333]">
                <table>
                    <tbody className="flex border-b-[1px] border-b-[#ebe9e4] text-left">
                        <tr className="flex">
                            <th className="bg-[#f9f8f6] w-[160px] h-[50px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3 flex items-center">年式(初度登録年)
                                <span className="ml-1">
                                    <Image
                                    src="/img/icon_question.svg"
                                    alt=""
                                    width={15}
                                    height={15}
                                    />
                                </span>
                            </th>
                            <td className="w-[200px] h-[50px] border-r-[1px] border-[#ebe9e4] font-bold text-[12px] pl-5 pt-4">{model_year}</td>
                        </tr>
                    
                        <tr className="flex">
                            <th className="bg-[#f9f8f6] w-[160px] h-[50px] border-r text-[12px] font-normal pl-3 flex items-center">ワンオーナー
                                <span className="ml-1">
                                    <Image
                                    src="/img/icon_question.svg"
                                    alt=""
                                    width={15}
                                    height={15}
                                    />
                                </span>
                            </th>
                            <td className="w-[200px] h-[50px]  font-bold text-[12px] pl-5 pt-4">ー</td>
                        </tr>
                    </tbody>

                    <tbody className="flex border-b-[1px] border-b-[#ebe9e4] text-left">
                        <tr className="flex">
                            <th className="bg-[#f9f8f6] w-[160px] h-[50px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3 flex items-center">走行距離
                                <span className="ml-1">
                                    <Image
                                    src="/img/icon_question.svg"
                                    alt=""
                                    width={15}
                                    height={15}
                                    />
                                </span>
                            </th>
                            <td className="w-[200px] h-[50px] border-r-[1px] border-[#ebe9e4] font-bold text-[12px] pl-5 pt-4">{milege / 10000}万km</td>
                        </tr>
                        <tr>
                            <th className="bg-[#f9f8f6] w-[160px] h-[50px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3">キャンピングカー</th>
                            <td className="w-[200px] h-[50px] pl-5 pt-3">ー</td>
                        </tr>
                    </tbody>

                    <tbody className="flex border-b-[1px] border-b-[#ebe9e4] text-left">
                        <tr className="flex">
                            <th className="bg-[#f9f8f6] w-[160px] h-[50px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3 flex items-center">修復歴
                                <span className="ml-1">
                                    <Image
                                    src="/img/icon_question.svg"
                                    alt=""
                                    width={15}
                                    height={15}
                                    />
                                </span>
                            </th>
                            <td className="w-[200px] h-[50px] border-r-[1px] border-[#ebe9e4] font-bold text-[12px] pl-5 pt-4">{repair}</td>
                        </tr>
                        <tr>
                            <th className="bg-[#f9f8f6] w-[160px] h-[50px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3">福祉車両</th>
                            <td className="w-[200px] h-[50px] pl-5 pt-2">ー</td>
                        </tr>
                    </tbody>

                    <tbody className="flex border-b-[1px] border-b-[#ebe9e4] text-left">
                        <tr className="flex">
                            <th className="bg-[#f9f8f6] w-[160px] h-[50px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3 flex items-center">定期点検記録簿
                                <span className="ml-1">
                                    <Image
                                    src="/img/icon_question.svg"
                                    alt=""
                                    width={15}
                                    height={15}
                                    />
                                </span>
                            </th>
                            <td className="w-[200px] h-[50px] border-r-[1px] border-[#ebe9e4] pl-5 pt-4">ー</td>
                        </tr>
                        <tr>
                            <th className="bg-[#f9f8f6] w-[160px] h-[50px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3">新車物件</th>
                            <td className="w-[200px] h-[50px] pl-5 pt-2">ー</td>
                        </tr>
                    </tbody>

                    <tbody className="flex border-b-[1px] border-b-[#ebe9e4] text-left">
                        <tr className="flex">
                            <th className="bg-[#f9f8f6] w-[160px] h-[50px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3 flex items-center">禁煙車
                                <span className="ml-1">
                                    <Image
                                    src="/img/icon_question.svg"
                                    alt=""
                                    width={15}
                                    height={15}
                                    />
                                </span>
                            </th>
                            <td className="w-[200px] h-[50px] border-r-[1px] border-[#ebe9e4] pl-5 pt-4">ー</td>
                        </tr>
                        <tr>
                            <th className="bg-[#f9f8f6] w-[160px] h-[50px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3">正規輸入車</th>
                            <td className="w-[200px] h-[50px] pl-5 pt-2">ー</td>
                        </tr>
                    </tbody>

                    <tbody className="flex border-b-[1px] border-b-[#ebe9e4] text-left">
                        <tr className="flex">
                            <th className="bg-[#f9f8f6] w-[160px] h-[70px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3 align-top pt-3 flex">リサイクル料
                                <span className="ml-1">
                                    <Image
                                    src="/img/icon_question.svg"
                                    alt=""
                                    width={15}
                                    height={15}
                                    />
                                </span>
                            </th>
                            <td className="w-[200px] h-[70px] border-r-[1px] border-[#ebe9e4] font-bold text-[12px] pl-5 pt-6">リ済込</td>
                        </tr>
                        <tr className="flex">
                            <th className="bg-[#f9f8f6] w-[160px] h-[70px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3 flex pt-4">登録 (届出) 済<br></br>未使用車
                                <span className="mt-5 mr-14">
                                    <Image
                                    src="/img/icon_question.svg"
                                    alt=""
                                    width={15}
                                    height={15}
                                    />
                                </span>
                            </th>
                            <td className="w-[200px] h-[50px] pl-5 pt-6">ー</td>
                        </tr>
                    </tbody>

                    <tbody className="flex border-b-[1px] border-b-[#ebe9e4] text-left">
                        <tr className="flex">
                            <th className="bg-[#f9f8f6] w-[160px] h-[50px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3 flex items-center">展示・試乗車
                                <span className="ml-1">
                                    <Image
                                    src="/img/icon_question.svg"
                                    alt=""
                                    width={15}
                                    height={15}
                                    />
                                </span>
                            </th>
                            <td className="w-[200px] h-[50px] border-r-[1px] border-[#ebe9e4] pl-5 pt-4">ー</td>
                        </tr>
                        <tr className="flex">
                            <th className="bg-[#f9f8f6] w-[160px] h-[50px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3 flex items-center">レンタカーアップ
                                <span className="ml-1">
                                    <Image
                                    src="/img/icon_question.svg"
                                    alt=""
                                    width={15}
                                    height={15}
                                    />
                                </span>
                            </th>
                            <td className="w-[200px] h-[50px] pl-5 pt-4">ー</td>
                        </tr>
                    </tbody>

                    <tbody className="flex border-b-[1px] border-b-[#ebe9e4] text-left">
                        <tr>
                            <th className="bg-[#f9f8f6] w-[160px] h-[50px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3">エコカー減税対象車</th>
                            <td className="w-[560px] h-[50px] pl-5 pt-4">ー</td>
                        </tr>
                    </tbody>

                    <tbody className="flex border-b-[1px] border-b-[#ebe9e4] text-left">
                        <tr className="flex">
                            <th className="bg-[#f9f8f6] w-[160px] h-[50px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3 flex items-center">車検
                                <span className="ml-1">
                                    <Image
                                    src="/img/icon_question.svg"
                                    alt=""
                                    width={15}
                                    height={15}
                                    />
                                </span>
                            </th>
                            <td className="w-[560px] h-[50px] font-bold text-[12px] pl-5 pt-4">{vehicle_inspection}</td>
                        </tr>
                    </tbody>

                    <tbody className="flex border-b-[1px] border-b-[#ebe9e4] text-left">
                        <tr className="flex">
                            <th className="bg-[#f9f8f6] w-[160px] h-[180px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3 align-top pt-3 flex">法定整備
                                <span className="ml-1">
                                    <Image
                                    src="/img/icon_question.svg"
                                    alt=""
                                    width={15}
                                    height={15}
                                    />
                                </span>
                            </th>
                            <td className="w-[560px] h-[50px]">
                                <p className="font-bold text-[12px] pl-5 py-3">法定整備付<br></br>
                                   法定12ヶ月点検整備付※商用車は6ヶ月点検整備付<br></br>
                                   1. 契約後～納車までに法定点検を実施致します。<br></br>
                                   2. 点検記録簿が発行されます。<br></br>
                                   3. 法定点検費用は車両本体価格に含まれております。<br></br>
                                    <br></br>
                                   また別途有償にて整備パックもご用意しております。<br></br>
                                   詳細は販売スタッフにお尋ね下さいませ。
                                </p>
                            </td>
                        </tr>
                    </tbody>

                    <tbody className="flex border-b-[1px] border-b-[#ebe9e4] text-left">
                        <tr className="flex">
                            <th className="bg-[#f9f8f6] w-[160px] h-[100px] border-r-[1px] border-[#ebe9e4] text-[12px] font-normal pl-3 align-top pt-3 flex">保証
                                <span className="ml-1">
                                    <Image
                                    src="/img/icon_question.svg"
                                    alt=""
                                    width={15}
                                    height={15}
                                    />
                                </span>
                            </th>
                            <td className="w-[560px] h-[50px]">
                                <p className="font-bold text-[12px] pl-5 py-3">保証付：販売店保証　保証期間：1ヵ月　保証距離：1,000km<br></br>
                                保証費用は本体価格に含まれています。詳細については、販売店にご確認ください。<br></br>
                                別途有償にて保証延長プランもご用意しております。<br></br>
                                詳細は店舗スタッフにお尋ね下さいませ。
                                </p>
                            </td>
                        </tr>
                    </tbody>





                </table>


            </div>
            
        </div>
        </>
    );
}

export default Dtail_situation;