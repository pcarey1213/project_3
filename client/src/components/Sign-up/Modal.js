import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import './style.css'

const SignupModal = props => (
  <Modal id='modal' trigger={<Button color='blue' fluid size='large' onClick={props.submit}>Sign Up</Button>}>
    <Modal.Header>You're Signed In!</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p>Welcome to Bubbles!</p>
      </Modal.Description>
      <Modal.Actions>
      <Button onClick={props.redirect} color='green' inverted>
        <Icon name='checkmark'/> Return Home
      </Button>
    </Modal.Actions>
    </Modal.Content>
  </Modal>
)

export default SignupModal