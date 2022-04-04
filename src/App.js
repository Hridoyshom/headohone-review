import logo from './logo.svg';
import { Routes, Route, } from "react-router-dom";
import './App.css';
import Home from './Homepage/Home';
import Header from './Header/Header';
import Reviews from './Reviews/Reviews';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Reviews' element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
