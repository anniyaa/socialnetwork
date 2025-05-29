import React, {useEffect} from "react";
import './profile.scss'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {usersAPI} from "../../api/api";


function ProfileContainer(props){

    let {userId} = useParams();
    if (!userId) {
        userId = '30702';
    }

    useEffect(()=>{
        usersAPI.getProfile(userId)
            .then(res=>{
            props.setUserProfile(res.data)
            })

    }, [userId])


    return (
        <Profile {...props} profile={props.profile}/>
    );

}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
    }

)

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);

/*
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                props.setUserProfile(response.data)
            });
    }, [userId]);
 */