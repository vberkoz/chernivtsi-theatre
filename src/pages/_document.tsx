import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="text-lg text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
