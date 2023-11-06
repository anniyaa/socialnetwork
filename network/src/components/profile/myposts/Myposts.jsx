import React from "react";
import './myposts.scss'
import Post from "./Post/Post";
import state from "../../../redux/state";

const Myposts = (props) => {


    let postsDataElements = props.postData.map(p=><Post message={p.message} like={p.like} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
