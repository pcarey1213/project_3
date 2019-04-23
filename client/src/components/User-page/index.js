import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import "./style.css";
import 'semantic-ui/dist/semantic.min.css'
import { Card, Icon, Image } from 'semantic-ui-react'

const UserPage = props => {

        
        return (
            <div>
                <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                    <Card.Content>
                    <Card.Header>{props.username}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                    </Card.Content>
                </Card>
                
            </div>
      )

}

export default UserPage;