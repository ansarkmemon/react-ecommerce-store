import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Authentication from './pages/authentication/authentication.component';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={Authentication} />
      <Route exact path="/" component={HomePage} />
    </Switch>
    </>
  );
}

export default App;
