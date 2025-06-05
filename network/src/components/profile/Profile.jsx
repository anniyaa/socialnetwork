import React from "react";
import './profile.scss'
import Aboutme from "./Aboutme/Aboutme";
import MyPosts from "./Myposts/MyPosts";
import MyPostsContainer from "./Myposts/MyPostsContainer";

const Profile = (props) => {
    return (

        <div className="profile">

        <Aboutme profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>

        <MyPostsContainer store={props.store} />

        </div>
    );
}

export default Profile;