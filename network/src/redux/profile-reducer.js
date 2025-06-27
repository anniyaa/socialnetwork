import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p=>p.id !== action.postId)
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile:{...state.profile, photos: action.photos}}
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
export const deletePostActionCreator = (postId) => ({
    type: DELETE_POST,
    postId,
});
export const setUserProfile =(profile) => ({
    type: SET_USER_PROFILE, profile,
})
export const setStatus =(status) => ({
    type: SET_STATUS, status,
})
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = file => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const savePhotoSuccess =(photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
})

export const saveProfile = (profileData) => async (dispatch, getState) => {
    const response = await profileAPI.saveProfile(profileData);
    if (response.data.resultCode === 0) {
        const userId = getState().auth.userId;
        return dispatch(getUserProfile(userId));
    } else {
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;