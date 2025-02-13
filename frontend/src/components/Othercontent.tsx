import Image from "next/image";

const OtherContent: React.FC = () => {
  return (
    <div className="flex flex-wrap px-6 md:px-12 lg:px-20 xl:px-32 bg-white">
      <section className="w-full max-w-7xl mx-auto">
        <h2 className="relative flex items-center mt-[20px] leading-[1.2] mb-[30px] pl-[10px] text-[20px] font-bold text-[#333333]">
          <Image 
            src="/img/icon_meter (1).svg" 
            alt="アイコン" 
            width={30} 
            height={30} 
            className="mr-[10px]"
          />
          その他のコンテンツ
        </h2>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <p className="text-[14px] font-bold mb-[10px]">
              <a href="#" className="text-[#003a6b] hover:underline">
                車カタログ＆車クチコミ
              </a>
            </p>
            <div>
              <ul className="list-none grid grid-cols-2 gap-0.5" style={{ gridTemplateColumns: '40% 60%' }}>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">トヨタ</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">日産</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ホンダ</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">スズキ</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ダイハツ</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">スバル</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">三菱</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">マツダ</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">メルセデス・ベンツ</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">フォルクスワーゲン</a></li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <p className="text-[14px] font-bold mb-[10px]">
              <a href="#" className="text-[#003a6b] hover:underline">中古車相場表</a>
            </p>
            <div>
              <ul className="list-none grid grid-cols-2 gap-0.5" style={{ gridTemplateColumns: '30% 35%' }}>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ワゴンR</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ムーブ</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ライフ</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">フィット</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ステップワゴン</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">キューブ</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">エスティマ</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ヴィッツ</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">タント</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">セレナ</a></li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <p className="text-[14px] font-bold mb-[10px]">
              <a href="#" className="text-[#003a6b] hover:underline">車買取・車査定</a>
            </p>
            <div>
              <ul className="list-none grid grid-cols-2 gap-0.5" style={{ gridTemplateColumns: '30% 35%' }}>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ワゴンR</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">フィット</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">プリウス</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">タント</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ムーヴ</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">セレナ</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">オデッセイ</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ヴォクシー</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">アルファード</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ステップワゴン</a></li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <p className="text-[14px] font-bold mb-[10px]">
              <a href="#" className="text-[#003a6b] hover:underline">メーカー＆車種別燃費ランキング</a>
            </p>
            <div>
              <ul className="list-none grid grid-cols-2 gap-0.5" style={{ gridTemplateColumns: '30% 35%' }}>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">プリウス</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">アクア</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">アルファード</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ジムニー</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">セレナ</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ハイエース</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">フィット</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">フォレスター</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">プリウスα</a></li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <p className="text-[14px] font-bold mb-[10px]">
              <a href="#" className="text-[#003a6b] hover:underline">人気キーワードで中古車検索</a>
            </p>
            <div>
              <ul className="list-none">
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">フェラーリ488スパイダー</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ホンダカーズ 神奈川北</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">キャンピングカー</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ネッツトヨタ埼玉</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">ジムニー</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">プリウス</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">軽自動車</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">BMW X5</a></li>
                <li className="text-[12px]"><a href="#" className="text-[#003a6b] hover:underline">CX-5</a></li>
              </ul>
            </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
  <p className="text-[14px] font-bold mb-[10px]">
    <a href="#" className="text-[#003a6b] hover:underline">中古車販売店を地域から探す</a>
  </p>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
  <p className="text-[14px] font-bold mb-[10px]">
    <a href="#" className="text-[#003a6b] hover:underline">みんなの比較車種</a>
  </p>
  <div>
    <ul className="list-none">
      <li className="text-[12px]">
        <a href="#" className="text-[#003a6b] hover:underline">プリウスとインサイトを比較する</a>
      </li>
      <li className="text-[12px]">
        <a href="#" className="text-[#003a6b] hover:underline">セレナとエスティマを比較する</a>
      </li>
      <li className="text-[12px]">
        <a href="#" className="text-[#003a6b] hover:underline">ワゴンRとムーヴを比較する</a>
      </li>
      <li className="text-[12px]">
        <a href="#" className="text-[#003a6b] hover:underline">フィットとヴィッツを比較する</a>
      </li>
    </ul>
  </div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
  <p className="text-[14px] font-bold mb-[10px]">
    <a href="#" className="text-[#003a6b] hover:underline">カーセンサーについて</a>
  </p>
  <div>
    <ul className="list-none">
      <li className="text-[12px]">
        <a href="#" className="text-[#003a6b] hover:underline">カーセンサーの目標</a>
      </li>
      <li className="text-[12px]">
        <a href="#" className="text-[#003a6b] hover:underline">カーセンサーのサービス</a>
      </li>
      <li className="text-[12px]">
        <a href="#" className="text-[#003a6b] hover:underline">カーセンサーの歴史</a>
      </li>
      <li className="text-[12px]">
        <a href="#" className="text-[#003a6b] hover:underline">ロゴとタグラインに込めた想い</a>
      </li>
    </ul>
  </div>
</div>
    </div>
  </section>
</div>
  );
};

export default OtherContent;