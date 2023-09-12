import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Aparelhos from './components/Aparelhos';
import VisualizarAparelho from './components/VisualizarAparelho';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aparelhos" exact component={Aparelhos} />
          <Route path="/aparelhos/:id" component={VisualizarAparelho} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
