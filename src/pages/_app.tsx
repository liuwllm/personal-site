import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { manrope } from "../../fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={manrope.className}>
     <Component {...pageProps} />
    </main>
  )
}
