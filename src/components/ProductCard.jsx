import Image from "next/image";
import styles from "../../styles/Shop/ProductCard.module.scss";
import Link from "next/link";

const ProductCard = ({ img }) => {
  return (
    <Link href="/product" passHref>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image src={img} alt="" layout="fill" objectFit="cover" />
        </div>
        <p className={styles.productName}>Electric Switch</p>
        <p className={styles.price}>Kshs 200.00</p>
      </div>
    </Link>
  );
};

export default ProductCard;
