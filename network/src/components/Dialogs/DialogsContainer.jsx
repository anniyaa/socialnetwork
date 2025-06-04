import React from "react";
import './Dialogs.scss'
import {addNewMessageCreator, updateNewMessagesBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {Navigate} from "react-router-dom";
import withAuthNavigate from "../../hoc/withAuthNavigate";

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

let AuthNavigateComponent = withAuthNavigate(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent);

export default DialogsContainer;