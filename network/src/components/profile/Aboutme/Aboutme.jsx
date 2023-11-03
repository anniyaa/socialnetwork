import React from "react";
import './aboutme.scss'
import ptica from "../../../assets/images/ptica.jpg";

const Aboutme = () => {
    return (<div className="aboutme">
        <img className={'ptica-content'} src={ptica} alt=""/>
        <p>About me</p>
    </div>);
}

export default Aboutme;