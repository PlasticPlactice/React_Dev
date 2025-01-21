import React from "react";
import Touhoku from "./prefectures/Touhoku";
import Kantou from "./prefectures/Kantou";
import Kansai from "./prefectures/Kansai";
import Sikoku from "./prefectures/Sikoku";
import Hokuriku from "./prefectures/Hokuriku";
import Toukai from "./prefectures/Toukai";
import Chugoku from "./prefectures/Chugoku";
import Kyusyu from "./prefectures/Kyusyu";

const Prefectures = () => {
    return (
        <>
        <div className="border text-blue-950 flex justify-between text-xs mx-40">
            <div className="p-7">
                <Touhoku></Touhoku>
                <Kantou></Kantou>
                <Kansai></Kansai>
                <Sikoku></Sikoku>
            </div>
            <div className="p-7">
                <Hokuriku></Hokuriku>
                <Toukai></Toukai>
                <Chugoku></Chugoku>
                <Kyusyu></Kyusyu>
            </div>
        </div>
        </>
    );
}

export default Prefectures;