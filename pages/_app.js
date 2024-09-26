import Header from './Header';
import Footer from './Footer';
import '../styles/global.css';
import '../styles/Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/Carousel';
import slides from './data/carouseldata.json'

function MyApp({Component, pageProps}) {
  return (
    <>
      <div>
        <Header />
      </div>
      <main>
        <Carousel data={slides}/>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
