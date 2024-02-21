import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WKHJNJD');`,
            }}
          /> */}

{/* <Script
        id="GTM_TAG"
        dangerouslySetInnerHTML={{
          _html: `
               window.dataLayer = window.dataLayer || []; 
               function gtag(){dataLayer.push(arguments);} 
               gtag('js', new Date()); 
               gtag('config', 'GTM-WKHJNJD', 
               { page_path: window.location.pathname,
               });
               `,
        }}
      /> */}

<Script
        id="GTM_TAG"
        dangerouslySetInnerHTML={{
          _html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M66SG3PM');
                         `,
        }}
      ></Script>



        </Head>


        <body>
          <Main />
          <NextScript />

          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M66SG3PM"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>


          {/* <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WKHJNJD"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
