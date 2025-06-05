import React, {useEffect} from "react";
import './profile.scss'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {authAPI, usersAPI} from "../../api/api";
import withAuthNavigate from '../../hoc/withAuthNavigate.js'
import {compose} from "redux";


function ProfileContainer(props){

    let {userId} = useParams();
    if (!userId) {
        userId = '30702';//30702 : 2
    }

    useEffect(()=>{
        if(userId) {
            props.getUserProfile(userId)
        }
    },[userId])

    useEffect(()=>{
        if(userId) {
            props.getStatus(userId)
        }
    },[userId])

    return (
        <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    );

}
let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }

)


export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus}),
    //withAuthNavigate,
)(ProfileContainer);
