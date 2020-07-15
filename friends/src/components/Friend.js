import React from "react";
import "../css/index.css";
import { IoIosCloseCircle, IoMdCreate } from "react-icons/io";
import { axiosWithAuth } from "./utils/asiosWithAuth";
import { useHistory } from "react-router-dom"

const Friend = (props) => {
    let history = useHistory();

    const removeFriend = () => {
        if (window.confirm('Are you sure you want to remove this friend?')) {
            axiosWithAuth().delete(`friends/${props.friend.id}`)
            .then(res => {
                console.log(res);
                //history.push("/");
                props.getFriends();
            })
    
            
        } else {
            // Do nothing!
        }
    }

    return (
        <div className="friend">
            <div className="container">
                <h1>Name: {props.friend.name}</h1>
                <p>Age: {props.friend.age}</p>
                <p>Email: {props.friend.email}</p>
            </div>
            <div className="friend-icons"><IoMdCreate className="edit"/><IoIosCloseCircle className="remove" onClick={removeFriend}/></div>
            
            
            
            
        </div>
    );

}

export default Friend;