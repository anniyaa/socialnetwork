import React from "react";
import './myposts.scss'
import Post from "./Post/Post";

const Myposts = () => {

    let postsData = [{id:1,message:'Its my first post.',like:32},{id:2,message:'Hi, how are you?',like:10},]

    let postsDataElements = postsData.map(p=><Post message={p.message} like={p.like} />)

    return (
        <div className="myposts">
            <textarea name="" id="" cols="10" rows="3"></textarea>
            <button>Отправить</button>
            {postsDataElements}
        </div>
    )
}

export default Myposts;
