import HomePage from "../src/components/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demker | Electronics shop in Nairobi</title>
        <meta name="description" content="Demker homepage" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <HomePage />;
    </div>
  );
}
