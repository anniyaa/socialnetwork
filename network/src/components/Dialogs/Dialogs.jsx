import React from "react";
import './Dialogs.scss'
import DialogAuthor from "./DialogAuthor/DialogAuthor";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = (props) => {

    let dialogsData = [{id:1,name:'Nina'},{id:2,name:'Sam'},{id:3,name:'Veronica'},{id:4,name:'Katy'},
                       {id:5,name:'Oscar'},{id:6,name:'Mary'}]

    let dialogsDataElements = dialogsData.map(user=><DialogAuthor id={user.id} name={user.name} />)

    let messagesData = [{id:1,message:'Hello'},{id:1,message:'Are you here'},
                        {id:1,message:'How are you here?'}]

    let messagesDataElements = messagesData.map(mes=><DialogMessage message={mes.message} id={mes.id}/>)

    return (
        <div className='dialogs'>
            <div className='dialog__names'>
                <ul>
                    {dialogsDataElements}
                </ul>
            </div>
            <div className='dialog__messages'>
                <div className='dialog__messages'>
                    {messagesDataElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;