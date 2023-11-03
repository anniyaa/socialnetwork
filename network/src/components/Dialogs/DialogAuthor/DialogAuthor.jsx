import React from "react";
import './DialogAuthor.scss';
import {NavLink} from "react-router-dom";

const DialogAuthor = (props) => {

    let path = '/dialogs/' + props.id;

    return <li className={props.activeState}><NavLink to={path}>{props.name}</NavLink></li>;
}

export default DialogAuthor;