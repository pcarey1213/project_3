import React from "react";
import "./style.css";

function Jumbotron ({children}){
   
    return (
        // <div 
        //     style={{marginTop:30, 
        //         paddingTop: 120, 
        //         paddingBottom: 120, 
        //         textAlign: "center"
        //         }}
        //     className="jumbotron">
        //     {children}
        // </div>
        <div className="jumbotron"
            style={{width: "100%"}}>
            <div className="container">
                <h1 className="display-4">Bubble <span className="badge badge-secondary">{children}</span></h1>
                <p className="lead"></p>
            </div>
        </div>
    )
}

export default Jumbotron