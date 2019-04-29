import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import './style.css'

const ModalExampleScrollingContent = () => (
  <Modal id='looks' trigger={<Button id='show' color='blue'>Edit Image</Button>} closeIcon>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
      <p>
        Your inbox is getting full, would you like us to enable automatic archiving of old messages?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> No
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)
export default ModalExampleScrollingContent

{/* <Image size='medium' src='https://semantic-ui.com/images/avatar/large/elliot.jpg' style={{ paddingBottom: 5 }} /> */}
  //       <Image size='medium' src='https://semantic-ui.com/images/avatar2/large/matthew.png' style={{ paddingBottom: 5 }} />
  //       <Image size='medium' src='https://semantic-ui.com/images/avatar/large/jenny.jpg' style={{ paddingBottom: 5 }} />
  //       <Image size='medium' src='https://semantic-ui.com/images/avatar2/large/molly.png' style={{ paddingBottom: 5 }} />