import Navbar from '@/components/navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='flex flex-col lg:flex-row   lg:gap-10'>
        <Navbar/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
