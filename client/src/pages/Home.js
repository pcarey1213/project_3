import React, { Component } from 'react';
import Categories from "../components/Categories";
import { Col, Row, Container } from "../components/Grid";
import AddCategory from '../components/AddCategory';
import API from '../utils/API';
import { Link } from "react-router-dom";

class Home extends Component {
    constructor() {
        super()
        this.state = {
            categories : [],
            categoryName: ""
        }
        this.loadCategories = this.loadCategories.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleFormSubmit = this.handleAddFormSubmit.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    };
    componentDidMount() {
        this.loadCategories();
    };

    loadCategories() {
        API.getCategories()
        .then(res => {
            this.setState({categories: res.data})
            console.log(res.data)
        })
        .catch(err => console.log(err)); 
    };

    deleteCategory = id => {
        API.deleteCategory(id)
          .then(res => this.getCategories())
          .catch(err => console.log(err));
    };

    handleInputChange (event){
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }
    handleAddFormSubmit = (event) => {
        event.preventDefault();
        API.addCategory({
            category:this.state.categoryName})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        const imageStyle = {
            width: 400
        }
        return (

            <Container>
                <div>
                    <p>It's good to be home</p>
                    {/* <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" /> */}
                </div>
                {this.state.categories.map(category => (
                    <Categories key={category._id}>
                        {category.category}
                    </Categories>
                ))}     
                <Row>                    
                    <AddCategory 
                        value = {this.state.categoryName}
                        handleInputChange = {this.handleInputChange}
                        handleFormSubmit = {this.handleFormSubmit}
                    />
                </Row>
            </Container>
            

        )

    }
}

export default Home
