import React, {Component} from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'


const ChatReply = props => {

    return (
        <Form reply onSubmit={props.handleCommentFormSubmit}>
        <Form.TextArea 
            onChange={props.handleTextAreaChange}
            value={props.value}
            name="commentText"
        />
        <Button content='Add Reply' labelPosition='left' type="submit"
            icon='edit' primary           
        />
        </Form>
    )
}

export default ChatReply