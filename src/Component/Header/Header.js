import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavLink,
} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavLink tag={RouterNavLink} to="/">Components</NavLink>
                    <NavLink tag={RouterNavLink} to="/Add">Add</NavLink>
                    <NavLink tag={RouterNavLink} to="/Posts">Posts</NavLink>
            </Navbar>
        </div>
    );
};

export default Header;