import React from "react";
import './Dialogs.scss'
import DialogAuthor from "./DialogAuthor/DialogAuthor";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = (props) => {

    let dialogsDataElements = props.state.dialogsData.map(user=><DialogAuthor id={user.id} name={user.name} />)

    let messagesDataElements = props.state.messagesData.map(mes=><DialogMessage message={mes.message} id={mes.id}/>)

    let newMesElement = React.createRef();
    let addMes = () => {
        let text = newMesElement.current.value;
        alert(text);
    }

    return (
        <div className='dialogs'>
            <div className='dialog__names'>
                <ul>
                    {dialogsDataElements}
                </ul>
            </div>
            <textarea ref={newMesElement} name="" id="" cols="10" rows="3"></textarea>
            <button onClick={addMes}>post</button>
            <div className='dialog__messages'>
                <div className='dialog__messages'>
                    {messagesDataElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;