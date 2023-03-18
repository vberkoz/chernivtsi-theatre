import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Noto_Sans } from "@next/font/google";
const sans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
