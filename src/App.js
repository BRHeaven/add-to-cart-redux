import './css/main.css';
import Header from './Layouts/Header';
import Product from './Layouts/Product';
import Footer from './Layouts/Footer';
import ModalCard from './components/ModalCard';
import ModalCart from './components/ModalCart';

function App() {
  return (
    <div className="App">
      <Header/>
      <Product/>
      <ModalCard/>
      <ModalCart/>
      <Footer/>
    </div>
  );
}

export default App;
