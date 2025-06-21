import profileReducer, {addPostActionCreator, deletePostActionCreator} from './profile-reducer';

let state = {
    posts: [
        {id:1,message:'Its my first post.',like:32},
        {id:2,message:'Hi, how are you?',like:10},
    ]
}

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('hello test')
    let newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(3)
});
it('message of new post should be correct', () => {
    let action = addPostActionCreator('hello test')
    let newState = profileReducer(state,action)
    expect(newState.posts[2].message).toBe('hello test');
});
it('length of posts should be decremented', () => {
    let action = deletePostActionCreator(1)
    let newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(1)
});
