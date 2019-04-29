import React, { Component } from 'react'
import SecondCategory from "../components/SecondCategory";
import { Col, Row, Container } from "../components/Grid";
import AddCategory from '../components/AddCategory';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import { Route, Link } from 'react-router-dom';
import Chat from '../components/Chat';
import ChatReply from '../components/ChatReply';
import { Button, Comment, Form, Header } from 'semantic-ui-react';

class Third extends Component { 
    constructor() {
        super()
        this.state = {
            category : "",
            subCategory: [],
            categoryName: "",
            commentText : "",
            comment :[]
        }
        this.getOneCategory = this.getOneCategory.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleCommentFormSubmit = this.handleCommentFormSubmit.bind(this)
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
    }
    componentDidMount() {
        this.getOneCategory();
        this.setState({
            id : this.props.match.params.id
        })
    }

    getOneCategory() {
        const url = this.props.location.pathname
        API.getOneCategory(url)
        .then(res => {
            this.setState({
                category : res.data.categoryTitle,
                comment : res.data.comment,
                categoryName : "",
                commentText : ""
            })
        })
        .catch(err => console.log(err));
    }

    handleInputChange (event){
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }
    handleCommentFormSubmit = (event) => {
        event.preventDefault();
        API.addCommentToThird(this.state.id, {
            content : this.state.commentText,
            dates : new Date(),
            thirdCategory : this.state.id,
            user : this.props.userId

        })
        .then(res => this.getOneCategory())
        .catch(err => {
            console.log(err)
        });
    }
    handleTextAreaChange (event){
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }

    handleLikeChange = i => {
        this.setState(state => {
            state.comment.map((com,j) => {
                if(j===i){
                    API.updateLikes(com._id, {
                        likes : com.likes + 1
                    })
                    .then(res => this.getOneCategory())
                    .catch(err => {
                        console.log(err)
                    });  
                } 
            });
        })
    }

    render() {
        
        return (
            <Container>  
                <Row>
                    <div className="content" style={{width: "100%"}}>
                        <div className="panel-group">
                            <div className={`panel`}>
                                <div className="panel-heading">
                                    <div className="ui raised segment mt-5 mb-5">
                                        <div style={{backgroundColor:"#FFDB5C", color:"white"}} 
                                            className="ui ribbon massive label">BUBBLE</div>
                                        <span style={{fontSize:"24px"}}>{this.state.category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Jumbotron>
                    {this.state.category}
                    </Jumbotron> */}
                </Row>                              
                <Row>
                    <Comment.Group>
                    <Header as='h3' dividing>
                        Chat
                    </Header>
                    <Chat handleLikeChange = {this.handleLikeChange} getOneCategory = {this.getOneCategory} comment={this.state.comment}>
                    </Chat>
                        <ChatReply
                            value = {this.state.commentText}
                            handleTextAreaChange = {this.handleTextAreaChange}
                            handleCommentFormSubmit = {this.handleCommentFormSubmit}
                        ></ChatReply>
                    </Comment.Group>
                </Row> 

            </Container>   
        )
    }
}

export default Third;