import "../styles/global.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  useEffect(() => {
    AOS.init();
    const cursor = document.querySelector("#cursor");
    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    });
  }, []);

  return (
    <>
      <Script
        async
        src={`http://www.googletagmanager.com/gtag/js?id=GTM-WKHJNJD`}
      />
{/*       
      <Script
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
      />
    */}
      <Script
        id="GTM_TAG"
        dangerouslySetInnerHTML={{
          _html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
        
          gtag('config', 'G-EBVQRH2LLX');
               `,
        }}
      />

{/* 
      <Script
        id="APP"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Packult.com",
              "url": "https://packult.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://packult.com/#{search_term_string}",
                "query-input": "required name=search_term_string"

              }
            }
          )
        }}
      /> */}
{/* 
      <Script
        id="APP"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Packult.com",
              "url": "https://packult.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://packult.com/#{search_term_string}",
                "query-input": "required name=search_term_string"

              }
            }
          )
        }}
      /> */}

<Script
       src="https://www.googletagmanager.com/gtag/js?id=G-EBVQRH2LLX"
      />

{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-EBVQRH2LLX"></script> */}


      <Script
       src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      />


      <div id="cursor">
        <span id="cursorSpan"></span>
      </div>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
