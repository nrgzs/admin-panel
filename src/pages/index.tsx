
import Navbar from '@/components/navbar'
import SigninButton from '@/components/signinBtn'
import SignComponent from '@/components/signinBtn'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const Home:React.FC=()=> {
  return (
    <>
    <SigninButton/>
      <div>
        <h2>Home Page</h2>
      </div>
    </>
  )
}

/* aws bucket
awss3
mimetypes
*/ 

export default Home