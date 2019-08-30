import React from 'react';
import './App.css';
import {Route ,Switch, withRouter} from 'react-router-dom';
import Login from './components/Login';
import Nav from './components/Nav';
import Signup from './components/Signup';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';
import Error from './components/Error';
import {connect} from 'react-redux';


class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/images' component={ImageCard} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route exact path='/' component={Welcome} />
          <Route component={Error} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return{

  }
}



export default connect(mapStateToProps)(withRouter(App));
