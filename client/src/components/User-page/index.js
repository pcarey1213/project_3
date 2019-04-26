import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import "./style.css";
import 'semantic-ui/dist/semantic.min.css'
import { Card, Button, Image, Modal } from 'semantic-ui-react'
import { Col, Row, Container } from '../Grid'
import ModalExampleShorthand from './Modal';

class UserPage extends Component {

    render(){
        return (
            <div className="container">
            <Row>
                <Col size ="3">
                <div className="card">
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                        <Card.Content>
                        <Card.Header>
                            {this.props.username}
                        </Card.Header>
                        <Card.Meta>        
                            <ModalExampleShorthand />            
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