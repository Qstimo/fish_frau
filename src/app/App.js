import FooterDooble from '../components/FooterDooble/FooterDooble';
import { Header } from '../components/Header/Header';
import { MainPage } from '../pages/MainPage/MainPage';
import { MenuPage } from '../pages/MenuPage/MenuPage';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="/menu/:type" element={<MenuPage />} />
        </Routes>
      </div>
      <FooterDooble />
    </div>
  );
}

export default App;
