import React, {Component } from 'react';
// import "./style.scss";
import "./style.css";
const Categories = props => {
    
    return (
        <article className="col c1Col"
            onClick={props.handleToSecondCategories}>
            <div className="spacer"></div>
            <div className="circle C1">
                <h1>{props.children}</h1> 
            </div>
        </article>
        
    )
}

export default Categories;