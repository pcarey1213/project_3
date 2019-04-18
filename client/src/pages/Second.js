import React, { Component } from 'react'
import SecondCategory from "../components/SecondCategory";
import { Col, Row, Container } from "../components/Grid";
import AddCategory from '../components/AddCategory';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';

class Second extends Component {
    constructor() {
        super()
        this.state = {
            categories : [],
            categoryName: "",
            id : ""
        }
        this.getOneCategory = this.getOneCategory.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddFormSubmit = this.handleAddFormSubmit.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    
    }
    componentDidMount() {
        const url = window.location.pathname
        this.getOneCategory(url);
        // console.log("url------------------")
        // console.log(this.state.id);
        this.setState({
            id : url.slice(10)
        })
    }

    getOneCategory(url) {
        API.getOneCategory(url)
        .then(res => {
            console.log(res.data)
            this.setState({
                categories : res.data
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
        API.addSubCategory(this.state.id, {
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
                    {this.state.categories.category}
                    </Jumbotron>
                </Row> 
                {this.state.categories.subCategory ? (
                    <div>
                    {this.state.categories.subCategory.map(sub =>(
                        <SecondCategory
                            key={sub._id}
                        >
                            {sub.categoryTitle}
                        </SecondCategory>
                    ))}
                    </div>
                ): (
                    <div></div>
                )}                              
                
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
