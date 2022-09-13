
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Socios from './components/Socios';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="container-fluid main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/socios' element={<Socios />} />
          <Route exact path="/productos" element={<ItemListContainer />} />
          <Route exact path="/productos/:genero" element={<ItemListContainer />} />
          <Route exact path="/productos/:genero/:userId" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
