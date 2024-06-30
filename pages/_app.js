import Header from './Header';
import Footer from './Footer';
import '../styles/global.css';
import '../styles/Header.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
