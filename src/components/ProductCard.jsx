import Image from "next/image";
import styles from "../../styles/Shop/ProductCard.module.scss";

const ProductCard = ({ img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={img} alt="" layout="fill" objectFit="cover" />
      </div>
      <p className={styles.productName}>Product Name</p>
      <p className={styles.price}>Kshs 200.00</p>
    </div>
  );
};

export default ProductCard;
