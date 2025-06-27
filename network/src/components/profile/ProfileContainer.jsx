import React, {useEffect} from "react";
import './profile.scss'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus, savePhoto, saveProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";

import {compose} from "redux";


function ProfileContainer(props){

    let {userId} = useParams();
    if (!userId) {
        userId = props.authorizedUserId;
    }
    const isOwner = !userId || String(userId) === String(props.authorizedUserId);

    useEffect(()=>{
        if(userId) {
            props.getStatus(userId)
            props.getUserProfile(userId)
        }
    },[userId])

    return (
        <Profile
            {...props}
            isOwner={isOwner}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto}
            saveProfile={props.saveProfile}
        />
    );

}
let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }

)


export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
)(ProfileContainer);
