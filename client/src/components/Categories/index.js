import React, {Component } from 'react';
// import "./style.scss";
import "./style.css";
const Categories = props => {
    
    return (
        <article className="col">
            <div className="spacer"></div>
            <div className="circle">
                <h1><a>{props.children}</a></h1> 
            </div>
        </article>
        
    )
}

export default Categories;