'use client';

import Script from 'next/script';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './globals.css';
import { useEffect } from 'react';
import Head from 'next/head';

export default function RootLayout({ children }) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    <Head>
        <link
            href='https://unpkg.com/aos@2.3.1/dist/aos.css'
            rel='stylesheet'></link>
        <script src='https://unpkg.com/aos@2.3.1/dist/aos.js' async></script>
        <script
            src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'
            async></script>
    </Head>;

    return (
        <html lang='en'>
            <head />
            <body>{children}</body>
        </html>
    );
}
