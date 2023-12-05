import React from "react";
import './myposts.scss'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const Myposts = (props) => {

    let postsDataElements = props.posts.map(p=><Post message={p.message} like={p.like} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className="myposts">
            <textarea onChange={onPostChange} ref={newPostElement} name="" id="" cols="10" rows="3" value={props.newPostText}/>
            <button onClick={ addPost }>Отправить</button>
            {postsDataElements}
        </div>
    )
}

export default Myposts;
