import { widolte } from '@/app/fonts'
import type { AppProps } from 'next/app'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <div className={widolte.className + " min-h-screen flex flex-col"}><Component {...pageProps} /></div>
}