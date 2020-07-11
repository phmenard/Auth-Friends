import React, { useState } from "react";
import "../css/index.css";
import { axiosWithAuth } from './utils/asiosWithAuth';

import Friend from "./Friend";

const FriendsList = () => {

    const [friends, setFriends] = useState({})

    const getFriends = () => {
        axiosWithAuth().get('friends', {authorization: localStorage.getItem("token")})
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            
        })
    }
    
    return (
       
        <div className="friends-list">
             {getFriends()}
            <div className="container">
                <Friend />
            </div>
        </div>
    );

}

export default FriendsList;