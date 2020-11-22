import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, Dima", likesCount: 12 },
                { id: 2, message: "How are you?", likesCount: 1 },
            ],
            newPostText: "dimon pokemon"
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Dima" },
                { id: 2, name: "Sasha" },
                { id: 3, name: "Juliya" },
                { id: 4, name: "Ivanka" },
                { id: 5, name: "Igor" },
            ],
            messages: [
                { id: 1, message: "Hi, how are you?" },
                { id: 2, message: "Do you speak Russia" },
                { id: 3, message: "Did you go to work last friday?" },
                { id: 4, message: "Did you go to work last friday?" },
                { id: 5, message: "Do you love me?" },
            ],
            newMessageBody: ''
        },
    },
    _callSubscriber() {
        console.log("state  changed")
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}




export default store;
window.store = store;