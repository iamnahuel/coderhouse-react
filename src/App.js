
import './styles/App.css';
import Logo from './images/logo-3.png';


let titulo = "Centro Social y Deportivo Rolon";
let subtitulo = "Bienvenidos al citio oficial";

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className='col-md-4 offset-md-2'>
          <img src={Logo} className="img-fluid" />
        </div>
        <div className='col-md-4'>
          <h1>{titulo}</h1>
          <h5>{subtitulo}</h5>
        </div>
      </div>
     
    </div>
  );
}

export default App;
