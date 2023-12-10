import React from "react";
import './Dialogs.scss'
import {addNewMessageCreator, updateNewMessagesBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMes = () => {
        props.store.dispatch(addNewMessageCreator());
    }

    let changeMes = (body) => {
        props.store.dispatch(updateNewMessagesBodyCreator(body));
    }

    return (
        <Dialogs updateNewMessageBody={changeMes} sendMessage={addMes} dialogsPage={state}/>
    )
}

export default DialogsContainer;