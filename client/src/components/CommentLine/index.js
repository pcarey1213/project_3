import React, {Component} from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import "./style.css";

const CommentLine = props => {

    return (
        <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>{props.user}</Comment.Author>
                <Comment.Metadata>
                    <div>{props.date}</div>
                </Comment.Metadata>
                <Comment.Text>{props.content}</Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Reply  
                    <div className="ui labeled button" id="like" tabIndex={0}>
                        <div className="ui red button" id="red">
                            <i className="heart icon" /> Like
                        </div>
                        <p className="ui basic red left pointing label" id="white">
                            1,048
                        </p>
                    </div>
                    </Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    )
}

export default CommentLine