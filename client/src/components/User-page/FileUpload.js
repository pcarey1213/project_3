import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import {useDropzone} from 'react-dropzone';
import ReactCrop from 'react-image-crop'
// import 'react-image-crop/dist/ReactCrop.css'
 
const imageMaxSize = 10000000000 // bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()})

class FileUpload extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgSrc: null,
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
                    // console.log(reader.result)
                    this.setState({
                        imgSrc: reader.result
                    })
                }, false)

                reader.readAsDataURL(currentFile)
        }
    }
}
    handleImageLoaded = (image) => {
        console.log(image)
    }
    handleOnCropChange = (crop) => {
        // console.log(crop)
        this.setState({crop:crop})
        // console.log(this.state)
    }
    handleOnCropComplete = (crop, pixelCrop) => {
        console.log(crop, pixelCrop)
    }

    render () {
        const {imgSrc} = this.state
        return (
            <div className="dropbox">
                <h1>Drop and Crop</h1>
                {imgSrc !== null ?
                
                    <div>
                        <ReactCrop 
                        src={imgSrc} 
                        crop={this.state.crop} 
                        onImageLoaded={this.handleImageLoaded}
                        onComplete={this.handleOnCropComplete}
                        onChange={this.handleOnCropChange}/>
                    </div>

                    :  
                    
                <div className="drop">
                <Dropzone onDrop={this.handleOnDrop} accept={acceptedFileTypes} multiple={false} maxSize={imageMaxSize}>
                {({getRootProps, getInputProps}) => (
                    <div id="drag"{...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
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