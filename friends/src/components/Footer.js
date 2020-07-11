import React from 'react';
//import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../css/index.css';

const Footer = props => {
    //const history = useHistory();
    return (

        <div className="footer-container">
                <footer>
                <p>&copy; 2020 <a href={`https://github.com/phmenard`} target="new">Paul H. Menard Jr.</a> </p>  

                <h3><a href={`https://github.com/phmenard/Auth-Friends`} target="new">Client-Side Authentication</a></h3>
                </footer>
            </div>

    );
}

export default Footer;