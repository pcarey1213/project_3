import React, {Component } from 'react';

const AddCategory = (props) => {
    return (
        
        <div className="card mx-auto" style={{width: "18rem"}}>
            <div className="card-body">
                <form className="p-2">
            
                    <div className="form-group">
                        <label for="addCategory">Add Category</label>
                        <input type="text" 
                            className="form-control" 
                            id="addCategory" 
                            placeholder="Add Category" 
                            onChange={props.handleInputChange}
                            value={props.value}
                            name="categoryName"
                        />
                    </div>
                    <button type="submit" 
                        className="btn btn-primary"
                        onClick={props.handleFormSubmit}
                    >
                    Add</button>
                </form>
            </div>
        </div>
        
    )
}

export default AddCategory;