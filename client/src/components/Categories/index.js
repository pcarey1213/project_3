import React, {Component } from 'react';
// import "./style.scss";
import "./style.css";
const Categories = props => {
    
    return (
        <article class="col">
            <div class="spacer"></div>
            <div class="circle">
                <h1><a>{props.children}</a></h1> 
            </div>
        </article>
        
    )
}

export default Categories;