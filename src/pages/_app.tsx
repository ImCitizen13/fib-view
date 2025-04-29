import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { ColorContextProvider } from "~/context/ColorsContext";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>FibView</title>
        <meta
          name="description"
          content="This site is to showcase the Fibonacci View component"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ColorContextProvider>
        <Component {...pageProps} />
      </ColorContextProvider>
    </>
  );
};

export default MyApp;
