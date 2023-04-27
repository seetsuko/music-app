import { Header } from './Header';
import { Footer } from './Footer';

import './App.css';
import { Router } from './routes/Router';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
