/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import HomePage from './pages/Home.page';
import Header from './components/shared/header/Header';
import AboutPage from './pages/About.page';
import Footer from './components/shared/footer/Footer';
import Cta from './pages/Product.page';
import welcome from './animation/welcome.json';
import ContactPage from './pages/Contact.page';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);
  return (
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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cta" element={<Cta />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
