import Header from './Header';
import Footer from './Footer';
import '../styles/global.css';
import '../styles/Header.module.css';
import { useState, useEffect } from 'react';
import useScrollDirection from '../hooks/scroll';

function MyApp({ Component, pageProps }) {
  const scrollDirection = useScrollDirection();
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (scrollDirection === 'down') {
      setShowHeader(false);
    } else if (scrollDirection === 'up') {
      setShowHeader(true);
    }
  }, [scrollDirection]);

  return (
    <>
      <div className={`${showHeader ? 'header-visible' : 'header-hidden'}`}>
        <Header />
      </div>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <style jsx>{`
        .header-visible {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          transition: transform 0.3s ease;
          transform: translateY(0);
          z-index: 1000;
        }

        .header-hidden {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          transition: transform 0.3s ease;
          transform: translateY(-100%);
          z-index: 1000;
        }

        main {
          padding-top: 60px;
        }
      `}</style>
    </>
  );
}

export default MyApp;
