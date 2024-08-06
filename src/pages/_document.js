import { Html, Head, Main, NextScript } from "next/document";

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
      </body>
    </Html>
  );
}
