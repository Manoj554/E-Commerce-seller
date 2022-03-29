import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CartAny</title>

      </Head>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  )
}

export default MyApp;
