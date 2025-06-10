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

}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 4, message: action.newMessageBody,}
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }

        default:
            return state;
    }
}

export const addNewMessageCreator = (newMessageBody) => ({
    type: ADD_MESSAGE,
    newMessageBody,
});

export default dialogsReducer;

