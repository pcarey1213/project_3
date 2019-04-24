import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import 'semantic-ui/dist/semantic.min.css'
import { Card, Icon, Image, Feed } from 'semantic-ui-react'

const UserFeed = props => {

        
    return (
        <Feed>
            <Feed.Event>
            <Feed.Content>
                <Feed.Date content='1 day ago' />
                <Feed.Summary>
                Added comment <span>{props.content}</span> to category {props.categoryName} get {props.likes} Likes
                </Feed.Summary>
            </Feed.Content>
            </Feed.Event>
        </Feed>                        
    )
}

export default UserFeed;