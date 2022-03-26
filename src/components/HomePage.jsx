import Image from "next/image";
import styles from "../../styles/Home/HomePage.module.scss";
import ProductSection from "./ProductSection";

const HomePage = () => {
  return (
    <div>
      <div className={styles.homepage}>
        <Image src="/hero.png" alt="" layout="fill" objectFit="cover" priority />
        <div className={styles.headings}>
          <div className={styles.heading1}>
            <h1>Antigue lights</h1>
            <button>Shop Now</button>
          </div>
          <div className={styles.heading2}>
            <h1>Hanging Lights</h1>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className={styles.categorySection}>
        <div className={styles.categoryLeft}>
          <div className={styles.image}>
            <Image src="/left.png" alt="" width={180} height={250} priority />
          </div>
          <div>
            <h4>Latest Lamps</h4>
            <div className={styles.link}>
              <p>Shop Now</p>
              <div className={styles.line} />
            </div>
          </div>
        </div>
        <div className={styles.categoryRight}>
          <div className={styles.top}>
            <div className={styles.image}>
              <Image src="/rightTop.png" alt="" width={140} height={150} priority />
            </div>
            <div>
              <h4>Unique Lamps</h4>
              <div className={styles.link}>
                <p>Shop Now</p>
                <div className={styles.line} />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <div className={styles.image}>
                <Image src="/bottomLeft.png" alt="" width={100} height={190} priority />
              </div>
              <div>
                <h4>Latest Lamps</h4>
                <div className={styles.link}>
                  <p>Shop Now</p>
                  <div className={styles.line} />
                </div>
              </div>
            </div>
            <div className={styles.bottomRight}>
              <div className={styles.image}>
                <Image src="/bottomRight.png" alt="" width={100} height={190} priority />
              </div>
              <div>
                <h4>Latest Lamps</h4>
                <div className={styles.link}>
                  <p>Shop Now</p>
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
