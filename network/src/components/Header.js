import React from "react";
import headerlogo from '../assets/icons/header-icon.svg'

const Header = () => {
    return (<div>
        <img className={"header-logo"} src={headerlogo} alt="logo"/>
    </div>);
}

export default Header;