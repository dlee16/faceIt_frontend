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

  createUser = (user) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then((response) => {
        if (response.errors) {
          alert(response.errors)
        } else {
          this.setUserForNewUser(response)
          // this.props.history.push('/')
        }
      })
  }

  // setCurrentUser = (response) => {
  //   this.props.setCurrentUser(response.user)
  //   localStorage.setItem("token", response.token)
  //   this.props.history.push(`/${this.props.currentUser.id}/profile`)
  // }

  // setUserForNewUser = (response) => {
  //   this.props.setCurrentUser(response.user)
  //   localStorage.setItem("token", response.token)
  //   this.props.history.push(`/`)
  // }


  
  render(){
    return(
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/images' component={ImageCard} />
          <Route path='/login' component={Login} />
          <Route path='/signup' render={(routeProps) => (<Signup {...routeProps} createUser={this.createUser} />)} />
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
