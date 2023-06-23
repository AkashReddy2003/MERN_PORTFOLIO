
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Theme from './components/Theme';
import Cert from './pages/Cert';
function App() {
  return (
    <Router>
      <Navbar/>
      <Theme/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='cert' element={<Cert/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
