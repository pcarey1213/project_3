import React, { Component } from 'react'

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
        const imageStyle = {
            width: 400
        }
        return (

            <Container>
                <div>
                    <p>It's good to be home</p>
                    {/* <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" /> */}
                </div>
                                 
                <Categories>
                    Category 1
                </Categories>             
                <Categories>
                    Category 2
                </Categories>                    
                <Categories>
                    Category 3
                </Categories>

                <Row>
                    
                        <AddCategory />
                    
                </Row>
            </Container>
            

        )

    }
}


export default Home

