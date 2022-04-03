import Image from "next/image";
import styles from "../../styles/Home/MobileHero.module.scss";

const MobileHero = () => {
  return (
    <div className={styles.mobileHero}>
      <Image src="/5.jpg" alt="" layout="fill" priority objectFit="cover" />
      {/* <button>Shop Now</button> */}
    </div>
  );
};

export default MobileHero;
