import React, {useEffect} from "react";
import './profile.scss'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {authAPI, usersAPI} from "../../api/api";
import withAuthNavigate from '../../hoc/withAuthNavigate.js'


function ProfileContainer(props){

    let {userId} = useParams();
    if (!userId) {
        userId = '2';
    }

    useEffect(()=>{
        if(userId) {
            props.getUserProfile(userId)
        }
    },[userId])

    return (
        <Profile {...props} profile={props.profile}/>
    );

}

let AuthNavigateComponent = withAuthNavigate(ProfileContainer)

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
    }

)

export default connect(mapStateToProps,{getUserProfile})(AuthNavigateComponent);
