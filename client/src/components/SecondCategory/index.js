import React, {Component } from 'react';
// import "./style.scss";
import "./style.css";
const SecondCategory = props => {
    
    return (
        <article className="col c2Col">
            <div className="spacer"></div>
            <div className="circle C2">
                <h1>{props.children}</h1> 
            </div>
        </article>
        
    )
}

export default SecondCategory;
