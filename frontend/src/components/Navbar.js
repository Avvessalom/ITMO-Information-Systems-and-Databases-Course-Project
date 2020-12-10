import React from "react";
import {NavLink} from "react-router-dom";
import {Navbar_form} from "./Navbar_form";
import Image from 'react-bootstrap/Image'

export const Navbar = () => (
    <nav className="navbar navbar-light navbar-expand-lg bg-light">
        <div className="navbar-brand">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Naruto_logo.svg" width="124" height="53"/>
        </div>
        <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/~s250643/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/~s250643/ninjas">Ninjas</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/~s250643/villages">Villages</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/~s250643/countries">Countries</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/~s250643/bijus">Bijus</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/~s250643/clans">Clans</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/~s250643/citizens">Citizens</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/~s250643/technics">Technics</NavLink>
                </li>
            </ul>
            <Navbar_form />
        </div>
    </nav>
)
