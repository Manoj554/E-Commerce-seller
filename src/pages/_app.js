import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Layout from '../layout/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>CartAny - Seller</title>
                <link rel="shortcut icon" href="Cartanyviolet.png" type="image/x-icon" />

            </Head>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </>
    )
}

export default MyApp;
