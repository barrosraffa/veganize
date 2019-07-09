import React, { Fragment } from 'react';
import './App.css';
import Nav from './componentes/Nav'
import Cabecalho from './componentes/Cabecalho';
import Substituicao from './componentes/Substituicao';
import ReceitasRapidas from './componentes/ReceitasRapidas';
import Dicas from './componentes/Dicas';
import Footer from './componentes/Footer';

function App() {
  return (
    <Fragment>
      <Nav />
      <Cabecalho />
      <Substituicao/>
      <ReceitasRapidas/>
      <Dicas/>
      <Footer/>
    </Fragment>
  );
}

export default App;
