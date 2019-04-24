import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import './modal.css';

const ModalExampleShorthand = () => (
  <Modal
    trigger={<Button>Sign Up</Button>}
    header='Thanks for Signing up on Bubble!'
    actions={[ { key: 'done', content: 'Home Page', positive: true }]}
  />
  
)

export default ModalExampleShorthand