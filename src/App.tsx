/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import Lottie from 'lottie-react';
import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';
import welcome from './animation/welcome.json';

const HomePage = lazy(() => import('./pages/Home.page'));
const AboutPage = lazy(() => import('./pages/About.page'));
const Cta = lazy(() => import('./pages/Product.page'));
const ContactPage = lazy(() => import('./pages/Contact.page'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Reduced timeout for faster load

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <BrowserRouter>
        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <Lottie animationData={welcome} />
          </div>
        ) : (
          <>
            <Header />
            <Suspense
              fallback={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                  }}
                >
                  <Lottie animationData={welcome} />
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/cta" element={<Cta />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
