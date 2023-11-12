import React from "react";
import "./NavBar.css"

import { Link } from "react-router-dom";

const NavIcon = ({ label, to, selected }) => {
    return (
        <Link to={to} className={`nav-icon ${selected ? 'selected' : ''}`}>
            {label}
        </Link>
    );
};

const NavBar = ({ selectedIcon }) => {
    const navIcons = [
        {label: 'Home', to: '/'},
        {label: 'List', to: '/list'},
        {label: 'Todo', to: '/todo'},
        {label: 'Plan', to: '/plan'},
        {label: 'City', to: '/city'}
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