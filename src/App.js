import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import './App.css';
import Sale from './pages/Sale';
import HeadWear from './pages/HeadWear/HeadWear';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/head-ware' element={<HeadWear />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
