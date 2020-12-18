import NextNprogress from 'nextjs-progressbar';
import Head from 'next/head';
import GoogleFonts from 'next-google-fonts';

import OfflineBanner from './OfflineBanner';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle ? `${pageTitle} - ` : ''}Babily</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Krub:wght@700&family=Montserrat+Alternates:ital,wght@0,800;1,600&display=swap" />
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <OfflineBanner />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
