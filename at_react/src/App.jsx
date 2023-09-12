import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Aparelhos from './components/Aparelhos';
import VisualizarAparelho from './components/VisualizarAparelho';
import NotFound from './components/NotFound';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';


function App() {
  return (
    <>
    <Header></Header>
    </>
  );
}

export default App;
