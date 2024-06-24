import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping ,faBolt} from '@fortawesome/free-solid-svg-icons';
import logo from "../images/e-c logo.jpg";
import user from "../images/user.png";
import "./navbar.css";

const NavBar = () => {
    return (
        <div  className='nav'>
            <img src={logo} style={{ width: "100px" }} className='me-5 ms-5' alt="logo" />
            <form className="d-flex my-4">
                <input style={{ width: "300px", height: "50px" }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button style={{ height: "50px" }} className="btn btn-outline-primary">  <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
            
            <FontAwesomeIcon style={{ height: "30px", color: "gray" }} className="ms-auto p-2 bd-highlight me-3 my-4" icon={faCartShopping} />
            <FontAwesomeIcon style={{ height: "30px", color: "gray" }} className='me-3' icon={faBolt} />

            <img src={user} style={{ width: "70px", height: "70px" }} className='p-2 flex-shrink-1 bd-highlight me-5 my-2' alt="user" />
        </div>
    );
}

export default NavBar;
