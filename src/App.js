
import './styles/App.css';
import Logo from './images/logo-3.png';
import Header from './components/Header';
import Footer from './components/Footer';
import Socios from './components/Socios';

function App() {
  return (
    <div className="container-fluid main">
      <div className='header'>
        <Header />
      </div>
      <div>
        <Socios />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
