import ProductCard from "./ProductCard";
import styles from "../../styles/Shop/ProductSection.module.scss";

const ProductSection = () => {
  return (
    <div className={styles.productSection}>
      <div className={styles.section}>
        <h2 className={styles.title}>Best Seller</h2>
        <p className={styles.text}>A wide range of our best Selling products</p>
        <div className={styles.productRow}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div className={styles.section2}>
          <h2 className={styles.title}>Featured</h2>
          <p className={styles.text}>Products you would love</p>
          <div className={styles.productRow}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
