import React from 'react'
import Document, {DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render(): JSX.Element {
        return(
            <Html lang="pt-BR">
                <Head>
                    {/* Início - Global site tag (gtag.js) - Google Analytics */}

                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-63SPKN7LVL" />
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
                    {/* Fim - Global site tag (gtag.js) - Google Analytics */}
                    <meta charSet="utf-8" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;1,300&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="canonical" href="https://www.maheoi.com" />
                    <link rel="icon" href="favicon.ico" />
                    <meta name="robots" content="index, follow" />
                    <meta
                        name="description"
                        content="Relaxe profundamente e entre em equilíbrio com o reiki xamânico ou adquira mais
                        consciência sobre o seu universo com o tarot. Agende sua consulta online!"
                    />
                    <meta name="author" content="Julia Ramos" />
                </Head>
                <Main />
                <NextScript />
            </Html>
        );
    }
}
