import Navbar from '@/components/navbar';
import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  console.log("🚀 ~ file: _app.tsx:7 ~ App ~ session:", session)
  
  return (
    <>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}



export default App