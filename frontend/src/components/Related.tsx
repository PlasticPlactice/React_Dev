import React from 'react';
import styles from '@/styles/Related.module.css';
import Image from 'next/image';

const Related: React.FC = () => {
  return (
    <div className={styles.container}>
    <div className={styles.bottomSection}>
    <Image
      src="/img/logo_footer-Photoroom.png"
      width={376}
      height={60}
      alt="カーセンサーdown"
      className={styles.logo}
    /></div>
      <h2 className={styles.title}>中古車情報カーセンサー関連サイト</h2>
      <div className={styles.linksGroup}>
        <ul className={styles.linkList}>
          <li><a href="#">中古車情報ならカーセンサー</a> |</li>
          <li><a href="#">カーセンサーエッジ・輸入車</a> |</li>
          <li><a href="#">車買取・車査定</a> |</li>
          <li><a href="#">中古車リース</a></li>
        </ul>
        <ul className={styles.linkList}>
        <li><a href="#">転職ならリクナビNEXT</a> |</li>
          <li><a href="#">転職支援ならリクルートエージェント</a> |</li>
          <li><a href="#">女性の転職情報ならとらばーゆ</a> |</li>
          <li><a href="#">就職活動はリクナビ</a> |</li>
          <li><a href="#">派遣会社のリクルートスタッフィング</a> |</li>
          <li><a href="#">車買取・車審査はカーセンサー</a> |</li>
          <li><a href="#">バイト探しフロム・エーナビ</a> |</li>
          <li><a href="#">アルバイト情報タウンワーク</a> |</li>
          <li><a href="#">求人転職サイトはたらいく</a> |</li>
          <li><a href="#">石求人ならリクルートドクターズキャリア</a> |</li>
          <li><a href="#">薬剤師求人ならリクナビ薬剤師</a> |</li>
          <li><a href="#">ハイクラス転職ならリクルートダイレクトスカウト</a> |</li>
          <li><a href="#">大学・専門学校のスタディサプリ進路</a> |</li>
          <li><a href="#">勉強・受験はスタディサプリ</a> |</li>
          <li><a href="#">じゃらんnet</a> |</li>
          <li><a href="#">結婚式ならゼクシィ</a> |</li>
          <li><a href="#">妊娠-出産-育児はゼクシィBaboy</a> |</li>
          <li><a href="#">不動産・在宅情報ならSUUMO</a> |</li>
          <li><a href="#">SUUMO賃貸</a> |</li>
          <li><a href="#">住宅相談はスーモカウンター</a> |</li>
          <li><a href="#">SUUMO引越し見積もり</a> |</li>
          <li><a href="#">中古車ならカーセンサー</a> |</li>
          <li><a href="#">ホットペッパーグルメ</a> |</li>
          <li><a href="#">ホットペッパービューティー</a> |</li>
          <li><a href="#">ホットペッパービューティーワーク</a> |</li>
          <li><a href="#">保険チャンネル</a> |</li>
          <li><a href="#">海外求人・海外転職はRGF</a> |</li>
          <li><a href="#">家具インテリアのダブルーム</a> |</li>
          <li><a href="#">ゴルフ場予約じゃらんゴルフ</a> |</li>
          <li><a href="#">POSレジアプリならAirレジ</a> |</li>
          <li><a href="#">リクルートカード</a> |</li>
          <li><a href="#">関連サイト</a> |</li>
          <li><a href="#">グループ企業一覧</a> |</li>
          <li><a href="#">ISIZE</a></li>
        </ul>
      </div>
      <footer className={styles.footer}>
      <Image 
        src='/img/logo_rcl_84.png' 
        alt='RECRUITロゴ' 
        width={200} 
        height={200} 
        className='' 
      />
        <ul>
          <li><a href="#">プライバシーポリシー</a> |</li>
          <li><a href="#">利用規約</a> |</li>
          <li><a href="#">カーセンサーは安心その理由</a> |</li>
          <li><a href="#">サイトマップ</a> |</li>
          <li><a href="#">お問い合わせ・ご要望</a> |</li>
          <li><a href="#">広告掲載のお申込み</a> |</li>
        </ul>
      </footer>
    </div>
  );
};

export default Related;

