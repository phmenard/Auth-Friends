import React, { useState, useEffect } from "react";
import "../css/index.css";
import { axiosWithAuth } from './utils/asiosWithAuth';

import Friend from "./Friend";

const FriendsList = () => {

    const [friends, setFriends] = useState([{}])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getFriends();
    }, []);

    const getFriends = () => {
        setLoading(true);
        console.log("Getting friends", localStorage.getItem("token"));
        axiosWithAuth().get('friends')
        .then(res => {
            console.log(res);
            //localStorage.setItem('token', res.data.token);
            setFriends(res.data);
            setLoading(false);
            
        })
    }

    if (loading) {
        // Loading up the Smurf village
        return <div className="friends-list"><h2>Loading...</h2></div>;
      }
    
    return (
       
        <div className="friends-list">
             
            <div className="container">
                {friends.map((friend, i) => (
                    <Friend key={friend.id}friend={friend}/>        
                ))}
                
            </div>
        </div>
    );

}

export default FriendsList;