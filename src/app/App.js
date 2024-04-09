import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { MainPage } from '../pages/MainPage/MainPage';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
