import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import "./style.css";
import 'semantic-ui/dist/semantic.min.css'
class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div className="ui secondary  menu">
                <div className="right menu">
                {loggedIn ? [
                        <Link to="#" className="ui item" onClick={this.logout}>
                        Logout</Link> 
                ] : [
                            <Link to="/" className="active item">Home</Link>,
                            <Link to="/login" className="item">Login</Link>,
                            <Link to="/signup" className="item">Sign Up</Link>
                       
                ]}
                 <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i className="search link icon" />
                        </div>
                    </div>
            </div>
        </div>


        );

        }
    }

export default Navbar
