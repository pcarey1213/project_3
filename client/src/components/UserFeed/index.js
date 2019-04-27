
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import "./style.css";
import 'semantic-ui/dist/semantic.min.css'
import { Feed, Label, Card, Icon, Image, Feed  } from 'semantic-ui-react'
import Timestamp from 'react-timestamp'


const UserFeed = props => {

        
    return (
        <Feed>
            <Feed.Event>
            <Feed.Content>
                <Feed.Date>
                <div><Timestamp relative date={props.dates}/></div>
                </Feed.Date>
                <Feed.Summary>            
                <div className="ui left pointing label" id='content'><span>{props.content}</span></div>
                <div className='likes'><span>{props.likes} Likes</span></div>
                <Link to = {`/${props.categoryTier}`} className='category'>#{props.categoryName}</Link>
                </Feed.Summary>
            </Feed.Content>
            </Feed.Event>
        </Feed>                        
    )
}

export default UserFeed;