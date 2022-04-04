import ShopPage from "../src/components/shop";
import Head from "next/head";

const Shop = () => {
  return (
    <div>
      <Head>
        <title>Demker | Electronics shop in Nairobi</title>
        <meta name="description" content="Demker shop page" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <ShopPage />
    </div>
  );
};

export default Shop;
