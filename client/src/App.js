import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
// components
import Signup from './components/Sign-up'
import LoginForm from './components/Login'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import 'semantic-ui/dist/semantic.min.css'
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
import User from './pages/User';


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      userId: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          userId : response.data.user._id
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null,
          userId : null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
   
        <Navbar updateUser={this.updateUser} 
          loggedIn={this.state.loggedIn} 
          username={this.state.username} 
          userId = {this.state.userId}
        />
        {/* greet user if logged in: */}
        {this.state.loggedIn}
        {/* Routes to different components */}
        <Route
          exact path="/"
          username={this.state.username}
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup   
              updateUser={this.updateUser}
            />}/>}
        />

        <Route
          path = "/category/:id"
          render={(props) =>
            <First
            {...props}
            userId={this.state.userId}
            username={this.state.username}
            />}
          // component={First} 
          />
        <Route
          path = "/category2/:id"
          render={(props) =>
            <Second
            {...props}
            userId={this.state.userId}
            username={this.state.username}
            />}
          />
        <Route
          path = "/category3/:id"
          render={(props) =>
            <Third
            {...props}
            userId={this.state.userId}
            username={this.state.username}
            />}
          />
          <Route 
            path = "/user/:id"
            render={(props) =>
              <User
              {...props}
              userId={this.state.userId}
              username={this.state.username}
              />}
            />
            
      </div>
    );
  }
}

export default App;
