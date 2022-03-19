import './style/App.scss';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cv from './components/cv/Cv';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Cv />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
