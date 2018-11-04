import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Modal from '../components/modal'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Bangers" rel="stylesheet" />
        </Head>
        <body>
          <div id="modal"/>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
