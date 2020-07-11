import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { axiosWithAuth } from './utils/asiosWithAuth';

import "../css/index.css";

const Header = (props) => {   

    const [credentials, setCredentials] = useState({
        credentials: {
            username: "",
            password: ""
        }
    });

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('login', credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                props.setLoggedIn(true);
            })
    }

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
          });
    };

    const logOut = () => {
        localStorage.removeItem("token");
        props.setLoggedIn(false);
    }

    return (
        <div className="header" >
            <h3>My Friends List</h3>
            {!props.loggedIn ?
                <div><form onSubmit={login}>
                    <label for="username">
                    <input
                        type="text"
                        name="username"
                        placeholder="user name"
                        value={credentials.username}
                        onChange={handleChange}
                    /></label>
                    <label for="password">
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={credentials.password}
                        onChange={handleChange}
                    /></label>
                    <button>Log in</button>
                </form></div>
                :
                <><Link to="/add">
                    <div className="header-button">Add Friend</div>
                </Link>
                
                    <Link to="/" >
                        <div onClick={logOut} className="header-button">Log Out</div>
                    </Link></>
            }
        </div>

    );
}

export default Header;