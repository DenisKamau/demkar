import Image from "next/image";
import styles from "../../styles/Shop/SingleProduct.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "./ProductCard";

const SingleProduct = ({ img }) => {
  const [viewportRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <div className={styles.singleProduct}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.image}>
            <Image src="/20.jpg" alt="" layout="fill" objectFit="cover" priority />
          </div>
        </div>
        <div className={styles.right}>
          <h1>Product Name</h1>
          <p className={styles.price}>Kshs 200.00</p>
          <div className={styles.about}>
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh
              praesent tristique magna sit amet purus.
            </p>
          </div>
          <button className={styles.callButton}>Call to Order</button>
        </div>
      </div>

      <div className={styles.relatedProducts}>
        <h3>Related Products</h3>
        <div>
          <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={viewportRef}>
              <div className={styles.embla__container}>
                <ProductCard img={"/5.jpg"} />
                <ProductCard img={"/6.jpg"} />
                <ProductCard img={"/7.jpg"} />
                <ProductCard img={"/8.jpg"} />
                <ProductCard img={"/9.jpg"} />
                <ProductCard img={"/10.jpg"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
