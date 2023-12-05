const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY ';
const ADD_MESSAGE = 'ADD_MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id:4,message:state.newMessageBody,
            }
            state.messagesData.push(newMessage);
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            return state;
        default:
            return state;
    }
}

export const updateNewMessagesBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newText: text,
});

export const addNewMessageCreator = () => ({
    type: ADD_MESSAGE,
});

export default dialogsReducer;

