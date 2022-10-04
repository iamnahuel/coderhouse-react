
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Socios from './components/Socios';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Provider from './components/Context/Context';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    <div className="container-fluid main">
      <Provider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/socios' element={<Socios />} />
            <Route exact path="/productos" element={<ItemListContainer />} />
            <Route exact path="/productos/:genero" element={<ItemListContainer />} />
            <Route exact path="/productos/:userId" element={<ItemDetailContainer />} />
            <Route exact path="/productos/:genero/:userId" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />}/>
            <Route exact path="/checkout" element={<Checkout />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
