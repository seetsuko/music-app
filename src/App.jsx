import { useRecoilValue } from 'recoil';
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { Router } from './routes/Router';
import { Navbar } from './page/Navbar';
import { menuOpenState } from './atom/menuOpenState';


function App() {

  const open = useRecoilValue(menuOpenState);

  return (
    <div className="App">      
      <Header />
      {open && <Navbar />}
      <Router />
      <Footer />
    </div>
  );
}

export default App;
