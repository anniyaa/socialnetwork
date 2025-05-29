import React from "react";
import './navbar.scss'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (<div className="navbar">
       <nav>
           <ul>
               <li><NavLink to="/profile" className = { navData => navData.isActive ? 'is-active': 'not-active' }>Profile</NavLink></li>
               <li><NavLink to="/dialogs" className = { navData => navData.isActive ? 'is-active': 'not-active' }>Messages</NavLink></li>
               <li><NavLink to="/news" className = { navData => navData.isActive ? 'is-active': 'not-active' }>News</NavLink></li>
               <li><NavLink to="/music" className = { navData => navData.isActive ? 'is-active': 'not-active' }>Music</NavLink></li>
               <li><NavLink to="/settings" className = { navData => navData.isActive ? 'is-active': 'not-active' }>Settings</NavLink></li>
               <li><NavLink to="/users" className = { navData => navData.isActive ? 'is-active': 'not-active' }>Users</NavLink></li>
           </ul>
       </nav>
    </div>);
}

export default Navbar;