import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './style.css'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return ( 
            <div className='login-form'>

            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'id="form">
                  <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='blue' id="header">
                      <Image src='' /> Log-in to your account
                    </Header>
                    <Form size='large'>
                      <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='username' name="username" type="text" id="username" value={this.state.username} onChange={this.handleChange}/>
                        <Form.Input
                          fluid
                          icon='lock'
                          iconPosition='left'
                          placeholder='Password'
                          name="password"
                          type='password'
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
            
                        <Button color='blue' fluid size='large' onClick={this.handleSubmit} id="button">
                          Login
                        </Button>
                      </Segment>
                    </Form>
                    <Message color='blue'>
                      New to us? <a href='/signup'>Sign Up</a>
                    </Message>
                  </Grid.Column>
                </Grid>
              </div>
            )
        }
    }
}
               

export default LoginForm
