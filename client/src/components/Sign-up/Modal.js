import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const SignupModal = props => (
  <Modal trigger={<Button  onClick={props.submit}>Sign Up</Button>}>
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