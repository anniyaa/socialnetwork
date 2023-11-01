import React from "react";
import ptica from '../../assets/images/ptica.jpg'
import './profile.scss'
import Aboutme from "./aboutme/Aboutme";
import Myposts from "./myposts/Myposts";

const Profile = () => {
    return (<div className="profile">
        <Aboutme />
        <img className={'ptica-content'} src={ptica} alt=""/>
        <Myposts />
    </div>);
}

export default Profile;