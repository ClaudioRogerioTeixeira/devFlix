import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CadastroVideo from './pages/cadastro/Video/index';
import CadastroCategoria from './pages/cadastro/Categoria/index';
import Home from './pages/Home';

// Desafio criar componente 404
const Pagina404 = () => (<div>Página404</div>);

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact />   
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/Categoria" component={CadastroCategoria} />
    <Route component={Pagina404} />   
    // <Route component={() => (<div>Página 404</div>)} />   
  </Switch>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);
