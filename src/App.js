import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Authentication from './pages/authentication/authentication.component';


class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.state.currentUser)
    return (
      <>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Authentication} />
        <Route exact path="/" component={HomePage} />
      </Switch>
      </>
    );
  }
}

export default App;
