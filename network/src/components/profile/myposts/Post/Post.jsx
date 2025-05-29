import React from "react";
import './post.scss'

const Post = (props) => {

    return (
        <div className="post">
            <p>{props.message}</p>
            <p>&#10084; {props.like}</p>
        </div>
    )
}

export default Post;