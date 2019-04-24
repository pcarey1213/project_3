import React, { Component } from 'react'
import { Col, Row, Container } from "../components/Grid";
import AddCategory from '../components/AddCategory';
import API from '../utils/API';
import { Route, Link } from 'react-router-dom'
import UserPage from '../components/User-page';
import UserFeed from '../components/UserFeed';


class User extends Component {

    constructor() {
        super()
        this.state = {
            comment : [],
            username: ""
        }
    }
    componentDidMount() {
        console.log("-------------------------this.props")
        console.log(this.props);
        this.getOneUser();
        this.setState({
            id : this.props.match.params.id
        })
    }

    getOneUser() {
        const url = this.props.location.pathname
        API.getOneUser(url)
        .then(res => {
            console.log("--------------------------wanna check")
            console.log(res.data)
            this.setState({
                comment : res.data.comment,
                username : res.data.username
            })
        })
        .catch(err => console.log(err));
    }

    render() {
        
        return (
            <Container>
                <Row>
                    <UserPage
                        username = {this.state.username}
                    >
                    {this.state.comment ? (
                        <div>
                            {this.state.comment.map(com => (
                                <UserFeed
                                    key = {com._id}
                                    content = {com.content}
                                    likes = {com.likes}
                                    categoryName = {com.firstCategory.length ===1
                                        ? [com.firstCategory[0].categoryTitle]
                                        : com.secondCategory.length ===1 
                                        ? [com.secondCategory[0].categoryTitle]
                                        : com.thirdCategory.length ===1 
                                        ? [com.thirdCategory[0].categoryTitle]
                                        : ""
                                    }
                                ></UserFeed>
                            ))}
                        </div>
                    ) : <div></div>}
                    </UserPage>
                </Row>

            </Container>
      )

    }
}

export default User;