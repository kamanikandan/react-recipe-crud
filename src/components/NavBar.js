import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar pl-0 navbar-expand-lg navbar-light bg-white">
            <Link to="/recipes" className="navbar-brand mb-0 h1">Recipes</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/recipes">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/recipes/new">Create</NavLink>
                </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;