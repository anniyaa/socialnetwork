import React from "react";
import './profile.scss'
import Aboutme from "./Aboutme/Aboutme";
import Myposts from "./Myposts/Myposts";

const Profile = (props) => {

    return (<div className="profile">

        <Aboutme />
        <Myposts posts={props.state.posts}
                 newPostText={props.state.newPostText}
                 dispatch={props.dispatch}
                 />
    </div>);
}

export default Profile;