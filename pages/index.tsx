import type { NextPage } from "next";
import Head from "next/head";

// Importing other components
import NavBar from "../components/UI/NavBar";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trully Skincare store</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default IndexPage;
