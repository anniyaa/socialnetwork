let rerenderEntireTree = () => {console.log('state was chenged')}

let state = {

    profilePage: {

        postsData: [
            {id:1,message:'Its my first post.',like:32},
            {id:2,message:'Hi, how are you?',like:10},
        ],

        newPostText: 'i love react',

    },

    messagesPage: {

        dialogsData: [
            {id:1,name:'Nina'},{id:2,name:'Sam'},{id:3,name:'Veronica'},{id:4,name:'Katy'},
            {id:5,name:'Oscar'},{id:6,name:'Mary'}
        ],

        messagesData: [
            {id:1,message:'Hello'},{id:1,message:'Are you here'},
            {id:1,message:'How are you here?'}
        ],

    },

}

export const addPost = () => {
    let newPost = {
        id:3,message:state.profilePage.newPostText,like:0,
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; // паттерн observer
}

export default state;