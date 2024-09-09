import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { ANALYTICS } from "../utils/config";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <title>pSTAKE Finance | Bitcoin Yields and BTC Liquid Staking</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Bitcoin yields for all, backed by Binance Labs"
        />
        <meta
          name="keywords"
          content="liquid staking, pstake, bitcoin, stkBTC, btc, stkbtc, cosmos, persistence, stkBNB, stkATOM"
        />

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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS}`}
        />
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
