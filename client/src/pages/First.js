import React, { Component } from 'react'
import SecondCategory from "../components/SecondCategory";
import { Col, Row, Container } from "../components/Grid";
import AddCategory from '../components/AddCategory';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import { Route, Link } from 'react-router-dom'
import ChatReply from '../components/ChatReply'
import CommentLine from '../components/CommentLine'
import { Button, Comment, Form, Header } from 'semantic-ui-react'



class First extends Component {
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
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddFormSubmit = this.handleAddFormSubmit.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleCommentFormSubmit = this.handleCommentFormSubmit.bind(this)
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
    }
    componentDidMount() {
        console.log("-------------------------this.props")
        console.log(this.props);
        // console.log("-------------------------this.state.subCategory")
        // console.log(this.state.subCategory);
        this.getOneCategory();
        this.setState({
            id : this.props.match.params.id
        })
    }

    getOneCategory() {
        const url = this.props.location.pathname
        API.getOneCategory(url)
        .then(res => {
            console.log("--------------------------res.data")
            console.log(res.data)
            this.setState({
                category : res.data.categoryTitle,
                subCategory : res.data.subCategory,
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
    handleTextAreaChange (event){
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }
    handleAddFormSubmit = (event) => {
        event.preventDefault();
        API.addSecondSubCategory(this.state.id, {
            categoryTitle : this.state.categoryName,
            higherCategory : this.state.id
        })
            .then(res => this.getOneCategory())
            .catch(err => {
                console.log(err)
            });
    }
    handleCommentFormSubmit = (event) => {
        event.preventDefault();
        console.log("-------------------this.props.userId");
        console.log(this.props.userId);
        API.addCommentToFirst(this.state.id, {
            content : this.state.commentText,
            dates : new Date(),
            firstCategory : this.state.id,
            user : this.props.userId

        })
        .then(res => this.getOneCategory())
        .catch(err => {
            console.log(err)
        });
    }

    render() {
        
        return (
            <Container>  
                <Row>
                    <Jumbotron>
                    {this.state.category}
                    </Jumbotron>
                </Row> 
                {this.state.subCategory ? (
                    <div>
                    {this.state.subCategory.map(sub =>(
                        <Link to={`/category2/${sub._id}`}>
                            <SecondCategory
                                key={sub._id}
                            >
                                {sub.categoryTitle}
                            </SecondCategory>
                        </Link>

                    ))}
                    </div>
                ): (
                    <div></div>
                )}                              
                <Row>

                    <Comment.Group>
                        <Header as='h3' dividing>
                            Chat
                        </Header>
                        {this.state.comment ? (
                            <div>
                                {this.state.comment.map(com => (
                                    <CommentLine
                                        key = {com._id}
                                        user = {com.user._id}
                                        date = {com.dates}
                                        content = {com.content}
                                    >
                                    </CommentLine>
                                ))}
                            </div>
                        ): (
                            <CommentLine></CommentLine>
                        )}
                        <ChatReply
                            value = {this.state.commentText}
                            handleTextAreaChange = {this.handleTextAreaChange}
                            handleCommentFormSubmit = {this.handleCommentFormSubmit}
                        ></ChatReply>


                    </Comment.Group>

                </Row> 
                <Row>                    
                    <AddCategory 
                        value = {this.state.categoryName}
                        handleInputChange = {this.handleInputChange}
                        handleAddFormSubmit = {this.handleAddFormSubmit}
                    />                    
                </Row>
            </Container>
            
        )

    }
}

export default First;