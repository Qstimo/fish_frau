import { Footer } from '../components/Footer/Footer';
import FooterDooble from '../components/FooterDooble/FooterDooble';
import { Header } from '../components/Header/Header';
import { MainPage } from '../pages/MainPage/MainPage';
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
      </div>
      {/* <Footer/> */}
      <FooterDooble />
    </div>
  );
}

export default App;
