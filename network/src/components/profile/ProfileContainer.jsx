import React, {useEffect} from "react";
import './profile.scss'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {usersAPI} from "../../api/api";


function ProfileContainer(props){

    let {userId} = useParams();
    if (!userId) {
        userId = '30702';
    }

    useEffect(()=>{
        if(userId) {
            props.getUserProfile(userId)
        }
    },[userId])

    if (!props.isAuth) {
        return <Navigate to="/login/" replace/>
    }

    return (
        <Profile {...props} profile={props.profile}/>
    );

}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }

)

export default connect(mapStateToProps,{getUserProfile})(ProfileContainer);

/*
    useEffect(()=>{
        usersAPI.getProfile(userId)
            .then(res=>{
            props.setUserProfile(res.data)
            })

    }, [userId])
 */