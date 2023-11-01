import React from "react";
import './myposts.scss'
import Post from "./post/Post";

const Myposts = () => {
    return (
        <div className="myposts">
            <textarea name="" id="" cols="10" rows="3"></textarea>
            <button>Отправить</button>
            <Post message='Hi, how are you?' like='32' />
            <Post message='Its my first post.' like='10' />
        </div>
    )
}

export default Myposts;
