import React, { Component } from 'react'
import Categories from "../components/Categories";
import SecondCategory from "../components/SecondCategory";
import ThirdCategory from "../components/ThirdCategory";
import { Col, Row, Container } from "../components/Grid";
import API from '../utils/API';
import { Route, Link } from 'react-router-dom'



class SearchResult extends Component {
    constructor() {
        super()
        this.state = {
            results : {},
            searchText : ""
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.searchCategory = this.searchCategory.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        
    }
    componentDidMount() {
        console.log("-------------------------this.props")
        console.log(this.props);
        // this.searchCategory();
    }

    searchCategory() {
        // const url = this.props.location.pathname
        API.searchCategory(this.state.searchText)
        .then(res => {
            console.log("wannna check")
            console.log(res.data)
            this.setState({
                results : res.data,
                searchText : ""
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
    handleSearchSubmit (event){
        event.preventDefault();
        this.searchCategory()

    }

    render() {
        
        return (
            <Container> 
                <Row>
                <form className="item mx-auto mt-5" id="item" 
                onSubmit={(e)=>this.handleSearchSubmit(e)}>
                    <div className="ui icon input" id="search" >
                      <input type="text" 
                        placeholder="Search..." 
                        onChange={(e)=>this.handleInputChange(e)}
                        name="searchText"
                      />                  
                      <i className="search link icon pt-1" type="submit"
                        //   onClick = {(e)=>this.handleSearchSubmit(e)}
                        />                      
                    </div>


                  </form>
                    
                </Row> 
                <p>{this.props.searchText}</p>
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
                ) : (null)}
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
                ) : (null)}
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
                ) : (null)}
                {this.state.results.first === null
                && this.state.results.second === null
                && this.state.results.third === null ? (
                    <div>
                        <p>No results</p>
                    </div>
                ) : (null)}
                
            </Container>
            
        )

    }
}

export default SearchResult;