import React, {Component} from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import "./style.css";
import Moment from 'react-moment';
import { Route, Link } from 'react-router-dom';

const CommentLine = props => {

    return (
        <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
                <Link to={`/user/${props.userID}`}>
                    <Comment.Author>{props.user}</Comment.Author>
                </Link>
                <Comment.Metadata>
                <div><Moment format="YYYY/MM/DD hh:mm:ss a">{props.date}</Moment></div>
                </Comment.Metadata>
                <Comment.Text>{props.content}</Comment.Text>
                    {props.children}
            </Comment.Content>
        </Comment>
    )
}

export default CommentLine