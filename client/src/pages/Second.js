import React, { Component } from 'react'
import ThirdCategory from "../components/ThirdCategory";
import { Col, Row, Container } from "../components/Grid";
import AddCategory from '../components/AddCategory';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import Chat from '../components/Chat';
import { Route, Link } from 'react-router-dom'

class Second extends Component { 
    constructor() {
        super()
        this.state = {
            category : "",
            subCategory: [],
            categoryName: ""
        }
        this.getOneCategory = this.getOneCategory.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddFormSubmit = this.handleAddFormSubmit.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        
    }
    componentDidMount() {
        this.getOneCategory();
        // console.log("url------------------")
        // console.log(this.state.id);
        this.setState({
            id : this.props.match.params.id
        })
    }

    getOneCategory() {
        const url = this.props.location.pathname
        API.getOneCategory(url)
        .then(res => {
            console.log(res.data)
            this.setState({
                category : res.data.categoryTitle,
                subCategory : res.data.subCategory,
                categoryName : ""
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
    handleAddFormSubmit = (event) => {
        event.preventDefault();
        API.addThirdSubCategory(this.state.id, {
            categoryTitle : this.state.categoryName,
            higherCategory : this.state.id
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
                        <Link to={`/category3/${sub._id}`}>
                            <ThirdCategory
                                key={sub._id}
                            >
                                {sub.categoryTitle}
                            </ThirdCategory>
                        </Link>
                    ))}
                    </div>
                ): (
                    <div></div>
                )}                              
                <Row>
                    <Chat></Chat>
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

export default Second;