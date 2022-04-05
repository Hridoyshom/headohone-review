import logo from './logo.svg';
import { Routes, Route, } from "react-router-dom";
import './App.css';
import Home from './Homepage/Home';
import Header from './Header/Header';
import Reviews from './Reviews/Reviews';
import Dashboard from './Dashboard/Dashboard';
import Blogs from './Blogs/Blogs';
import About from './About/About';
import NotFound from './NotFound/NotFound';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Reviews' element={<Reviews />} />
        <Route path='Dashboard' element={<Dashboard />} />
        <Route path='Blogs' element={<Blogs />} />
        <Route path='About' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
