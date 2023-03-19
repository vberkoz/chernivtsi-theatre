import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Noto_Sans } from "@next/font/google";
const sans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

import { Noto_Serif_Display } from "@next/font/google";
const serif = Noto_Serif_Display({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sans.variable} ${serif.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
