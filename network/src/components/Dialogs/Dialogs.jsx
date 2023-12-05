import React from "react";
import './Dialogs.scss'
import DialogAuthor from "./DialogAuthor/DialogAuthor";
import DialogMessage from "./DialogMessage/DialogMessage";
import {addNewMessageCreator, updateNewMessagesBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogsDataElements = props.state.dialogsData.map(user=><DialogAuthor id={user.id} name={user.name} />)

    let messagesDataElements = props.state.messagesData.map(mes=><DialogMessage message={mes.message} id={mes.id}/>)

    let newMesElement = React.createRef();

    let addMes = () => {
        props.dispatch(addNewMessageCreator());
    }

    let changeMes = () => {
        let text = newMesElement.current.value;
        props.dispatch(updateNewMessagesBodyCreator(text));
    }

    return (
        <div className='dialogs'>
            <div className='dialog__names'>
                <ul>
                    {dialogsDataElements}
                </ul>
            </div>
            <div className='dialog__messages'>
                <div className="dialog__inputs">
                    <textarea onChange={changeMes} ref={newMesElement} name="" id="" cols="10" rows="3" placeholder={'Enter your message'} value={props.state.newMessageBody}/>
                    <button className='dialog__inputs__btn' onClick={addMes}>post</button>
                </div>
                <div className='dialog__messages'>
                    {messagesDataElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;