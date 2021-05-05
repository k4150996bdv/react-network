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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;