import React from "react";
import './Dialogs.scss'
import DialogAuthor from "./DialogAuthor/DialogAuthor";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsDataElements = state.dialogsData.map(user=><DialogAuthor id={user.id} name={user.name} key={user.id} />)

    let messagesDataElements =state.messagesData.map(mes=><DialogMessage message={mes.message} id={mes.id} key={mes.id}/>)

    let newMesElement = React.createRef();

    let addMes = () => {
        props.sendMessage();
    }

    let changeMes = () => {
        let text = newMesElement.current.value;
        props.updateNewMessageBody(text);
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
                    <textarea onChange={changeMes} ref={newMesElement} name="" id="" cols="10" rows="3" placeholder={'Enter your message'} value={state.newMessageBody}/>
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