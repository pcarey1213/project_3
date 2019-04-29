import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import "./style.css";
import CommentLine from '../CommentLine';

class Chat extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.onScroll = this.onScroll.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.componentWillUpdate = this.componentWillUpdate.bind(this)
  }
    componentDidUpdate() {
      if (this.historyChanged) {
        if (this.scrollAtBottom) {
        this.scrollToBottom();
        }
      if (this.topMessage) {
      ReactDOM.findDOMNode(this.topMessage).scrollIntoView();
        }
      }
    }
    componentWillUpdate(nextProps) {
      this.historyChanged = nextProps.comment.length !== this.props.comment.length;
      if (this.historyChanged) {
      const { messageList } = this.refs;
      const scrollPos = messageList.scrollTop;
      const scrollBottom = (messageList.scrollHeight - messageList.clientHeight);
      this.scrollAtBottom = (scrollBottom <= 0) || (scrollPos === scrollBottom);
      if (!this.scrollAtBottom) {
        const numMessages = messageList.childNodes.length;
        this.topMessage = numMessages === 0 ? null : messageList.childNodes[0];
        }
      }
    }
    onScroll = () => {
      const { refs, props } = this;
      const scrollTop = refs.messageList.scrollTop;
      if (scrollTop === 0) {
      props.getOneCategory();
      }
    }

    scrollToBottom = () => {
      const { messageList } = this.refs;
      const scrollHeight = messageList.scrollHeight;
      const height = messageList.clientHeight;
      const maxScrollTop = scrollHeight - height;
      ReactDOM.findDOMNode(messageList).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
    
    render () {
    console.log('chat, props: ')
    console.log(this.props);
    const { props, onScroll } = this;

     return(
      <ul className="collection" ref="messageList" onScroll={ onScroll }>
        {this.props.comment ? (
            <div>
                {this.props.comment.map((com, index) => (
                    <CommentLine
                        key = {com._id}
                        user={com.user ? [com.user[0].username] : ["Unknown"]}
                        // user = {com.user[0].username}
                        date = {com.dates}
                        content = {com.content}
                        likes = {com.likes}
                    >
                        <div className="ui labeled button" id="like" tabIndex={0}
                            onClick = {() => {
                                this.props.handleLikeChange(index)
                            }}>
                            <div className="ui red button" id="red">
                                <i className="heart icon" /> Like
                            </div>
                            <p className="ui basic red left pointing label" id="white">
                                {com.likes}
                            </p>
                        </div>
                    </CommentLine>
                ))}
            </div>
        ): (
            <CommentLine></CommentLine>
        )}
      </ul>
     )
    }
  }
  export default Chat