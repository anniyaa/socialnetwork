import React from "react";
import './profile.scss'
import Aboutme from "./Aboutme/Aboutme";
import Myposts from "./Myposts/Myposts";

const Profile = (props) => {

    return (<div className="profile">
        <Aboutme />
        <Myposts postData={props.state.postsData}
                 addPost={props.addPost}
                 newPostText={props.state.newPostText}
                 updateNewPostText={props.updateNewPostText}
                 />
    </div>);
}

export default Profile;