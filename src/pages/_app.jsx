import '../../styles/globals.css'
import Head from "next/head"
import Header from "../components/Header/index"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>Lucas | dev</Head>
      <Header/>
      <Component {...pageProps} />
    
    </>
  )
}

export default MyApp
