import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import { Route, Switch } from 'react-router-dom';
import AnyPage from './AnyPage';

class App extends React.Component {
  render(){
    return (
      <Switch>
        <Route path="/" exact render={(props) => (< HomePage {...props} />)} />
        <Route path="/auth" exact render={(props) => (< LoginPage {...props} />)} />
        <Route path="/any" exact render={(props) => (< AnyPage {...props} />)} />
  
      </Switch>
  
    );
  }

}



const mapStateToProps = (state)=>{
  return{
    isAuth:state.auth
  }
}
export default connect(mapStateToProps)(App);
