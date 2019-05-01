import React, {Component} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import './style.css'
import FileUpload from './FileUpload'
import 'react-image-crop/dist/ReactCrop.css'
import 'semantic-ui/dist/semantic.min.css'
import API from '../../utils/API';

class UploadModal extends Component {

  constructor() {
    super()
    this.state = {
      open:false,
      yes:false,
      imgSrc: null
    }

    this.show = this.show.bind(this)
    this.close = this.close.bind(this)
    this.yes = this.yes.bind(this)
  }
  

  show = () => () => this.setState({ open: true })
  close = () => this.setState({open: false })

  yes = () => {
    this.setState({ open: false, yes: true})

    // API.updateProfilePhoto()
  }
  updateImg (imgObject) {
    this.setState(imgObject)
  }

  render(){
    const {open, yes} = this.state
    console.log(this.state)
    console.log("Upload modal.js this.props")
        console.log(this.props)

    return (
      <div>
      <Button id='show' color='blue' onClick={this.show(true)}>Edit Image</Button>

      <Modal id='looks' open={open} onClose={this.close}>
      <Header icon='archive' content='Upload New Image' />
      <Modal.Content>
        <FileUpload updateUser={this.props.updateUser} 
          updateImg={this.updateImg}
          yes ={ this.state.yes }
          userId = {this.props.userId}/> 
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
