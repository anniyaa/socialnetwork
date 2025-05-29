import React from "react";
import './aboutme.scss'
import ptica from "../../../assets/images/ptica.jpg"; // <img className={'ptica-content'} src={ptica} alt=""/>
import Preloader from "../../common/Preloader";

const Aboutme = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (<div className="aboutme">

        <img src={props.profile.photos.large}/>
        <p>About me</p>
    </div>);
}

export default Aboutme;