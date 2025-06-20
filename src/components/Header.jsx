import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import imageUrl from "../assets/avatar-icon.png";

export default function Header() {
    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    to="/host"
                    style={({isActive}) => isActive ? styles : null}
                >
                    Host</NavLink>
                <NavLink 
                    to="/about" 
                    style={({isActive}) => isActive ? styles : null}
                >
                    About</NavLink>
                <NavLink 
                    to="/vans"
                    style={({isActive}) => isActive ? styles : null} 
                >
                    Vans</NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src={imageUrl}
                        className="login-icon"
                    />
                </Link>
                <button onClick={fakeLogOut}>X</button>
            </nav>
        </header>
    );
}