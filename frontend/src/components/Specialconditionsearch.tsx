import React from "react";
import Image from "next/image";

const Specialconditionsearch = () => {
    return(
        <>
            <div className="flex ml-36 py-6">
                <Image
                src="/img/Bodytype.svg"
                alt=""
                width={20}
                height={20}/>
                <p className="font-bold text-sm">こだわり条件から探す</p>
            </div>

            <div className="flex ml-36 py-6 ">
                <div className="border border-black w-60 h-56">
                    <div className="block px-4 pt-3">
                        <p className="font-bold text-sm text-[#666666] pb-2">価格から探す</p>
                        <a className="text-xs text-[#2b006b]">～30万円</a><br/>
                        <a className="text-xs text-[#2b006b]">～50万円</a><br/>
                        <a className="text-xs text-[#2b006b]">～100万円</a><br/>
                        <a className="text-xs text-[#2b006b]">～200万円</a><br/>
                        <a className="text-xs text-[#2b006b]">～300万円</a><br/>
                        <a className="text-xs text-[#2b006b]">500万円以上</a>
                    </div>
                </div>

                <div className="border border-black w-60">
                    <div className="block px-4 pt-3">
                        <p className="font-bold text-sm text-[#666666] pb-2">走行距離から探す</p>
                        <a className="text-xs text-[#2b006b]">1万km以下</a><br/>
                        <a className="text-xs text-[#2b006b]">1～3万km</a><br/>
                        <a className="text-xs text-[#2b006b]">3～5万km</a><br/>
                        <a className="text-xs text-[#2b006b]">5～10万km</a><br/>
                        <a className="text-xs text-[#2b006b]">10～15万km</a><br/>
                        <a className="text-xs text-[#2b006b]">15万km以上</a>
                    </div>
                </div>

                <div className="border border-black w-60">
                    <div className="block px-4 pt-3">
                        <p className="font-bold text-sm text-[#666666] pb-2">乗車定員から探す</p>
                        <a className="text-xs text-[#2b006b]">2人乗り</a><br/>
                        <a className="text-xs text-[#2b006b]">4人乗り</a><br/>
                        <a className="text-xs text-[#2b006b]">5人乗り</a><br/>
                        <a className="text-xs text-[#2b006b]">7人乗り</a><br/>
                        <a className="text-xs text-[#2b006b]">8人乗り</a><br/>
                        <a className="text-xs text-[#2b006b]">10人乗り</a>
                    </div>
                </div>

                <div className="border border-black w-60">
                    <div className="block px-4 pt-3">
                        <p className="font-bold text-sm text-[#666666] pb-2">排気量から探す</p>
                        <a className="text-xs text-[#2b006b]">800cc以下</a><br/>
                        <a className="text-xs text-[#2b006b]">1,000～1,400cc以下</a><br/>
                        <a className="text-xs text-[#2b006b]">1,500～1,900cc以下</a><br/>
                        <a className="text-xs text-[#2b006b]">2,000～2,400cc以下</a><br/>
                        <a className="text-xs text-[#2b006b]">2,500～2,900cc以下</a><br/>
                        <a className="text-xs text-[#2b006b]">3,000～4,000cc以下</a><br/>
                        <a className="text-xs text-[#2b006b]">4,000cc以上</a>
                    </div>
                </div>
        
            </div>
        </>
    );
    
} 
export default Specialconditionsearch;