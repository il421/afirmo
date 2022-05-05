import type { NextPage } from "next";
import Head from "next/head";

const AppHead: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Afirmo</title>
        <meta name="description" content="An interview task" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
      </Head>
    </div>
  );
};

export default AppHead;
