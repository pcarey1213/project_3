import React, {Component} from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import "./style.css";
import Moment from 'react-moment';

const CommentLine = props => {

    return (
        <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>{props.user}</Comment.Author>
                <Comment.Metadata>
                <div><Moment format="YYYY/MM/DD hh:mm:ss a">{props.date}</Moment></div>
                </Comment.Metadata>
                <Comment.Text>{props.content}</Comment.Text>
                    {props.children}
                <Comment.Actions>
                    <Comment.Action>
                    
                    </Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    )
}

export default CommentLine