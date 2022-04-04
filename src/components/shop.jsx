import ProductCard from "./ProductCard";
import styles from "../../styles/Shop/Shop.module.scss";

const Shop = () => {
  return (
    <div className={styles.shop}>
      <div className={styles.shopTop}>
        <h1>Shop</h1>
        <select name="" id="">
          <option value="" disabled>
            Select Category
          </option>
          <option value="">Category 1</option>
          <option value="">Category 2</option>
          <option value="">Category 3</option>
          <option value="">Category 4</option>
          <option value="">Category 5</option>
        </select>
      </div>
      <p className={styles.choose}>
        Choose from a wide selection of all <br /> available products
      </p>
      <div className={styles.productSection}>
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
  );
};

export default Shop;
