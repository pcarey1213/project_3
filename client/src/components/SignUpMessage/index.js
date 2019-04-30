import React from 'react';
import { Message } from 'semantic-ui-react';
import "./style.css"


const states = {
  success: <Message success header='Your user registration was successful.' content='You are now logged in to Bubbles!'/>,
  warning: <Message warning header='Username already registered!' content='Use the correct password, or sign up as another user.'/>,
  error: <Message negative header='Sign up unsuccesful!'content='There was an error signing you up.'/>,
  };

function SignUpMessage (props) {
  const state = props.state;
  return (
    <div>
      {states[state]}
    </div>
    )
  }

export default SignUpMessage
