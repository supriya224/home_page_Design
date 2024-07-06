import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.page';
import Header from './components/shared/header/Header';
import AboutPage from './pages/About.page';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
