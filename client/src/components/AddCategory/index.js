import React, {Component } from 'react';
import './style.css';
import { Input } from 'semantic-ui-react'


const AddCategory = (props) => {
    return (
        <div className="con">
            <div className="spacer"></div>
                <form className="add" id="cir" onSubmit={props.handleAddFormSubmit}>
                    <h2 className="title">Add Bubble</h2>
                     <div className="ui input" id="input" >
                        <input type="text" 
                                id="addCategory" 
                                placeholder="Bubble Name" 
                                onChange={props.handleInputChange}
                                value={props.value}
                                name="categoryName"/>
                        </div>    
                     <div className="plus">  
                        <button className="submit" type="submit">
                                <i className="fas fa-plus" id="icon"></i> 
                        </button>   
                    </div> 
                </form>
            </div>
    )
}

export default AddCategory;

