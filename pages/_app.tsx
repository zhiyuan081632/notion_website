import createCache from "@emotion/cache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import "@fontsource/playfair-display";
// import "@fontsource/playfair-display/500.css";
// import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
// import "@fontsource/playfair-display/800.css";
// import "@fontsource/playfair-display/900.css";
import "@fontsource/raleway";
import "@fontsource/raleway/100.css";
import "@fontsource/raleway/200.css";
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";

import React, { useEffect } from "react";

import AOS from "aos";

import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "@definitions/chakra/theme";
import { ThemeColorProvider } from "@definitions/context/theme";

import Layout from "@layouts/default";

// Global CSS
import "@styles/global.scss";

import SEO from "../next-seo.config";


import { useRouter } from 'next/router';

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType<{ children: React.ReactNode }>;
  };
  emotionCache: EmotionCache;
};

const createEmotionCache = () => {
  return createCache({ key: "css" });
};

const clientSideEmotionCache = createEmotionCache();


// 添加百度统计代码
const initBaiduStatistics = () => {
  var _hmt = ([] as any[]);
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?577db1d220d9599402b30c9355472d1e";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
};


function SencoApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: ComponentWithPageLayout): JSX.Element {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

  // 初始化百度统计代码
  initBaiduStatistics();

  }, []);

  // Google Analytics
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
        page_path: url,
      });
    }
    
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeColorProvider>
        <ChakraProvider theme={theme}>
          <DefaultSeo {...SEO} />
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </ChakraProvider>
      </ThemeColorProvider>
    </CacheProvider>
  );
}

export default SencoApp;
