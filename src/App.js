import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

//Paginas
import Home from './componentes/Home'
import bCep from './componentes/BuscadorCEP'
import bCnpj from './componentes/BuscadorCNPJ'
import bCpf from './componentes/GerarGatos'

//Style
import './styles.css';

function App() {

  return (
    
    <>
      <header className='header'>
        <Link className='MenuLink' to='/'>Home</Link>
        <Link className='MenuLink' to='/cep'>Buscador CEP</Link>
        <Link className='MenuLink' to='/cnpj'>Buscador CNPJ</Link>
        <Link className='MenuLink' to='/cats'>Generate Cats</Link>
      </header>
      
      <main>
        <Routes>
        <Route path='/' Component={Home} />
          <Route path='/cep' Component={bCep} />
          <Route path='/cnpj' Component={bCnpj} />
          <Route path='/cats' Component={bCpf} />
        </Routes>
      </main>
    </>


    
  );
  
}

export default App;
