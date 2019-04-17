import React, {Component } from 'react';
// import "./style.scss";
import "./style.css";
const ThirdCategory = props => {
    
    return (
        <article className="col c3Col">
            <div className="spacer"></div>
            <div className="circle C3">
                <h1>{props.children}</h1> 
            </div>
        </article>
        
    )
}

export default ThirdCategory;
