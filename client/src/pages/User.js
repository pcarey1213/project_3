import React, { Component } from 'react'
import { Col, Row, Container } from "../components/Grid";
import AddCategory from '../components/AddCategory';
import API from '../utils/API';
import { Route, Link } from 'react-router-dom'
import UserPage from '../components/User-page';


class User extends Component {


    render() {
        
        return (
            <UserPage></UserPage>
      )

    }
}

export default User;