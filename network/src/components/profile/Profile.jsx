import React from "react";
import './profile.scss'
import Aboutme from "./Aboutme/Aboutme";
import Myposts from "./Myposts/Myposts";

const Profile = () => {
    return (<div className="profile">
        <Aboutme />
        <Myposts />
    </div>);
}

export default Profile;