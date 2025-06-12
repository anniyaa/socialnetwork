import React from "react";
import './myposts.scss'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

    let postsDataElements = props.posts.map(p=><Post message={p.message} like={p.like} />)

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
            <Field name='newPostText' component={TextArea} validate={[required, maxLength10]} placeholder='Enter your post'/>
            <button>Отправить</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;
