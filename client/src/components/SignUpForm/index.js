import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import "./style.css"

const SignUpForm = props => (
  <Form success={props.success} warning={props.warning} error={props.error} size='large' onSubmit={props.handleSubmit}>
    <Form.Input fluid icon='user' iconPosition='left' placeholder='username' name="username" type="text" id="username" value={props.username} onChange={props.handleChange} />
    <Form.Input	fluid icon='lock'iconPosition='left' placeholder='Password' name="password"	type='password' value={props.password}	onChange={props.handleChange}/>
    <Message success header='Your user registration was successful.' content='You are now logged in to Bubbles!'/>
    <Message warning header='Username already registered!' content='Use the correct password, or sign up as another user.'/>
    <Message error header='Sign up unsuccesful!'content='There was an error signing you up.'/>
    <Button color='blue' fluid size='large' type="submit" value="Submit" id="button">Sign Up</Button>
  </Form>
)


export default SignUpForm;
