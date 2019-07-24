import React from 'react';
import './App.css';
import {Route ,Switch} from 'react-router-dom';
import Login from './components/Login';
import Nav from './components/Nav';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';
import Error from './components/Error';


class App extends React.Component{
  render(){
    return(
      <div className="App">
        This is the main page
        <Nav />
        <Switch>
          <Route path='/images' component={ImageCard} />
          <Route path='/login' component={Login} />
          <Route exact path='/' component={Welcome} />
          <Route component={Error} />
        </Switch>
      </div>
    )
  }
}

export default App;
