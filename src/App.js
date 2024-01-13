import React from 'react';
import './App.css';
import Header from "./Components/Header"
import Home from "./Components/Home"
import Detail from "./Components/Detail"
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
