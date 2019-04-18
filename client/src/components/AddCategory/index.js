import React, {Component } from 'react';
import './style.css';
import { Input } from 'semantic-ui-react'

const AddCategory = (props) => {
    return (
        <article className="con">
            <div className="spacer"></div>
            <div className="add" id="cir">
                        <label>Add Category</label>
                        <div className="ui input"><input type="text" className="input" 
                            id="addCategory" 
                            placeholder="Add Category" 
                            onChange={props.handleInputChange}
                            value={props.value}
                            name="categoryName"/>
                        </div>            
                    <i className="fas fa-plus"type="submit" id="plus" onClick={props.handleAddFormSubmit}></i>
                </div>
        </article>
        
    )
}

export default AddCategory;