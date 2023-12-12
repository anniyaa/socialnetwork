import React from "react";
import './Dialogs.scss'
import {addNewMessageCreator, updateNewMessagesBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';

/*

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


 */

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessagesBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(addNewMessageCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;