import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="bg-white p-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* サービスタイトル */}
        <div className="flex items-center mb-8">
          <Image
            src="/img/icon_meter (1).svg"
            alt="icon"
            width={30}
            height={30}
          />
          <h2 className="relative leading-[1.2] pl-[8px] text-[20px] font-bold text-black">
            関連サービス
          </h2>
        </div>

        {/* 関連サービスセクション */}
        <div className="relationWrap grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          
          {/* スマートフォンアプリ */}
          <div className="relationWrap__item flex justify-center">
            <section>
              <div className="flex items-center mb-8">
                <Image
                  src="/img/Bodytype.svg"
                  alt="アイコン"
                  width={20}
                  height={20}
                />
                <h2 className="text-[14px] font-bold text-black bidi-isolate">
                  スマートフォンアプリ
                </h2>
              </div>

              <div className="app">
                <div className="app__info">
                  <div className="media flex items-center">
                    <div className="media__obj relative">
                      <Image
                        src="/img/icon_app.png"
                        alt="スマートフォンアプリ"
                        width={140}
                        height={140}
                        layout="intrinsic"
                      />
                    </div>
                    <div className="media__body ml-4">
                      <p className="block my-[1em] mx-0 bidi-isolate text-[#333333]">
                        最新の中古車情報をスマートフォンで！車名や価格など、豊富な条件からカンタンに中古車検索が可能です！
                      </p>
                    </div>
                  </div>
                </div>

                {/* ダウンロードリンク */}
                <div className="app__download">
                  <div className="flex space-x-4 items-center justify-center">
                    <a href="#" target="_blank" rel="nofollow">
                      <Image
                        src="/img/スクリーンショット 2025-02-13 001334.png"
                        width={120}
                        height={120}
                        alt="ダウンロード"
                      />
                    </a>
                    <a href="#" target="_blank" rel="nofollow">
                      <Image
                        src="/img/appStore.png"
                        width={105}
                        height={38}
                        alt="App Storeからダウンロード"
                      />
                    </a>
                    <a href="#" target="_blank" rel="nofollow">
                      <Image
                        src="/img/googlePlay.png"
                        width={103}
                        height={38}
                        alt="Google playで手に入れよう"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* 情報誌 カーセンサー */}
          <div className="relationWrap__item flex justify-center">
            <section>
              <div className="flex items-center mb-8">
                <Image
                  src="/img/Bodytype.svg"
                  alt="アイコン"
                  width={20}
                  height={20}
                />
                <h2 className="block text-[14px] my-[0.83em] mx-0 font-bold text-black bidi-isolate">
                  情報誌 カーセンサー
                </h2>
              </div>

              <div className="magazine">
                <p className="magazine__text block my-[1em] mx-0 bidi-isolate text-[#333333]">
                  中古車情報だけでなく、車選びに役立つノウハウ、最新の相場トレンドなどを紹介しています
                </p>

                <p>
                  <a
                    href="#"
                    className="iconLink arrowRight text-[#333333] hover:underline flex items-center"
                    title="全国の最新号"
                    rel="nofollow"
                  >
                    <Image
                      src="/img/スクリーンショット 2025-02-12 233908.png"
                      alt="icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <span className="mt-1">全国の最新号はこちら</span>
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* メールマガジン */}
          <div className="relationWrap__item flex justify-center">
            <section>
              <div className="flex items-center mb-8">
                <Image
                  src="/img/Bodytype.svg"
                  alt="アイコン"
                  width={20}
                  height={20}
                />
                <h2 className="block text-[14px] my-[0.83em] mx-0 font-bold text-black bidi-isolate">
                  メールマガジン
                </h2>
              </div>

              <div className="mailMagazine">
                <p className="mailMagazine__text block my-[1em] mx-0 bidi-isolate text-[#333333]">
                  新着中古車やお得な情報をお届けします！今すぐ登録しよう！！
                </p>

                <p>
                  <a
                    href="#"
                    className="iconLink arrowRight text-[#333333] hover:underline flex items-center"
                  >
                    <Image
                      src="/img/スクリーンショット 2025-02-12 233908.png"
                      alt="icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <span className="mt-2">登録する</span>
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* バナーエリア */}
        <div className="bannerArea mt-8 flex justify-center">
          <a
            title="万が一の際にも、保証に加入していれば安心です！"
            href="#"
          >
            <Image
              src="/img/service.png"
              width={680}
              height={80}
              alt="カーセンサーアフター保障"
            />
          </a>
        </div>

        {/* ページトップリンク */}
        <div className="toPageTop__inner mt-8 text-right">
          <a
            className="iconLink arrowTop text-[#333333] hover:underline inline-flex items-center"
            data-role="smoothScroll"
            href="#"
          >
            カーセンサーnetトップへ
            <Image
              src="/img/スクリーンショット 2025-02-13 002848.png"
              alt="icon"
              width={20}
              height={20}
              className="ml-2"
            />
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
