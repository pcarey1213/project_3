import React, { Component } from 'react'
import SecondCategory from "../components/SecondCategory";
import { Col, Row, Container } from "../components/Grid";
import AddCategory from '../components/AddCategory';
import API from '../utils/API'

class SecondCategory extends Component {
    constructor() {
        super()
        this.state = {
            categories : [],
            categoryName: ""
        }
    }
    // componentDidMount() {
    //     this.getCategories();
    // }

    // getCategories() {
    //     axios.get('/api/categories').then(res => {
    //       console.log(res.data);
          
            
    
    //         this.setState({
    //             categories: res.data
    //         })
          
    //     })
    // }

    handleInputChange (event){
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        API.saveCategory(this.state.title)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        
        return (
            <Container>                                 
                <SecondCategory>
                    Category 1
                </SecondCategory>             
                <SecondCategory>
                    Category 2
                </SecondCategory>                    
                <SecondCategory>
                    Category 3
                </SecondCategory>

                <Row>
                    
                        <AddCategory />
                    
                </Row>
            </Container>
            
        )

    }
}

export default SecondCategory;
