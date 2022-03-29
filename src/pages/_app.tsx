import '@styles/global.css';
import type { AppProps } from 'next/app';

import { makeServer } from '@/mirage';

if (process.env.NODE_ENV !== 'production') {
  makeServer();
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
