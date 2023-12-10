import React from "react";
import './myposts.scss'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsDataElements = props.posts.map(p=><Post message={p.message} like={p.like} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        //props.dispatch(addPostActionCreator());
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.dispatch(updateNewPostTextActionCreator(text));
        props.updateNewPostText(text);
    }

    return (
        <div className="myposts">
            <textarea onChange={onPostChange} ref={newPostElement} name="" id="" cols="10" rows="3" value={props.newPostText}/>
            <button onClick={ onAddPost }>Отправить</button>
            {postsDataElements}
        </div>
    )
}

export default MyPosts;
