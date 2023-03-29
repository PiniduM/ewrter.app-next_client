import { Html, Head, Main, NextScript } from "next/document";
//import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0LMS757CZR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-0LMS757CZR');
          `}
        </Script> */}
          <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
