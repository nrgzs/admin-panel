import Navbar from '@/components/navbar';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '@/store';

function App({ Component, pageProps: { session, ...pageProps } }) {
  console.log("🚀 ~ file: _app.tsx:7 ~ App ~ session:", session)
  
  return (
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </>
  );
}



export default App