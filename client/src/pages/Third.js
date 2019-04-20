import React, { Component } from 'react'
import SecondCategory from "../components/SecondCategory";
import { Col, Row, Container } from "../components/Grid";
import AddCategory from '../components/AddCategory';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import Chat from '../components/Chat'

class Third extends Component { 
    constructor() {
        super()
        this.state = {
            category : "",
            subCategory: [],
            categoryName: ""
        }
        // this.getOneCategory = this.getOneCategory.bind(this)
        // this.handleInputChange = this.handleInputChange.bind(this)
        // this.handleAddFormSubmit = this.handleAddFormSubmit.bind(this)
        // this.componentDidMount = this.componentDidMount.bind(this)
        
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
                    {/* <Chat></Chat> */}
                </Row> 
            </Container>   
        )
    }
}

export default Third;