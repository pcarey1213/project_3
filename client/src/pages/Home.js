import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Categories from "../components/Categories";
import { Col, Row, Container } from "../components/Grid";
import AddCategory from '../components/AddCategory';
import API from '../utils/API'
import Second from '../pages/Second'
import SecondCategory from '../components/SecondCategory';
import test from '../pages/test';



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
            categoryTitle : this.state.categoryName
        })
            .then(res => this.getCategories())
            .catch(err => console.log(err));
    }

    handleToSecondCategories = () => {

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
                    <Link to={`/category/${category._id}`}>
                        <Categories
                            key={category._id}
                        >
                            {category.categoryTitle}
                        </Categories>
                    </Link>
                ))}
                {/* <Route path="/category/:name" 
                    component={test} 
                    // render = {()=> <SecondCategory>hahaha</SecondCategory>}
                />  */}
                {/* <Route
                    exact path = "/category/:id"
                    component={Second} />
                />     */}
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

