import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.page';
import Header from './components/shared/header/Header';
import AboutPage from './pages/About.page';
import Footer from './components/shared/footer/Footer';
import Cta from './pages/Product.page';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cta" element={<Cta />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
