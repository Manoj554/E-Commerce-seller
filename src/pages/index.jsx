import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

export default function Home() {
    return (
        <>
            <div style={{ width: '100%', height: '100vh' }}>
                <iframe src="https://preview.cruip.com/solid" width="100%" height="100%" frameborder="0"></iframe>
            </div>
        </>
    )
}
