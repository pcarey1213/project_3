import React, {Component} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import './style.css'
import FileUpload from './FileUpload'
import 'react-image-crop/dist/ReactCrop.css'
import 'semantic-ui/dist/semantic.min.css'

class UploadModal extends Component {
  state = {
      open:false,
      yes:false
  }

  show = () => () => this.setState({ open: true })
  close = () => this.setState({open: false })

  yes = () => this.setState({ open: false, yes: true})

  render(){
    const {open, yes} = this.state
    console.log(this.state)

    return (
      <div>
      <Button id='show' color='blue' onClick={this.show(true)}>Edit Image</Button>

      <Modal id='looks' open={open} onClose={this.close}>
      <Header icon='archive' content='Upload New Image' />
      <Modal.Content>
        <FileUpload updateUser={this.props.updateUser} yes={yes}/> 
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={this.close}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' onClick={this.yes}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
      </Modal>
      </div>
    )
  }
}
export default UploadModal

{/* <Image size='medium' src='https://semantic-ui.com/images/avatar/large/elliot.jpg' style={{ paddingBottom: 5 }} /> */}
  //       <Image size='medium' src='https://semantic-ui.com/images/avatar2/large/matthew.png' style={{ paddingBottom: 5 }} />
  //       <Image size='medium' src='https://semantic-ui.com/images/avatar/large/jenny.jpg' style={{ paddingBottom: 5 }} />
  //       <Image size='medium' src='https://semantic-ui.com/images/avatar2/large/molly.png' style={{ paddingBottom: 5 }} />
