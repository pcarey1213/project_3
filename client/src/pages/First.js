import React, { Component } from 'react'
import SecondCategory from "../components/SecondCategory"
import { Row, Container } from "../components/Grid"
import AddCategory from '../components/AddCategory'
import API from '../utils/API'
import { Route, Link } from 'react-router-dom'
import ChatReply from '../components/ChatReply'
import Chat from '../components/Chat'
import { Comment, Header, Label } from 'semantic-ui-react'





class First extends Component {
    constructor() {
        super()
        this.state = {
            category : "",
            subCategory: [],
            categoryName: "",
            commentText : "", 
            comment :[],
            isExpanded: false
        }
        this.getOneCategory = this.getOneCategory.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddFormSubmit = this.handleAddFormSubmit.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleCommentFormSubmit = this.handleCommentFormSubmit.bind(this)
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }
    componentDidMount() {
        console.log("-------------------------this.props")
        console.log(this.props);
        this.getOneCategory();
        this.setState({
            id : this.props.match.params.id
        })
    }

    getOneCategory() {
        const url = this.props.location.pathname
        API.getOneCategory(url)
        .then(res => {
            console.log("--------------------------wanna check")
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
    handleLikeChange = i => {
        this.setState(state => {
            if(this.props.userId !== null){
                state.comment.map((com,j) => {
                    if(j===i){
                        if(!com.whoLiked.includes(this.props.userId) ){
                            API.updateLikes(com._id, {
                                likes : com.likes + 1,
                                userId : this.props.userId
                            })
                            .then(res => this.getOneCategory())
                            .catch(err => {
                                console.log(err)
                            }); 
                        } 
                    } 
                });
            }            
        })
    }
    handleToggle(e){
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight
        })
    }

    render() {
        const {isExpanded, height} = this.state;
        const currentHeight = isExpanded ? height : 0;
        const title = this.state.category
        
        return (
            <Container>  
                <Row>
                    <div className="content" style={{width: "100%"}}>
                        <div className="panel-group">
                            <div className={`panel ${isExpanded ? 'is-expanded' : ''}`} onClick={(e) => this.handleToggle(e)}>
                                <div className="panel-heading">
                                    <div className="ui raised segment mt-5 mb-5" style={{overflow:"auto"}}>
                                        <div style={{backgroundColor:"#4897D8", color:"white"}} 
                                            className="ui circular massive label"><p className="p-3">{title}</p></div>
                                        <div className="mr-5" id="accordionDes"
                                            style={{fontSize:"16px", color:"grey", float:"right", 
                                            display: "inline-block", verticalAlign: "middle"}}>
                                        Click to see all sub-bubbles</div>
                                    </div>
                                </div>
                                <div className="panel-collapse" style={{height: currentHeight+'px'}}>
                                    <div className="panel-body" ref="inner">
                                    
                                    {this.state.subCategory ? (
                                        <div>
                                        {this.state.subCategory.map(sub =>(
                                            <Link to={`/category2/${sub._id}`}
                                                key={sub._id}>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </Row> 
            
                <Row>
                    <Comment.Group>
                        <Header as='h3' dividing>
                            Chat
                        </Header>
                        <Chat 
                            handleLikeChange = {this.handleLikeChange} 
                            getOneCategory = {this.getOneCategory} 
                            comment={this.state.comment}
                        ></Chat>
                        <ChatReply
                            value = {this.state.commentText}
                            handleTextAreaChange = {this.handleTextAreaChange}
                            handleCommentFormSubmit = {this.handleCommentFormSubmit}
                        ></ChatReply>
                    </Comment.Group>
                </Row> 

                <Row>      
                    {this.props.loggedIn ? (
                        <AddCategory 
                        value = {this.state.categoryName}
                        handleInputChange = {this.handleInputChange}
                        handleAddFormSubmit = {this.handleAddFormSubmit}
                    />
                    ) : (
                        <div className="mx-auto mt-5 mb-5">
                            <Label circular color="yellow">
                                <p className="p-2">Sign up to add your own bubbles!</p>
                            </Label>
                        </div>
                    )}              
                    
                </Row>
            </Container>
            
        )

    }
}

export default First;