import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <NavLink style={{
                textDecoration: "none",
                color: "white",
                fontSize: 28
            }} to={'/login'} >
                Войти
            </NavLink>
        </header>
    )
}

export default Header;