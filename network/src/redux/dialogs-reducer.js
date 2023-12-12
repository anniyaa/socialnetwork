const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY ';
const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialogsData: [
        {id:1,name:'Nina'},{id:2,name:'Sam'},{id:3,name:'Veronica'},{id:4,name:'Katy'},
        {id:5,name:'Oscar'},{id:6,name:'Mary'}
    ],

    messagesData: [
        {id:1,message:'Hello'},{id:2,message:'Are you here'},
        {id:3,message:'How are you here?'}
    ],

    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 4, message: state.newMessageBody,}
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageBody: '',
            }

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newText,
            }

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

