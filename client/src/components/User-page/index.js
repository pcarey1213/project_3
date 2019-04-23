import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import "./style.css";
import 'semantic-ui/dist/semantic.min.css'
import { Card, Icon, Image, Feed } from 'semantic-ui-react'
import { Col, Row, Container } from '../Grid'

const UserPage = props => {

        
        return (
            <div className="container">
            <Row>
                <Col size ="3">
                <div className="card">
                    <Card>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                        <Card.Content>
                        <Card.Header>
                            {props.username}
                        </Card.Header>
                        <Card.Meta>
                            {/* <span className='date'>Joined in 2015</span> */}
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
                        <Feed>
                            <Feed.Event>
                            <Feed.Content>
                                <Feed.Date content='1 day ago' />
                                <Feed.Summary>
                                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                </Feed.Summary>
                            </Feed.Content>
                            </Feed.Event>
                        </Feed>
                        </Card.Content>
                    </Card>
                </div>
                </Col>
            </Row>

            </div>
      )

}

export default UserPage;