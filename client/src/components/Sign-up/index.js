import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import "./style.css";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
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
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				//route to the homepage
				alert("You are now signed up!");


				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({
						redirectTo: '/'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className='SignupForm'>

					<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' id="form">
						<Grid.Column style={{ maxWidth: 450 }}>
							<Header as='h2' color='blue' id="header">
								<Image src='../bubble.png' /> Sign Up With Us!
				</Header>
							<Form size='large'>
								<Segment stacked>
									<Form.Input fluid icon='user' iconPosition='left' placeholder='username' name="username" type="text" id="username" value={this.state.username} onChange={this.handleChange} />
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
										Sign Up
					</Button>
								</Segment>
							</Form>
						</Grid.Column>
					</Grid>
				</div>
			)
		}
	}
}

export default Signup


