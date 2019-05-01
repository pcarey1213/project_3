import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import ReactCrop from 'react-image-crop'
import { Col, Row } from '../Grid'
import 'react-image-crop/dist/ReactCrop.css';
import {base64StringtoFile,
    downloadBase64File,
    extractImageFileExtensionFromBase64,
    image64toCanvasRef} from './Crop'
import API from '../../utils/API';
 
const imageMaxSize = 10000000000 // bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()})

class FileUpload extends Component {
    constructor(props){
        super(props)
        this.imagePreviewCanvasRef = React.createRef()
        this.fileInputRef = React.createRef()
        this.state = {
            imgSrc: null,
            imgSrcExt: null,
            crop: {
                aspect: 1/1
            }
        }
    }

    verifyFile = (files) => {
        if (files && files.length > 0) {
            const currentFile = files[0]
            const currentFileType = currentFile.type
            const currentFileSize = currentFile.size
            if (currentFileSize > imageMaxSize) {
                alert('This file is not allowed.' + currentFileSize + " bytes is too large")
                return false
         }
         if (!acceptedFileTypesArray.includes(currentFileType)) {
             alert("This file is not allowed. Only images are allowed.")
             return false
         }
         return true
         }
    }
    handleOnDrop = (files, rejectedFiles) => {
        console.log(files)
        console.log('rejected files are', rejectedFiles)
        if(rejectedFiles && rejectedFiles.length > 0) {
            // console.log(rejectedFiles)
            this.verifyFile(rejectedFiles)
        }

        if (files && files.length > 0) {
            const isVerified = this.verifyFile(files)
            if (isVerified){
                // imageBase64Data
                const currentFile = files[0]
                const reader = new FileReader()
                reader.addEventListener("load", ()=>{
                    console.log(reader.result)
                    const myResult = reader.result
                    this.setState({
                        imgSrc: myResult,
                        imgSrcExt: extractImageFileExtensionFromBase64(myResult)
                    })
                }, false)

                reader.readAsDataURL(currentFile)
        }
    }
}
    handleImageLoaded = (image) => {
        // console.log(image)
    }
    handleOnCropChange = (crop) => {
        // console.log(crop)
        this.setState({crop:crop})
        // console.log(this.state)
    }
    handleOnCropComplete = async (crop, pixelCrop) => {
         console.log(crop, pixelCrop)
        const canvasRef = this.imagePreviewCanvasRef.current
        const {imgSrc}  = this.state
        image64toCanvasRef(canvasRef, imgSrc, pixelCrop)
        if (this.state.image) {
            
            const croppedImageUrl = await this.image64toCanvasRef(
              this.state.image,
              pixelCrop
            //   "newFile.jpeg"
            );
            this.setState({ croppedImageUrl });
            // {this.props.yes ? : [this.props.updateUser({
            //    userImage : croppedImageUrl
            // })]}
          }
        }
    
    handleDownloadClick = (event) => {
        event.preventDefault()
        const canvasRef = this.imagePreviewCanvasRef.current
        const {imgSrc}  = this.state
        const fileExtension = extractImageFileExtensionFromBase64(imgSrc)
        const imageData64 = canvasRef.toDataURL('image/' + fileExtension)

        const myFilename='previewFile.' + fileExtension
      
        // file to be uploaded
        const myNewCroppedFile = base64StringtoFile(imageData64, myFilename)
        // console.log(myNewCroppedFile)
        // download file
        downloadBase64File(imageData64, myFilename)
        this.handleClearToDefault()
        }
        

    handleClearToDefault = event =>{
        if (event) event.preventDefault()
        const canvas = this.imagePreviewCanvasRef.current
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        this.setState({
            imgSrc: null,
            imgSrcExt: null,
            crop: {
                aspect: 1/1
            }

        })
        this.fileInputRef.current.value = null
    }

    handleFileSelect = event => {
        // console.log(event)
        const files = event.target.files
        if (files && files.length > 0){
              const isVerified = this.verifyFile(files)
             if (isVerified){
                 // imageBase64Data 
                 const currentFile = files[0]
                 const myFileItemReader = new FileReader()
                 myFileItemReader.addEventListener("load", ()=>{
                     console.log(myFileItemReader.result)
                     const myResult = myFileItemReader.result
                     this.setState({
                         imgSrc: myResult,
                         imgSrcExt: extractImageFileExtensionFromBase64(myResult)
                     })
                 }, false)

                 myFileItemReader.readAsDataURL(currentFile)

             }
        }
    }

    updateUserPhoto(){
        console.log("this.state1")
        console.log(this.state);
        API.updateProfilePhoto(this.props.userId, this.state.imgSrc)
    }

    render () {
        const {imgSrc} = this.state
        console.log("imgSrc")
        console.log(imgSrc)
        console.log(this.state.imgSrcExt)
        console.log(this.state.crop)
        console.log("FIleUpload.js props")
        console.log(this.props)

        
        if(this.props.yes){
            // this.updateUserPhoto()
        }
        return (
            <div className="dropbox">
                <h1>Drop and Crop</h1>

                <input ref={this.fileInputRef} type='file' accept={acceptedFileTypes} multiple={false} onChange={this.handleFileSelect} />
                {imgSrc !== null ? 

                <Row>
                    <Col size='6'>
                    <div className='crop'>
                        <ReactCrop 
                        id='reactCrop'
                        src={imgSrc} 
                        crop={this.state.crop} 
                        onImageLoaded={this.handleImageLoaded}
                        onComplete={this.handleOnCropComplete}
                        onChange={this.handleOnCropChange}/>
                    </div>
                    </Col>
                    <Col size='6'>
                    <div className='cropPreview'>
                        <p>Preview Canvas Crop</p>
                        <canvas ref={this.imagePreviewCanvasRef}></canvas>
                        <button onClick={this.handleDownloadClick}>Download</button>
                        <button onClick={this.handleClearToDefault}>Clear</button>
                    </div>
                    </Col>
                    <img src={imgSrc}/>
                </Row>

                    :  
                    
                <div className="drop">
                <Dropzone onDrop={this.handleOnDrop} accept={acceptedFileTypes} multiple={false} maxSize={imageMaxSize}>
                {({getRootProps, getInputProps}) => (
                    <div id="drag"{...getRootProps()}>
                    <input {...getInputProps()} />
                    <p className="here">Drag 'n' drop an image here, or click to select an image</p>
                    </div>
                )}
                  </Dropzone>
                </div>
                }
            </div>
        )
    }
}

export default FileUpload