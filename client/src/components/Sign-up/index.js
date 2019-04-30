import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import "./style.css";
import { Form, Grid, Header, Image, Message, Button} from 'semantic-ui-react'
import SignUpForm from '../SignUpForm'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null,
			success: false,
      warning: false,
      error: false
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleRedirect= this.handleRedirect.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleRedirect (){
		this.setState({
			redirectTo: '/'
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
				// alert("You are now signed up!");
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({
						success: true,
						warning:false,
						error:false
					})
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
											username: response.data.username,
											userId: response.data._id
									})
							}
					})
				} else {
					console.log('username already taken')
					this.setState({
						success: false,
						warning: true,
						error:false
					})
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)
				this.setState({
					success: false,
					warning: false,
					error:true
				})
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
							<SignUpForm 
								success={this.state.success} 
								warning={this.state.warning} 
								error={this.state.error} 
								handleSubmit={this.handleSubmit} 
								username={this.state.username} 
								password={this.state.password} 
								handleChange={this.handleChange}>
							</SignUpForm>
						</Grid.Column>
					</Grid>
				</div>
			)
		}
	}
}

export default Signup


