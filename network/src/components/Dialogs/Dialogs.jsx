import React from "react";
import './Dialogs.scss'
import DialogAuthor from "./DialogAuthor/DialogAuthor";
import DialogMessage from "./DialogMessage/DialogMessage";
import { Navigate } from 'react-router-dom';
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsDataElements = state.dialogsData.map(user=><DialogAuthor id={user.id} name={user.name} key={user.id} />)

    let messagesDataElements =state.messagesData.map(mes=><DialogMessage message={mes.message} id={mes.id} key={mes.id}/>)

    let newMesElement = React.createRef();

    let addNewMessages = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className='dialogs'>
            <div className='dialog__names'>
                <ul>
                    {dialogsDataElements}
                </ul>
            </div>
            <div className='dialog__messages'>

                <AddMessageFormRedux onSubmit={addNewMessages}/>

                <div className='dialog__messages'>
                    {messagesDataElements}
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form className="dialog__inputs" onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
            <button className='dialog__inputs__btn'>post</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;