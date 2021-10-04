import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/brands.css'

import '../styles/globals.scss'

import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import { ToastContainer } from 'react-toastify'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <ToastContainer newestOnTop />
      <Header />
      <Container fluid className='flex-grow-1'>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
