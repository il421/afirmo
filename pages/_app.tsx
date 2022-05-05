import "../styles/globals.css";

import type { AppProps } from "next/app";
import { AppWrapper } from "../layouts/AppWrapper";
import AppHead from "./index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}

export default MyApp;
