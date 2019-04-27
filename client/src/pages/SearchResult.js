import React, { Component } from 'react'
import Categories from "../components/Categories";
import SecondCategory from "../components/SecondCategory";
import ThirdCategory from "../components/ThirdCategory";
import { Col, Row, Container } from "../components/Grid";
import AddCategory from '../components/AddCategory';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import { Route, Link } from 'react-router-dom'
import ChatReply from '../components/ChatReply'
import CommentLine from '../components/CommentLine'
import { Button, Comment, Form, Header } from 'semantic-ui-react'



class SearchResult extends Component {
    constructor() {
        super()
        this.state = {
            results : {}
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.searchCategory = this.searchCategory.bind(this)
        
    }
    componentDidMount() {
        console.log("-------------------------this.props")
        console.log(this.props);
        this.searchCategory();
        // this.setState({
        //     id : this.props.match.params.id
        // })
    }

    searchCategory() {
        const url = this.props.location.pathname
        API.searchCategory(url)
        .then(res => {
            console.log("--------------------------wanna check")
            console.log(res.data)
            this.setState({
                results : res.data
            })
            // window.location.reload();
        })
        .catch(err => console.log(err));
    }


    render() {
        
        return (
            <Container>  
                <div className="ui raised segment mt-5">
                    <div className="ui blue ribbon label">Results</div>
                    <span>Search Categories</span>
                    <p></p>
                </div>
                {this.state.results.first
                ? (
                    <div className="p-0 m-0">
                        
                        {this.state.results.first.map(cate => (
                            <Link to={`/category/${cate._id}`} key={cate._id}>
                                <Categories>
                                    {cate.categoryTitle}
                                </Categories>
                            </Link>
                        ))}
                    </div>
                ) : (<div></div>)}
                {this.state.results.second
                ? (
                    <div>
                        {this.state.results.second.map(cate => (
                            <Link to={`/category2/${cate._id}`} key={cate._id}>
                                <SecondCategory>
                                    {cate.categoryTitle}
                                </SecondCategory>
                            </Link>
                        ))}
                    </div>
                ) : (<div></div>)}
                {this.state.results.third
                ? (
                    <div>
                        {this.state.results.third.map(cate => (
                            <Link to={`/category3/${cate._id}`} key={cate._id}>
                                <ThirdCategory>
                                    {cate.categoryTitle}
                                </ThirdCategory>
                            </Link>
                        ))}
                    </div>
                ) : (<div></div>)}
                
            </Container>
            
        )

    }
}

export default SearchResult;