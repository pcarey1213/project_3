import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import "./style.css";
import 'semantic-ui/dist/semantic.min.css'
import { Image, Label, Menu, Item } from 'semantic-ui-react'
import SearchResult from '../../pages/SearchResult'
// ./pages/SearchResult'

class Navbar extends Component {
  constructor() {
      super()
      this.state = {
    }
      this.logout = this.logout.bind(this)
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
 
  logout(event) {
      event.preventDefault()
      console.log('logging out')
      axios.post('/user/logout').then(response => {
        console.log(response.data)
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null,
            userId: null
          })
        }
      }).catch(error => {
          console.log('Logout error')
      })
    }

  render() {
      const loggedIn = this.props.loggedIn;
      const { activeItem } = this.state
      console.log('navbar render, props: ')
      console.log(this.props);
     
      return (
          <div className="ui secondary  menu" id="container">
              <div className="right menu" id="menu">
                  <Link to="/">
                      <Image src='../bubble.png' id="logo" />
                      <h1 id="bubbles" >Bubbles</h1>
                  </Link> 
                  {loggedIn ? [
                        <Link to="#" className="ui item" onClick={this.logout}>
                        Logout
                        </Link>, 
                        <Link to={/user/+this.props.userId}>
                          <Label image id="label">
                          <img  id= "pic" src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
                          {this.props.username}
                          </Label>
                        </Link>
                  ] : [
                        <Link to="/" className="item"  name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>Home</Link>,
                        <Link to="/login" className="item" name='Log in' active={activeItem === 'Log in'} onClick={this.handleItemClick}>Log in</Link>,
                        <Link to="/signup" className="item"name='Sign Up' active={activeItem === 'Sign Up'} onClick={this.handleItemClick}>Sign Up</Link>
                        
                  ]}
                  <form className="item" id="item" >
                    <div className="ui icon input" id="search" >
                      <Link to={{ pathname: `/search`  }}>
                        <i className="search link icon" />
                      </Link>
                    </div>
                  </form>
                  {/* <Link to="/" className="item">
                    <i className="ui question icon" />
                  </Link> */}
                </div>
            </div>

        );
        // }

      }
    }

export default Navbar
