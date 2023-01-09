import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/ogimage.jpeg" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet" />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}