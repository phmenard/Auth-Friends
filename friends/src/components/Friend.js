import React from "react";
import "../css/index.css";

const Friend = (props) => {
    return (
        <div className="friend">
            <div className="container">
                <h1>Name: {props.friend.name}</h1>
                <p>Age: {props.friend.age}</p>
                <p>Email: {props.friend.email}</p>
            </div>
            
            
            
        </div>
    );

}

export default Friend;