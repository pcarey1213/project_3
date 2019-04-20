import React, {Component} from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'


const ChatReply = props => {

    return (
        <Form reply>
            <Form.TextArea 
                onChange={props.handleTextAreaChange}
                value={props.value}
                name="commentText"
            />
            <Button content='Add Reply' labelPosition='left' 
                icon='edit' primary 
                onClick={props.handleCommentFormSubmit}            
            />
        </Form>
    )
}

export default ChatReply