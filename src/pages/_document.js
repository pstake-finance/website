import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { ANALYTICS } from "../utils/config";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*Open Graph Tags*/}
        <meta
          content="pSTAKE Finance | Bitcoin Yields and BTC Liquid Staking"
          property="og:title"
        />
        <meta property="og:image" content="/ogimage.jpeg" />
        <meta
          content="pSTAKE Finance | Bitcoin Yields and BTC Liquid Staking"
          property="og:title"
        />
        <meta property="og:image" content="/ogimage.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pstake.finance" />
        <meta
          property="og:description"
          content="Bitcoin yields for all, backed by Binance Labs"
        />
        {/*Twitter Tags*/}
        <meta
          content="pSTAKE Finance | Bitcoin Yields and BTC Liquid Staking"
          property="twitter:title"
        />
        <meta
          content="Bitcoin yields for all, backed by Binance Labs"
          property="twitter:description"
        />
        <meta content="/ogimage.jpeg" property="twitter:image" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* eslint-disable-next-line @next/next/inline-script-id */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </body>
    </Html>
  );
}
