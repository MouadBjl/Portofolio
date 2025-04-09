import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

const Layout = ({ children, title = 'Mouad Ben Jelloun | Portfolio' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Portfolio de Mouad Ben Jelloun, développeur web" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className={styles.container}>
                <Header />
                <main className={styles.main}>{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;