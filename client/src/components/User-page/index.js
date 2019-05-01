import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import "./style.css";
import 'semantic-ui/dist/semantic.min.css'
import { Card, Button, Image } from 'semantic-ui-react'
import { Col, Row } from '../Grid'
import UploadModal from './Modal'


class UserPage extends Component {
    constructor() {
        super()
        this.state = {
      }
    }
    render(){
        console.log("Userpage.js this.props")
        console.log(this.props)
        return (
            <div className="container">
            <Row>
                <Col size ="3">
                <div className="card">
                    <Card>
                        <Image src='https://semantic-ui.com/images/avatar2/large/kristy.png'/>
                        <Card.Content>
                        <Card.Header>
                            {this.props.username}
                        </Card.Header>
                        <Card.Meta>        
                            <UploadModal 
                                updateUser={this.props.updateUser}
                                userId = {this.props.userId}
                            />            
                        </Card.Meta>
                        <Card.Description></Card.Description>
                        </Card.Content>
                    </Card>
                </div>
                </Col>

                <Col size ="9">
                <div className="activity">
                    <Card>
                        <Card.Content>
                        <Card.Header>Activity</Card.Header>
                        </Card.Content>
                        <Card.Content>
                        {this.props.children}
                        </Card.Content>
                    </Card>
                </div>
                </Col>
            </Row>

            </div>
      )
    }
        

}

export default UserPage;