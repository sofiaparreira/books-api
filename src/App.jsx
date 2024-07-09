// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardBook from './components/CardBook';
import BtnCategoria from './components/BtnCategoria';
import CardRomance from './components/CardRomance';
import CardMisterio from './components/CardMisterio';
import CardTerror from './components/CardTerror';
import CardFiccao from './components/CardFiccao';
import CardFantasia from './components/CardFantasia';
import Filter from './components/Filter';

import './App.css';
import Search from './components/Search';

function App() {
  const [filterParam, setFilterParam] = useState("");

  return (
    <Router>
      <div className='bg-gray-900 text-white py-16 pb-40'>
        <div>
          <div className='flex gap-8 xl:w-2/3 w-10/12 mx-auto'>
            <BtnCategoria categoria={'Todos'} to="/" />
            <BtnCategoria categoria={'Romance'} to="/romance" />
            <BtnCategoria categoria={'Mistério'} to="/misterio" />
            <BtnCategoria categoria={'Ficção Científica'} to="/ficcao-cientifica" />
            <BtnCategoria categoria={'Fantasia'} to="/fantasia" />
            <BtnCategoria categoria={'Terror'} to="/terror" />
          </div>
          <div className='grid grid-cols-4 gap-8 mt-8 mb-16 mx-64'>
            <div className='col-span-3'>
              <Search />
            </div>
            <div className='col-span-1'>
              <Filter filterParam={filterParam} setFilterParam={setFilterParam} />
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<CardBook filterParam={filterParam} />} />
          <Route path="/romance" element={<CardRomance filterParam={filterParam} />} />
          <Route path="/misterio" element={<CardMisterio filterParam={filterParam} />} />
          <Route path="/terror" element={<CardTerror filterParam={filterParam} />} />
          <Route path="/ficcao-cientifica" element={<CardFiccao filterParam={filterParam} />} />
          <Route path="/fantasia" element={<CardFantasia filterParam={filterParam} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
