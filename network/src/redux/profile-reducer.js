import {useEffect} from "react";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {id:1,message:'Its my first post.',like:32},
        {id:2,message:'Hi, how are you?',like:10},
    ],

    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3, message: action.newPostText, like: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText,
});
export const setUserProfile =(profile) => ({
    type: SET_USER_PROFILE, profile,
})
export const setStatus =(status) => ({
    type: SET_STATUS, status,
})
export const getUserProfile =(userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(res=>{
                dispatch(setUserProfile(res.data))
        })
}
export const getStatus =(userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(res=>{
            dispatch(setStatus(res.data))
        })
}
export const updateStatus =(status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(res=>{
            if (res.data.resultCode===0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer;