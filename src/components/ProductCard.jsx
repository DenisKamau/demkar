import Image from "next/image";
import styles from "../../styles/Shop/ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src="/product.png" alt="" layout="fill" objectFit="cover" />
      </div>
      <p className={styles.productName}>Product Name</p>
      <p className={styles.price}>Price</p>
    </div>
  );
};

export default ProductCard;
