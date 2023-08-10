import Navbar from '@/components/navbar';
import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

function App({ Component, pageProps }:AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default App