import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import styles from '../styles/App.modules.css'
import NavBar from '@/components/navbar-component'
import  NextNProgress from 'nextjs-progressbar'
const inter = Inter({subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className} >
    <Head>
        <title  key="title"> News App</title>
        <meta  key="description" name="description" content="NExtJs crash course" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <NextNProgress  />
    <Container className={styles.pageContainer}>
    <Component {...pageProps} />
  </Container>
  </div>
  )
}
