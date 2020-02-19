import Document, { Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document{
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        let props = { ...initialProps };

        return props;
    }
    componentDidMount(){
        //An array of assets
        let scripts = [
            { src: "/static/assets/template/js/jquery-3.2.1.min.js" },
            { src: "/static/assets/template/js/popper.min.js" },
            { src: "/static/assets/template/js/bootstrap.min.js" },
            { src: "/static/assets/template/js/jquery.superslides.min.js" },
            { src: "/static/assets/template/js/images-loded.min.js" },
            { src: "/static/assets/template/js/isotope.min.js" },
            { src: "/static/assets/template/js/baguetteBox.min.js" },
            { src: "/static/assets/template/js/form-validator.min.js" },
            { src: "/static/assets/template/js/contact-form-script.js" },
            { src: "/static/assets/template/js/custom.js" },
        ]
        //Append the script element on each iteration
        scripts.map(item => { 
            const script = document.createElement("script");
            script.async = true;
            script.src = item.src;
            document.body.appendChild(script);
            document.head.appendChild(script);
        })    
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