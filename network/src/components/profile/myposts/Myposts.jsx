import React from "react";
import './myposts.scss'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsDataElements = props.posts.map(p=><Post message={p.message} like={p.like} />)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            {postsDataElements}
        </div>
    )
}

const AddNewPostForm =(props) => {
    return (
        <form onSubmit={props.handleSubmit} className="myposts">
            <Field name='newPostText' component='textarea'/>
            <button>Отправить</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;
