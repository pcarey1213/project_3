import React, { Component } from 'react'

import Categories from "../components/Categories";
import { Col, Row, Container } from "../components/Grid";
import AddCategory from '../components/AddCategory';
import API from '../utils/API'
import Chat from '../components/Chat'


class Home extends Component {
    constructor() {
        super()

        this.state = {
            categories : [],
            categoryName: ""
        }
        this.getCategories = this.getCategories.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddFormSubmit = this.handleAddFormSubmit.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories() {
        API.getCategory()
        .then(res => {
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
        API.addCategory({
            category : this.state.categoryName
        })
            .then(res => this.getCategories())
            .catch(err => console.log(err));
    }

    render() {
        const imageStyle = {
            width: 400
        }
        return (

            <Container>
                <div>
                    {/* <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" /> */}
                </div>
                {this.state.categories.map(category => (
                    <Categories>
                        {category.category}
                    </Categories>
                ))}  
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


export default Home

