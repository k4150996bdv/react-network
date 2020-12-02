const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    newMessageBody: 'hello'
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;


    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;