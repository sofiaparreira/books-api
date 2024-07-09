// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardBook from './components/CardBook';
import BtnCategoria from './components/BtnCategoria';
import CardRomance from './components/CardRomance';
import CardMisterio from './components/CardMisterio';
import CardTerror from './components/CardTerror';
import CardFiccao from './components/CardFiccao';
import CardFantasia from './components/CardFantasia';


import './App.css';

function App() {
  return (
    <Router>
      <div className='bg-gray-900 text-white py-16 pb-40'>
        <div className='flex justify-between w-2/3 mx-auto'>
          <BtnCategoria
            categoria={'Todos'}
            to="/"
          />
          <BtnCategoria
            categoria={'Romance'}
            to="/romance"
          />
          <BtnCategoria
            categoria={'Mistério'}
            to="/misterio"
          />
          <BtnCategoria
            categoria={'Ficção Científica'}
            to="/ficcao-cientifica"
          />
          <BtnCategoria
            categoria={'Fantasia'}
            to="/fantasia"
          />
          <BtnCategoria
            categoria={'Terror'}
            to="/terror"
          />
        </div>
        <Routes>
          <Route path="/" element={<CardBook />} />
          <Route path="/romance" element={<CardRomance />} />
          <Route path="/misterio" element={<CardMisterio />} />
          <Route path="/terror" element={<CardTerror />} />
          <Route path="/ficcao-cientifica" element={<CardFiccao />} />
          <Route path="/fantasia" element={<CardFantasia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
