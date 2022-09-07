
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Socios from './components/Socios';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="container-fluid main">
      <Header />
      <ItemListContainer />
      <ItemDetailContainer />
      <Socios />
      <Footer />
    </div>
  );
}

export default App;
