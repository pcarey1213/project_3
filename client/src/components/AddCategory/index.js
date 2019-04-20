import React, {Component } from 'react';
import './style.css';
import { Input } from 'semantic-ui-react'


const AddCategory = (props) => {
    return (
        <div className="con">
            <div className="spacer"></div>
            <div className="add" id="cir">
                        <h2 className="title">Add Category</h2>
                        <div className="ui input" id="input" >
                            <input type="text" 
                                id="addCategory" 
                                placeholder="Add Category" 
                                onChange={props.handleInputChange}
                                value={props.value}
                                name="categoryName"/>
                        </div>    
                    <div className="plus">  
                   <button className="submit" type="submit" 
                   onClick={props.handleAddFormSubmit}>
                       <i class="fas fa-plus" id="icon"></i> 
                   </button>   
                    </div> 
                </div>
            </div>
    )
}

export default AddCategory;

