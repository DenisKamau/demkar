import Link from "next/link";
import styles from "../../styles/Home/MobileHero.module.scss";

const MobileHero = () => {
  return (
    <div className={styles.mobileHero}>
      <h1>Demker Electricals</h1>
      <p> We are a leading elecricals dealer in electical goods & appliances, hardware & general merchants</p>
      <Link href="/shop" passHref>
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default MobileHero;
