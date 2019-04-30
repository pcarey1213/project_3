import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Categories from "../components/Categories";
import { Col, Row, Container } from "../components/Grid";
import AddCategory from '../components/AddCategory';
import API from '../utils/API'




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
        console.log("-------------------------this.props")
        console.log(this.props);
        this.getCategories();
    }

    getCategories() {
        API.getCategory()
        .then(res => {
            this.setState({
                categories : res.data,
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
        API.addCategory({
            categoryTitle : this.state.categoryName
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
                    <Link to={`/category/${category._id}`} key={category._id}>
                        <Categories>
                            {category.categoryTitle}
                        </Categories>
                    </Link>
                ))}
                  
                <Row>      
                    {this.props.loggedIn ? (
                        <AddCategory 
                        value = {this.state.categoryName}
                        handleInputChange = {this.handleInputChange}
                        handleAddFormSubmit = {this.handleAddFormSubmit}
                    />
                    ) : (null)}              
                    
                </Row>
            </Container>
            

        )

    }
}


export default Home

