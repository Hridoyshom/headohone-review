import logo from './logo.svg';
import { Routes, Route, } from "react-router-dom";
import './App.css';
import Home from './Homepage/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
