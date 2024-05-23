import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <title>pSTAKE | Unlocking liquidity of staked assets</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="pSTAKE, developed by Persistence, is a liquid staking protocol unlocking the liquidity of staked assets."
        />
        <meta
          name="keywords"
          content="liquid staking, pstake, $pstake, cosmos, persistence, stkBNB, stkATOM"
        />

        {/*Open Graph Tags*/}
        <meta
          content="pSTAKE | Unlocking liquidity of staked assets"
          property="og:title"
        />
        <meta property="og:image" content="/ogimage.jpeg" />
        <meta
          content="pSTAKE | Unlocking liquidity of staked assets"
          property="og:title"
        />
        <meta property="og:image" content="/ogimage.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pstake.finance" />
        <meta
          property="og:description"
          content="pSTAKE, developed by Persistence, is a liquid staking protocol unlocking the liquidity of staked assets."
        />
        {/*Twitter Tags*/}
        <meta
          content="pSTAKE | Unlocking liquidity of staked assets"
          property="twitter:title"
        />
        <meta
          content="pSTAKE, developed by Persistence, is a liquid staking protocol unlocking the liquidity of staked assets."
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
