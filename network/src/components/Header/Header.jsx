import React from "react";
import headerlogo from '../../assets/icons/header-icon.svg'
import './header.scss'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (<div className="header">
        <img className={"header-logo"} src={headerlogo} alt="logo"/>

        <div className={"login-block"}>
            {
                props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </div>);
}

export default Header;