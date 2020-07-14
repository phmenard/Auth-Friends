import React, { useState } from "react";
import "../css/index.css";
import { axiosWithAuth } from "./utils/asiosWithAuth";
import { useHistory } from "react-router-dom"

const NewFriend = () => {
    let history = useHistory();

    const [newFriend, setNewFriend] = useState({
        id: "",
        name: "",
        age: "",
        emial: ""
    });

    const addFriend = (event) => {
        event.preventDefault();
        console.log(newFriend);
        axiosWithAuth().post('friends', newFriend)
            .then(res => {
                console.log(res);
                
            })

            history.push('/');
    }

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });


    };

    return (
        <div className="friends-list">
            <div className="friend">
                <div className="container">
                    <div><form onSubmit={addFriend}>
                        <label htmlFor="name">
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                value={newFriend.username}
                                onChange={handleChange}
                            /></label>
                        <label htmlFor="age">
                            <input
                                type="text"
                                name="age"
                                placeholder="age"
                                value={newFriend.age}
                                onChange={handleChange}
                            /></label>
                        <label htmlFor="email">
                            <input
                                type="text"
                                name="email"
                                placeholder="emial"
                                value={newFriend.email}
                                onChange={handleChange}
                            /></label>
                        <button>Add Friend</button>
                    </form></div>
                </div>
            </div>
        </div>
    );

}

export default NewFriend;