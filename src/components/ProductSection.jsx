import ProductCard from "./ProductCard";
import styles from "../../styles/Shop/ProductSection.module.scss";

const ProductSection = () => {
  return (
    <div className={styles.productSection}>
      <div className={styles.section}>
        <h2 className={styles.title}>Best Seller</h2>
        <p className={styles.text}>A wide range of our best Selling products</p>
        <div className={styles.productRow}>
          <ProductCard img={"/1.jpg"} />
          <ProductCard img={"/2.jpg"} />
          <ProductCard img={"/3.jpg"} />
          <ProductCard img={"/20.jpg"} />
          <ProductCard img={"/5.jpg"} />
          <ProductCard img={"/6.jpg"} />
          <ProductCard img={"/7.jpg"} />
          <ProductCard img={"/8.jpg"} />
          <ProductCard img={"/9.jpg"} />
          <ProductCard img={"/10.jpg"} />
        </div>

        <div className={styles.section2}>
          <h2 className={styles.title}>Featured</h2>
          <p className={styles.text}>Products you would love</p>
          <div className={styles.productRow}>
            <ProductCard img={"/11.jpg"} />
            <ProductCard img={"/12.jpg"} />
            <ProductCard img={"/13.jpg"} />
            <ProductCard img={"/14.jpg"} />
            <ProductCard img={"/15.jpg"} />
            <ProductCard img={"/16.jpg"} />
            <ProductCard img={"/17.jpg"} />
            <ProductCard img={"/18.jpg"} />
            <ProductCard img={"/19.jpg"} />
            <ProductCard img={"/20.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
