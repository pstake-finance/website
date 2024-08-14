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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

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
