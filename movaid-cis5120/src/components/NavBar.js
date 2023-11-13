import React from "react";
import "./NavBar.css"

import { Link } from "react-router-dom";

const NavIcon = ({ label, to, selected }) => {
    return (
        <Link to={to} className={`nav-icon ${selected ? 'selected' : ''}`}>
            <img src={selected ? `/static/img/navbar-${label}-bold.svg` : `/static/img/navbar-${label}.svg`} alt={label}/>
        </Link>
    );
};

const NavBar = ({ selectedIcon }) => {
    const navIcons = [
        {label: 'home', to: '/'},
        {label: 'list', to: '/list'},
        {label: 'todo', to: '/todo'},
        {label: 'plan', to: '/plan'},
        {label: 'discover', to: '/discover'}
    ];

    return (
        <div className="navigation-bar">
            {navIcons.map((icon) => (
                <NavIcon
                    key={icon.label}
                    label={icon.label}
                    to={icon.to}
                    selected={selectedIcon === icon.label}
                />
            ))}
        </div>
    );
};

export default NavBar;