import Document, { Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document{
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        let props = { ...initialProps };

        return props;
    }
    render(){
        return(
            <html>
                <Head>
                        <meta charSet="utf-8" />
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="keywords" content="" />
                        <meta name="description" content="" />
                        <meta name="author" content="" />
                        <meta name="google-site-verification" content="ABgFp9H0RON4zUdFKX83zAQr29-AZd8JNRV2G_IJ7Ms" />
                        <link rel="icon" href="/static/assets/template/images/favicon.ico" />
                        <link rel="apple-touch-icon" href="/static/assets/template/images/apple-touch-icon.png" />
                        <link rel="stylesheet" href="/static/assets/template/css/bootstrap.min.css" />
                        <link rel="stylesheet" href="/static/assets/template/css/style.css" />
                        <link rel="stylesheet" href="/static/assets/template/css/responsive.css" />
                        <link rel="stylesheet" href="/static/assets/template/css/custom.css" />

              </Head>

              <body>
                  <Main />
                  <NextScript />
              </body>
            </html>
        );
    }
}