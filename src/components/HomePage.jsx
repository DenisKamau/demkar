import Image from "next/image";
import styles from "../../styles/Home/HomePage.module.scss";
import ProductSection from "./ProductSection";
import MobileHero from "./MobileHero";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div className={styles.homepage}>
        <div className={styles.background}>
          <Image src="/hero.png" alt="" layout="fill" objectFit="cover" priority />
        </div>
        <div className={styles.headings}>
          <div className={styles.heading1}>
            <h1>Antigue lights</h1>
            <Link href="/shop" passHref>
              <button>Shop Now</button>
            </Link>
          </div>
          <div className={styles.heading2}>
            <h1>Hanging Lights</h1>

            <Link href="/shop" passHref>
              <button>Shop Now</button>
            </Link>
          </div>
        </div>
        <div className={styles.mobileHero}>
          <MobileHero />
        </div>
      </div>
      <div></div>
      <div className={styles.categorySection}>
        <div className={styles.categoryLeft}>
          <div className={styles.image}>
            <Image src="/22.jpg" alt="" width={140} height={250} priority />
          </div>
          <div>
            <h4>Latest Lamps</h4>
            <div className={styles.link}>
              <Link href="/shop" passHref>
                <p>Shop Now</p>
              </Link>
              <div className={styles.line} />
            </div>
          </div>
        </div>
        <div className={styles.categoryRight}>
          <div className={styles.top}>
            <div className={styles.image1}>
              <Image src="/6.jpg" alt="" width={140} height={150} />
            </div>
            <div>
              <h4>Unique Lamps</h4>
              <div className={styles.link}>
                <Link href="/shop" passHref>
                  <p>Shop Now</p>
                </Link>
                <div className={styles.line} />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <div className={styles.image}>
                <Image src="/14.jpg" alt="" width={100} height={190} />
              </div>
              <div>
                <h4>Latest Lamps</h4>
                <div className={styles.link}>
                  <Link href="/shop" passHref>
                    <p>Shop Now</p>
                  </Link>
                  <div className={styles.line} />
                </div>
              </div>
            </div>
            <div className={styles.bottomRight}>
              <div className={styles.image}>
                <Image src="/15.jpg" alt="" width={100} height={190} />
              </div>
              <div>
                <h4>Latest Lamps</h4>
                <div className={styles.link}>
                  <Link href="/shop" passHref>
                    <p>Shop Now</p>
                  </Link>
                  <div className={styles.line} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductSection />
    </div>
  );
};

export default HomePage;
