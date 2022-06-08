import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Exo&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Dm+Sans&display=swap" rel="stylesheet"/>      
        </Head>
        <body style={{fontFamily : 'Exo'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}