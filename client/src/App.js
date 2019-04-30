import React, { Component } from 'react';
import axios from 'axios'

import { Route } from 'react-router-dom'

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
import SearchResult from './pages/SearchResult';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      userId: null,
      searchText : ""
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    console.log("this.state.searchText");
    console.log(this.state.searchText);
    this.getUser()
  }

  updateUser (userObject) {
    console.log(" function : updateUser")
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
    console.log("------------------------this.props")
    console.log(this.props)
    return (
      <div className="App">
      
        <Navbar 
        // history = {this.props.history}
          updateUser={this.updateUser} 
          loggedIn={this.state.loggedIn} 
          username={this.state.username} 
          userId = {this.state.userId}
          searchText = {this.state.searchText}
        />
        <Switch>
        <Route
        exact path = "/"
        render={(props) =>
          <Home
          {...props}
          userId={this.state.userId}
          username={this.state.username}
          loggedIn={this.state.loggedIn} 
          />}
        />
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
            />}
        />

        <Route
          path = "/category/:id"
          render={(props) =>
            <First
            {...props}
            userId={this.state.userId}
            username={this.state.username}
            loggedIn={this.state.loggedIn} 
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
            loggedIn={this.state.loggedIn} 
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
          <Route 
           path = "/search"
          // component={SearchResult} 
          render={(props) =>
            <SearchResult
            {...props}
            userId={this.state.userId}
            username={this.state.username}
            searchText = {this.state.searchText}
            />}
          />
            </Switch>
      </div>
    );
    
  }
}

export default App;
