import React from 'react';
import Image from 'next/image';

function Related() {
  return (
    // メインコンテナ: 背景色、パディング、レイアウト設定
    <div className="w-full bg-[#f5f4f0] flex flex-col items-center py-6 px-4 md:px-8">
      <div className="w-full max-w-[1200px] flex flex-col relative">
        
        {/* ロゴ部分: ページのトップにロゴを表示 */}
        <div className="absolute top-[-30px] left-0">
          <Image 
            src="/img/logo_footer-Photoroom.png" 
            width={376} 
            height={60} 
            alt="カーセンサーdown" 
            className="mb-10"
          />
        </div>
        
        {/* タイトル部分 */}
        <h2 className="text-black text-[12px] font-bold mb-1 mt-20 text-left">
          中古車情報カーセンサーnet関連サイト
        </h2>

        {/* カーセンサー関連のリンクリスト */}
        <ul className="list-none p-0 m-0 flex flex-wrap gap-2 whitespace-nowrap border-b border-[#ddd] mb-6">
          {[
            { text: "中古車情報ならカーセンサー", url: "#" },
            { text: "カーセンサーエッジ・輸入車", url: "#" },
            { text: "車買取・車査定", url: "#" },
            { text: "中古車リース", url: "#" }
          ].map((link, index) => (
            <li key={index} className={`inline-block ${index !== 3 ? 'after:content-["|"] after:text-[#003A6B] after:mx-1' : ''}`}>
              {/* リストアイテム: 各リンク */}
              <a href={link.url} className="text-[#003A6B] text-[12px] hover:underline" target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* リクルート関連のリンクリスト */}
        <ul className="list-none p-0 m-0 flex flex-wrap gap-2 mt-6">
          {[
            { text: "転職ならリクナビNEXT", url: "#" },
            { text: "転職支援ならリクルートエージェント", url: "#" },
            { text: "女性の転職情報ならとらばーゆ", url: "#" },
            { text: "就職活動はリクナビ", url: "#" },
            { text: "派遣会社のリクルートスタッフィング", url: "#" },
            { text: "車買取・車審査はカーセンサー", url: "#" },
            { text: "バイト探しフロム・エーナビ", url: "#" },
            { text: "アルバイト情報タウンワーク", url: "#" },
            { text: "求人転職サイトはたらいく", url: "#" },
            { text: "石求人ならリクルートドクターズキャリア", url: "#" },
            { text: "薬剤師求人ならリクナビ薬剤師", url: "#" },
            { text: "ハイクラス転職ならリクルートダイレクトスカウト", url: "#" },
            { text: "大学・専門学校のスタディサプリ進路", url: "#" },
            { text: "勉強・受験はスタディサプリ", url: "#" },
            { text: "じゃらんnet", url: "#" },
            { text: "結婚式ならゼクシィ", url: "#" },
            { text: "妊娠-出産-育児はゼクシィBaboy", url: "#" },
            { text: "不動産・在宅情報ならSUUMO", url: "#" },
            { text: "SUUMO賃貸", url: "#" },
            { text: "住宅相談はスーモカウンター", url: "#" },
            { text: "SUUMO引越し見積もり", url: "#" },
            { text: "中古車ならカーセンサー", url: "#" },
            { text: "ホットペッパーグルメ", url: "#" },
            { text: "ホットペッパービューティー", url: "#" },
            { text: "ホットペッパービューティーワーク", url: "#" },
            { text: "保険チャンネル", url: "#" },
            { text: "海外求人・海外転職はRGF", url: "#" },
            { text: "家具インテリアのダブルーム", url: "#" },
            { text: "ゴルフ場予約じゃらんゴルフ", url: "#" },
            { text: "POSレジアプリならAirレジ", url: "#" },
            { text: "リクルートカード", url: "#" },
            { text: "関連サイト", url: "#" },
            { text: "グループ企業一覧", url: "#" },
            { text: "ISIZE", url: "#" }
          ].map((link, index, array) => (
            <li key={index} className={`inline-block ${index !== array.length - 1 ? 'after:content-["|"] after:text-[#003A6B] after:mx-1' : ''}`}>
              {/* リストアイテム: 各リンク */}
              <a href={link.url} className="text-[#003A6B] text-[12px] hover:underline" target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* フッター部分 */}
      <footer className="w-full max-w-[1200px] flex flex-wrap justify-between text-left py-5 mt-5 text-[10px]">
        <div className="flex items-center mb-4">
          {/* RECRUITロゴ */}
          <Image 
            src='/img/logo_rcl_84.png' 
            alt='RECRUITロゴ' 
            width={200} 
            height={200} 
            className="mr-4" 
          />
          <span className="text-[#003A6B] text-[14px]">RECRUIT</span>
        </div>

        {/* フッターのリンクリスト */}
        <ul className="flex gap-4 list-none p-0 m-0">
          {[
            { text: "プライバシーポリシー", url: "#" },
            { text: "利用規約", url: "#" },
            { text: "カーセンサーは安心その理由", url: "#" },
            { text: "サイトマップ", url: "#" },
            { text: "お問い合わせ・ご要望", url: "#" }
          ].map((link, index) => (
            <li key={index} className={`flex items-center py-2 ${index !== 4 ? 'after:content-["|"] after:text-[#003A6B] after:mx-2' : ''}`}>
              {/* フッターリンク */}
              <a href={link.url} className="text-[#003A6B] text-[12px] hover:underline">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default Related;
