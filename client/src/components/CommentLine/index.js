import React, {Component} from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import "./style.css";
import Moment from 'react-moment';
import { Route, Link } from 'react-router-dom';
import Linkify from 'react-linkify'

const CommentLine = props => {

    return (
        <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
                <Link to={`/user/${props.userID}`}>
                <Comment.Author>{props.user} 
                <Comment.Metadata><div><Moment format="YYYY/MM/DD hh:mm:ss a">{props.date}</Moment></div>
                </Comment.Metadata>
                </Comment.Author>
                </Link>
               
                <Comment.Text><Linkify>{props.content}</Linkify>{props.children}</Comment.Text>
                   
            </Comment.Content>
        </Comment>
    )
}

export default CommentLine