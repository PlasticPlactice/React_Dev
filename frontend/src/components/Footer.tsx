import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Footer.module.css'

const Footer: React.FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.serviceHeader}>
            <h2 className={styles.serviceTitle}><span className={styles.arrow}>▶</span>関連サービス</h2>
          </div>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3 className={styles.cardTitle}>
                <span className={styles.arrow}>▶</span>
                スマートフォンアプリ
              </h3>
              <div className={styles.appContent}>
                <Image 
                  src="/img/icon_app.png"
                  width={64}
                  height={64}
                  alt="footer_icon"
                  className={styles.appIcon}
                />
                <p className={styles.description}>
                  最新の中古車情報をスマートフォンで！車名や価格など、豊富な条件からカンタンに中古車検索が可能です！
                </p>
              </div>
              <div className={styles.downloadSection}>
                <span className={styles.downloadText}>ダウンロード</span>
                <Image 
                  src="/img/appStore.png"
                  width={120}
                  height={40}
                  alt="App Store"
                  className={styles.storeButton}
                />
                <Image 
                  src="/img/googlePlay.png"
                  width={120}
                  height={40}
                  alt="Google Play"
                  className={styles.storeButton}
                />
              </div>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.cardTitle}>
                <span className={styles.arrow}>▶</span>
                情報誌 カーセンサー
              </h3>
              <p className={styles.description}>
                中古車情報だけでなく、車選びに役立つノウハウ、最新の相場トレンドなどを紹介していきます。
              </p>
              <button className={styles.actionButton}>
              <span className={styles.arrow}>▶</span>
                全国の最新号はこちら
              </button>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.cardTitle}>
                <span className={styles.arrow}>▶</span>
                メールマガジン
              </h3>
              <p className={styles.description}>
                新着中古車やお得な情報をお届けします！今すぐ登録しよう！
              </p>
              <button className={styles.actionButton}>
              <span className={styles.arrow}>▶</span>
                登録する
              </button>
            </div>
          </div>
          <div className={styles.bannerSection}>
            <Image 
              src="/img/service.png"
              width={680}
              height={80}
              alt="修理費用0円!カーセンサーアフター保証"
              className={styles.banner}
            />
          </div>
          <div className={styles.topLink}>
            <a href="#">カーセンサーnetトップへ ▲</a>
          </div>
          <div className={styles.footerBottom}>
            <div className={styles.logoSection}>
              <span className={styles.brand}>カーセンサー</span>
              <span className={styles.copyright}>PRODUCED BY RECRUIT</span>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.bottomSection}>
        <Image
          src="/img/logo_footer-Photoroom.png"
          width={376}
          height={60}
          alt="カーセンサーdown"
          className={styles.logo}
        />
      </div>
    </>
  );
};

export default Footer;