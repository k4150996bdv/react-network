import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_MAIN_PHOTO = 'SET_MAIN_PHOTO';

let initialState = {
    posts: [
        { id: 1, message: "Hi, Dima", likesCount: 12 },
        { id: 2, message: "How are you?", likesCount: 1 },
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_MAIN_PHOTO: {
            return { ...state, profile: {...state.profile, photos: action.photos} }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status => ({ type: SET_STATUS, status: status }))
export const setMainPhoto = (photos => ({type: SET_MAIN_PHOTO, photos}))

export const getUserProfile = (userId) => async (dispatch) => {
   const response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
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

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
        if(response.data.resultCode === 0) {
            dispatch(setMainPhoto(response.data.data.photos))
        }
} 

export default profileReducer;