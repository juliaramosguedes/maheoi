import React from "react";
import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render(): JSX.Element {
        return (
            <Html lang="pt-BR">
                <Head>
                    {/* Facebook Pixel Code */}
                    <script dangerouslySetInnerHTML={{
                        __html: `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '263906128858074');
      fbq('track', 'PageView');`,
                    }}
                    />
                    <noscript dangerouslySetInnerHTML={{
                        __html: `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=263906128858074&ev=PageView&noscript=1" />`,
                    }}
                    />
                    {/* End - Facebook Pixel Code */}
                    {/* Global site tag (gtag.js) - Google Analytics */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-63SPKN7LVL"/>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments)}
                                gtag('js', new Date());
                                gtag('config', 'G-63SPKN7LVL');
                            `,
                        }}
                    />
                    {/* End - Global site tag (gtag.js) - Google Analytics */}
                    <meta charSet="utf-8"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;1,300&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="canonical" href="https://www.maheoi.com"/>
                    <link rel="icon" href="favicon.ico"/>
                    <meta name="robots" content="index, follow"/>
                    <meta
                        name="description"
                        content="Relaxe profundamente e entre em equilíbrio com o reiki xamânico ou adquira mais
                        consciência sobre o seu universo com o tarot. Agende sua consulta online!"
                    />
                    <meta name="author" content="Julia Ramos"/>
                </Head>
                <Main/>
                <NextScript/>
            </Html>
        );
    }
}
