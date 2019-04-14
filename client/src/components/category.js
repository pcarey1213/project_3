import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Category extends Component {
    constructor() {
        super()
        this.state = {
            category: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handlesubmit')

        axios.post('/category', {
            category: this.state.category
        })
            .then(response => {
                console.log('category time')
                console.log(response)
            }).catch(error => {
                console.log("404 error");
                console.log(error);
            })
    }


    render() {
    if (this.state.redirectTo) {
        return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
        return (
            <div>
                <h4>Add a Category</h4>
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="category">Add</label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input className="form-input"
                                type="text"
                                id="category"
                                name="category"
                                placeholder="category"
                                value={this.state.category}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="col-7"></div>
                        <button
                            className="btn btn-primary col-1 col-mr-auto"

                            onClick={this.handleSubmit}
                            type="submit">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}
}

export default Category