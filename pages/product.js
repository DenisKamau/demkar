import SingleProduct from "../src/components/SingleProduct";
import Head from "next/head";

const Product = () => {
  return (
    <div>
      <Head>
        <title>Demker | Electronics shop in Nairobi</title>
        <meta name="description" content="Demker product page" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <SingleProduct />
    </div>
  );
};

export default Product;
