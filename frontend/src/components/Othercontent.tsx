import React from "react";

const sections = [
  {
    title: "車カタログ＆車クチコミ",
    items: [
      "トヨタ", "日産", "ホンダ", "スズキ", "ダイハツ", "スバル", "三菱", "マツダ",
      "メルセデス・ベンツ", "フォルクスワーゲン"
    ]
  },
  {
    title: "中古車相場表",
    items: ["ワゴンR", "ムーブ", "ライフ", "フィット", "ステップワゴン", "キューブ", "エスティマ", "ヴィッツ", "タント", "セレナ"]
  },
  {
    title: "車買取・車査定",
    items: ["ワゴンR", "フィット", "プリウス", "タント", "ムーヴ", "セレナ", "オデッセイ", "ヴォクシー", "アルファード", "ステップワゴン"]
  },
  {
    title: "メーカー＆車種別燃費ランキング",
    items: ["プリウス", "アクア", "アルファード", "ジムニー", "セレナ", "ハイエース", "フィット", "フォレスター", "プリウスα"]
  }
];

const bottomSections = [
  {
    title: "人気キーワードで中古車検索",
    items: ["フェラーリ488スパイダー", "ホンダカーズ 神奈川北", "キャンピングカー", "ネッツトヨタ埼玉", "ジムニー", "プリウス", "488スパイダー", "クラウン", "バンテックジル", "ガリバー"]
  },
  {
    title: "中古車販売店を地域から探す",
    items: []
  },
  {
    title: "みんなの比較車種",
    items: ["プリウスとインサイトを比較する", "セレナとエスティマを比較する", "ワゴンRとムーヴを比較する", "フィットとヴィッツを比較する"]
  },
  {
    title: "カーセンサーについて",
    items: ["カーセンサーの目標", "カーセンサーのサービス", "カーセンサーの歴史", "ロゴとタグラインに込めた想い"]
  }
];

const OtherContent = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* 上部セクション */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sections.map((section) => (
            <div key={section.title} className="mb-6">
              <h3 className="text-lg font-bold text-[#003a6b] mb-3">
                <a href="#" className="hover:underline">{section.title}</a>
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {section.items.map((item) => (
                  <li key={`${section.title}-${item}`} className="text-sm">
                    <a href="#" className="text-[#003a6b] hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 下部セクション */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bottomSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold text-[#003a6b] mb-3">
                <a href="#" className="hover:underline">{section.title}</a>
              </h3>
              {section.items.length > 0 ? (
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={`${section.title}-${item}`} className="text-sm">
                      <a href="#" className="text-[#003a6b] hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">データがありません</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherContent;
