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
        <Menu secondary id="menu">
          <Menu.Item as={ Link } name='brand'id="brand" active={activeItem === 'brand'} onClick={this.handleItemClick} to="/">
            <Image src='../bubble.png' id="logo" />
            <h1 id="bubbles" >Bubbles</h1>
          </Menu.Item>
          {loggedIn ? [
          <Menu.Item as={ Link } name='user' id="user" active={activeItem === 'user'} onClick={this.handleItemClick} to={/user/+this.props.userId}>
            <Label image id="label">
              <img  id= "pic" src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
              {this.props.username}
           </Label>
          </Menu.Item>,
          <Menu.Item onClick={this.logout} name='Logout' active={activeItem === 'Logout'}/>
          ] : [
          <Menu.Item as={ Link } to="/" name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>,
          <Menu.Item as={ Link } to="/login" className="item" name='Log In' active={activeItem === 'Log In'} onClick={this.handleItemClick}/>,
          <Menu.Item as={ Link } to="/signup" className="item"name='Sign Up' active={activeItem === 'Sign Up'} onClick={this.handleItemClick}/>
          ]}
          <Menu.Item as={ Link } to={{ pathname: `/search` }} name='Search' active={activeItem === 'Search'} onClick={this.handleItemClick} id="search">
            <i className="search link icon" />
          </Menu.Item>
        </Menu>
        </div>
      )
      }
    }

export default Navbar
