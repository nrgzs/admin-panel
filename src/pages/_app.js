import Navbar from '@/components/navbar';
import '@/styles/globals.css';

export default function App({ Component, session, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
