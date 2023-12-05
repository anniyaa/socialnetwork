import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {

    _state: {
        profilePage: {

            posts: [
                {id:1,message:'Its my first post.',like:32},
                {id:2,message:'Hi, how are you?',like:10},
            ],

            newPostText: 'i love react',

        },
        dialogsPage: {

            dialogsData: [
                {id:1,name:'Nina'},{id:2,name:'Sam'},{id:3,name:'Veronica'},{id:4,name:'Katy'},
                {id:5,name:'Oscar'},{id:6,name:'Mary'}
            ],

            messagesData: [
                {id:1,message:'Hello'},{id:2,message:'Are you here'},
                {id:3,message:'How are you here?'}
            ],

            newMessageBody: '',

        },
    },

    _callSubscriber() {console.log('page was changed')},

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {


        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);


    }

}



export default store;

