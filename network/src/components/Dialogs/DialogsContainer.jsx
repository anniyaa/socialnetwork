import React from "react";
import './Dialogs.scss'
import {addNewMessageCreator, updateNewMessagesBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {Navigate} from "react-router-dom";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate,
)(Dialogs);